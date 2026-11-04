export type ContactFormStatus = "idle" | "submitting" | "success" | "error";

export interface ContactFormValues {
  name: string;
  workEmail: string;
  /** Optional — зайве обов'язкове поле знижує кількість заявок. */
  company: string;
  need: string;
  /** Optional — телефон або Telegram, якщо email не основний канал. */
  altContact: string;
  /** Optional — the one field explicitly marked non-required in the brief. */
  context: string;
}

export interface ContactChannel {
  label: string;
  href: string;
}
