import Container from "@/components/container";
import React from "react";
import { getHeaderPadding } from "@/app/components/header";
import { twMerge } from "tailwind-merge";

const TermsOfService = () => {
  return (
    <div className={twMerge("w-full", getHeaderPadding())}>
      <Container>
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-6">
          Last updated: September 22, 2024
        </p>

        <p className="mb-6">
          Welcome to our website. By accessing or using this website, you agree
          to comply with and be bound by the following Terms of Service. Please
          read these terms carefully before using our site. If you do not agree
          to these terms, you should not use our website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
        <p className="mb-6">
          By accessing and using this website, you accept and agree to be bound
          by these Terms of Service and our Privacy Policy. These terms apply to
          all visitors, users, and others who access or use the service.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Use of the Website</h2>
        <p className="mb-4">
          You may use our website only for lawful purposes and in accordance
          with these Terms of Service. You agree not to use the website:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            In any way that violates any applicable federal, state, local, or
            international law or regulation.
          </li>
          <li className="mb-2">
            To impersonate or attempt to impersonate Joy Creative, a Joy
            Creative employee, another user, or any other person or entity.
          </li>
          <li className="mb-2">
            {`To engage in any other conduct that restricts or inhibits
                    anyone's use or enjoyment of the website, or which, as
                    determined by us, may harm Joy Creative or users of the
                    website or expose them to liability.`}
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Intellectual Property Rights
        </h2>
        <p className="mb-6">
          The website and its original content, features, and functionality are
          and will remain the exclusive property of Joy Creative and its
          licensors. Our trademarks and trade dress may not be used in
          connection with any product or service without the prior written
          consent of Joy Creative.
        </p>

        <h2 className="text-2xl font-semibold mb-4">User-Submitted Content</h2>
        <p className="mb-4">
          If you submit any information or material through our contact form or
          by any other means, you grant Joy Creative a non-exclusive,
          royalty-free, perpetual, and fully sub-licensable right to use,
          reproduce, modify, adapt, publish, translate, create derivative works
          from, distribute, and display such content throughout the world in any
          media.
        </p>
        <p className="mb-4">You represent and warrant that:</p>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            You own or control all rights in and to the content and have the
            right to grant the license granted above to us and our affiliates
            and service providers.
          </li>
          <li className="mb-2">
            All of your content does and will comply with these Terms of
            Service.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
        <p className="mb-6">
          In no event shall Joy Creative, its directors, employees, partners,
          agents, suppliers, or affiliates be liable for any indirect,
          incidental, special, consequential, or punitive damages, including
          without limitation, loss of profits, data, use, goodwill, or other
          intangible losses, resulting from (i) your use or inability to use the
          website; (ii) any unauthorized access to or use of our servers and/or
          any personal information stored therein.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Disclaimer of Warranties
        </h2>
        <p className="mb-6">
          {`Your use of the website is at your sole risk. The website is
                provided on an "AS IS" and "AS AVAILABLE" basis. The website is
                provided without warranties of any kind, whether express or
                implied, including, but not limited to, implied warranties of
                merchantability, fitness for a particular purpose,
                non-infringement, or course of performance.`}
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Changes to the Terms of Service
        </h2>
        <p className="mb-6">
          We may update our Terms of Service from time to time. We will notify
          you of any changes by posting the new Terms of Service on this page.
          You are advised to review these Terms of Service periodically for any
          changes. Changes to these Terms of Service are effective when they are
          posted on this page.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
        <p className="mb-6">
          These Terms of Service shall be governed and construed in accordance
          with the laws of Finland, without regard to its conflict of law
          provisions.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4 gap-1 flex">
          If you have any questions about these Terms of Service, You can
          contact us at
          <a
            href="mailto:contact@joycreative.io"
            rel="external nofollow noopener"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            contact@joycreative.io
          </a>
          .
        </p>

        <p className="mb-6">Thank you for visiting our website.</p>
      </Container>
    </div>
  );
};

export default TermsOfService;
