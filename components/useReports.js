import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

export const useReports = () => {
  const { user, isLoading } = useUser();
  const [reportHistory, setReportHistory] = useState([]);
  
  useEffect(() => {
    async function getReports() {
      try {
        const response = await fetch("/api/reports", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setReportHistory(data);
      } catch (err) {
        console.log("Error: ", err);
      }
    }

    if (!isLoading && user) {
      getReports();
    }
  }, [isLoading, user]);

  return reportHistory;
}
