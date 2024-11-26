"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

function Header() {
  const { user } = useUser();

  return (
    <div className="border flex items-center justify-between p-2">
      {/* welcome */}
      {user && (
        <h1>
          {user?.firstName}
          {`'s`} Space
        </h1>
      )}

      {/* breadcrumbs */}
      <div></div>

      {/* user/sign in */}
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default Header;
