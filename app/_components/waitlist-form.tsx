"use client";

import { FormEvent } from "react";

interface WaitlistFormProps {
  className?: string;
  buttonClassName?: string;
}

export function WaitlistForm({ className, buttonClassName }: WaitlistFormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const emailInput = form.querySelector("input[type='email']");

    if (emailInput instanceof HTMLInputElement) {
      const email = emailInput.value.trim();
      if (!email) {
        emailInput.focus();
        return;
      }

      const subject = encodeURIComponent("Liminal Early Access");
      const body = encodeURIComponent(
        `Hi Liminal team,\n\nI'd love to learn more about joining your early access program.\n\nBest,\n${email}`
      );
      window.location.href = `mailto:hello@weareliminal.com?subject=${subject}&body=${body}`;
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <input
        type="email"
        required
        placeholder="name@company.com"
        aria-label="Work email"
        style={{
          padding: "0.95rem 1.25rem",
          borderRadius: "999px",
          border: "1px solid rgba(247, 247, 247, 0.18)",
          background: "rgba(15, 15, 15, 0.75)",
          color: "var(--color-foreground)",
          flex: "1 1 240px",
          minWidth: "200px",
        }}
      />
      <button type="submit" className={buttonClassName}>
        Join Waitlist
      </button>
    </form>
  );
}
