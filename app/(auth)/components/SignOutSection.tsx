// app/components/SignOutSection.tsx
"use client";

import { SignOutButton } from "@clerk/nextjs";

export default function SignOutSection() {
  return (
    <div>
      <h2>Você está autenticado!</h2>
      <SignOutButton redirectUrl="/sign-in" />
    </div>
  );
}
