import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="topbar">
      <Link className="flex items-center gap-4" href="/">
        <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
        <p className="text-light-1 text-heading3-bold max-xs:hidden">Threads</p>
      </Link>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton>
          <button className="text-light-1">Sign In</button>
        </SignInButton>
      </SignedOut>
    </nav>
  );
}
