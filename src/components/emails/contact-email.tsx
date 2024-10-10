import * as React from 'react';

interface ContactEmailProps {
  name: string;
  email: string
  phone: string
  message: string
}

export const ContactEmail: React.FC<Readonly<ContactEmailProps>> = ({
  name,
  email,
  phone,
  message
}) => (
  <div>
    <h1>Hi John, my name is {name}!</h1>
    <span>Email: {email}</span>
    <span>Phone: {phone}</span>
    <p>Message: {message}</p>
  </div>
);