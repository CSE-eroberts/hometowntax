import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import "./css/Schedule.css";

function Schedule() {
    useEffect(() => {
    (async function () {
        const cal = await getCalApi({"namespace":"30min"});
        cal("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#102A57"}},"hideEventTypeDetails":false,"layout":"month_view"});
        })();
    }, [])

  return (
    <button
      className="schedule-button"
      type="button"
      data-cal-namespace="30min"
      data-cal-link="emma-grace-roberts-iqm3lf/30min"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
    >
      Schedule
    </button>
  );
}

export default Schedule;
