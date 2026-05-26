import { useEffect } from "react";
import { useOrganizationList } from "@clerk/clerk-react";

const SetOrg = () => {
  const { setActive } = useOrganizationList();

  useEffect(() => {
    if (!setActive) {
      return;
    }

    async function activateOrg() {
      await setActive({
        organization: "org_3E2WHmS65AOKHZ7pm2SIZn4QIF8",
      });
    }

    activateOrg();
  }, [setActive]);

  return null;
}

export default SetOrg;
