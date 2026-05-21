import React from "react";
import { SignedIn, OrganizationProfile, useOrganization, useAuth } from "@clerk/clerk-react";

const Organization = () => {
  const { membership } = useOrganization();

  const { isLoaded, isSignedIn, orgId, has } = useAuth();
const isOrgAdmin = isLoaded && isSignedIn && orgId && has({ role: "org:admin" });
console.log("am i the admin" + isOrgAdmin);

  const isAdmin = membership?.role === "org:admin";

   return (
      <main id="schedule" className="main-content">
        <SignedIn>
            {isOrgAdmin && <OrganizationProfile />}
        </SignedIn>
    </main>
    );
};

export default Organization;