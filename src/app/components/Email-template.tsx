import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Hello {firstName}!</h1>
    <p>Thank you for your enquiry, we will get in touch as soon as possible.</p>
  </div>
);
