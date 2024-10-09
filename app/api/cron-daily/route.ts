import { fetchUnreadSubmissions, finishUnreadSubmissions } from "@/db/queries";

import ContactNotificationEmail from "@/packages/transactional/emails/ContactNotificationEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

//* DAILY CRON JOB.
// AGGREGATES ALL UNREAD CONTACT FORM SUBMISSIONS INTO AN EMAIL DAILY.
// EMAILS THEM TO MY BUSINESS EMAIL WHERE I GET PUSH NOTIFICATIONS ON MY PHONE.

export async function GET(req: Request) {
  if (
    req.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return new Response(`Unauthorized`, {
      status: 401,
    });
  }

  const submissions = await fetchUnreadSubmissions();

  // No unread contact form submissions.
  if (submissions.length < 1)
    return Response.json({ message: "No new submissions." });

  // System notifications email address environment variable is missing.
  if (!process.env.SYSTEM_NOTIFICATIONS_EMAIL)
    return Response.json({
      message: "Notification email address environment variable is missing.",
    });

  // Don't send real emails from development environment.
  if (process.env.NODE_ENV === "development")
    return Response.json({ submissions });

  // Send email to contact@joycreative.io
  const { data, error } = await resend.emails.send({
    from: "Joy Creative <cron@joycreative.io>",
    to: [process.env.SYSTEM_NOTIFICATIONS_EMAIL],
    subject: "Contact Form - Someone sent a message",
    react: ContactNotificationEmail({ submissions }),
  });

  if (error) return Response.json({ error }, { status: 500 });

  await finishUnreadSubmissions();

  return Response.json({
    submissions,
    data,
  });
}
