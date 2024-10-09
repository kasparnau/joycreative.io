import * as React from "react";

import {
  Body,
  CodeInline,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

import { selectSubmission } from "@/db/schema";

const baseUrl = "https://joycreative.io";

const finnishTime = new Intl.DateTimeFormat("fi-FI", {
  timeZone: "Europe/Helsinki",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

interface ContactNotificationEmailProps {
  submissions?: selectSubmission[];
}

const sortDesc = (a: selectSubmission, b: selectSubmission) => b.id - a.id;

export const ContactNotificationEmail = ({
  submissions = [
    {
      id: 1,
      name: "Kaspar",
      email: "kaspar@gmail.com",
      message: "Hey! We should team up.",
      createdAt: "2024-09-08 21:42:39",
      isRead: false,
      ipAddress: "127.0.0.1",
      country: "FI",
      topic: "unknown",
    },
  ],
}: ContactNotificationEmailProps) => {
  const previewText =
    submissions.length === 1
      ? `Hey! You have an unread message from ${submissions[0].name}.`
      : `Hey! You have ${submissions.length} unread messages.`;

  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#e11d48",
            },
          },
        },
      }}
    >
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Img
              src={`${baseUrl}/images/logo/logo_red.png`}
              width="50"
              height="50"
              alt="Joy Creative"
            />
            <Hr style={hr} />
            <Heading
              as="h3"
              className="font-semibold leading-[32px] text-rose-700"
            >
              {previewText}
            </Heading>
            <Hr style={hr} />
            {submissions.sort(sortDesc).map((submission) => (
              <Section key={submission.id}>
                <Row>
                  <Column align="left" className="w-7/12">
                    <Link
                      href={`mailto:${
                        submission.email
                      }?subject=Re: ${submission.message.substring(0, 50)}...`}
                      className="bg-rose-100 py-1 px-3 text-black text-xl font-semibold"
                    >
                      <CodeInline className="rounded-full text-zinc-500 text-sm">
                        {submission.country}
                      </CodeInline>{" "}
                      {submission.name}{" "}
                    </Link>
                  </Column>
                  <Column align="right" className="w-5/12 h-[40px]">
                    <Text className="text-sm text-zinc-600">
                      {finnishTime.format(new Date(submission.createdAt + "Z"))}
                    </Text>
                  </Column>
                </Row>

                <Text className="m-0 text-sm text-zinc-600">
                  {submission.email}
                </Text>

                <Text className="m-0 text-sm text-zinc-600">
                  {submission.topic}
                </Text>

                <Text
                  className="m-0 mt-6 text-zinc-900 text-md"
                  style={{ wordBreak: "break-word" }}
                >
                  {submission.message}
                </Text>

                <Hr style={hr} />
              </Section>
            ))}
          </Section>
        </Container>
      </Body>
    </Tailwind>
  );
};

export default ContactNotificationEmail;

const main = {
  backgroundColor: "#f3f3f5",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};
