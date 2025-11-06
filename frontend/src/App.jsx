import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export default function App() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gray-800- to-gray-200 shadow-md">
      <h1 className="text-2xl font-bold text-green-950 tracking-wide">
        Talent IQ
      </h1>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
