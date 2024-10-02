"use client";

import Container from "@/components/container";
import Form from "./components/form";
import Header from "./components/header";
import ThanksPage from "./components/thanks-page";
import { useState } from "react";

const radialBackground =
  "radial-gradient(50% 50% at 0% 0%, rgb(44, 44, 44) 0%, rgb(12, 12, 12) 100%)";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (submitted) return <ThanksPage />;

  return (
    <main className="w-full py-8">
      <Container>
        <div
          className="w-full bg-background rounded-card flex flex-col p-8 gap-2 border-2 border-muted"
          style={{ background: radialBackground }}
        >
          <Header />
          <Form setSubmitted={setSubmitted} />
        </div>
      </Container>
    </main>
  );
}
