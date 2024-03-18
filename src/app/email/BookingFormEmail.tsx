import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type BookingFormEmailProps = {
  name: string;
  email: string;
  message: string;
  people: number;
  phone: string;
  time: string;
  date: string;
};

export default function BookingFormEmail({
  name,
  email,
  message,
  people,
  phone,
  time,
  date,
}: BookingFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Papayaya - New Booking Request</Preview>
      <Body>
        <Heading>You received a new booking request!</Heading>
        <Hr />
        <Container>
          <Section>
            <Text>Name: {name}</Text>
            <Text>Email: {email}</Text>
            <Text>Phone: {phone}</Text>
            <Text>Date: {date}</Text>
            <Text>Time: {time}</Text>
            <Text>People: {people}</Text>
            <Text>Message: {message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
