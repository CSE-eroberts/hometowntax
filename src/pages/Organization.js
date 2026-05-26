import React from "react";
import {
  SignedIn,
  SignedOut,
  OrganizationProfile,
  useAuth,
} from "@clerk/clerk-react";
import "../componets/css/Organization.css";

const Organization = () => {
  const { isLoaded, isSignedIn, orgId, has } = useAuth();
  const isOrgAdmin = isLoaded && isSignedIn && orgId && has({ role: "org:admin" });

  return (
    <section className="organization-page">
      <div className="organization-shell">
        <header className="organization-header">
          <p>Admin</p>
          <h1>Organization Invites</h1>
        </header>

        <SignedIn>
          {isOrgAdmin ? (
            <div className="organization-profile">
              <OrganizationProfile />
            </div>
          ) : (
            <p className="organization-message">
              You need organization admin access to manage invites.
            </p>
          )}
        </SignedIn>

        <SignedOut>
          <p className="organization-message">
            Sign in to manage organization invites.
          </p>
        </SignedOut>
      </div>
    </section>
  );
};

export default Organization;
