"use server";

import { formSchema } from "./data/schema";
import { headers } from "next/headers";
import { insertSubmission } from "@/db/queries";
import { z } from "zod";

export async function submitForm(values: z.infer<typeof formSchema>) {
  const validationResult = formSchema.safeParse(values);

  if (!validationResult.success) return { error: "Something went wrong..." };

  const forwardedFor = headers().get("x-forwarded-for");
  const realIp = headers().get("x-real-ip");

  let ipAddress = forwardedFor
    ? forwardedFor.split(",")[0].trim()
    : realIp
      ? realIp.trim()
      : null;

  if (!ipAddress) {
    return { error: "Something went wrong..." };
  }

  const country = headers().get("X-Vercel-IP-Country") || "AQ";

  await insertSubmission({
    message: values.message,
    email: values.email,
    name: values.name,
    topic: values.topic,
    ipAddress,
    country,
  });

  return { ok: true };
}
