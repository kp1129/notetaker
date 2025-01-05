"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Breadcrumbs from "./Breadcrumbs";

function Header() {
  const { user } = useUser();

  return (
    <div className="border flex items-center justify-between p-5">
      {/* welcome */}
      {user && (
        <h1 className="text-2xl">
          {user?.firstName}
          {`'s`} Space
        </h1>
      )}

      {/* breadcrumbs */}
      <Breadcrumbs />

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
