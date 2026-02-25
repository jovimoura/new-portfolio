import { z } from "zod";

export type FormValidatorMessages = {
  "form-error-name-min": string;
  "form-error-name-max": string;
  "form-error-email": string;
  "form-error-message-min": string;
  "form-error-message-max": string;
};

export function getFormValidator(messages: FormValidatorMessages) {
  return z.object({
    name: z
      .string()
      .min(3, { message: messages["form-error-name-min"] })
      .max(50, { message: messages["form-error-name-max"] }),
    email: z.string().email({ message: messages["form-error-email"] }),
    phone: z.string(),
    message: z
      .string()
      .min(5, { message: messages["form-error-message-min"] })
      .max(500, { message: messages["form-error-message-max"] }),
  });
}

export type FormValues = z.infer<ReturnType<typeof getFormValidator>>;

const defaultMessages: FormValidatorMessages = {
  "form-error-name-min": "Name must be at least 3 characters long",
  "form-error-name-max": "Name must be at most 50 characters long",
  "form-error-email": "Invalid email address",
  "form-error-message-min": "Message must be at least 5 characters long",
  "form-error-message-max": "Message must be at most 500 characters long",
};

export const FormValidator = getFormValidator(defaultMessages);
