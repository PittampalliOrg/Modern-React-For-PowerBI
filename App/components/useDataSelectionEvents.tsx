import React, { useEffect } from 'react';

// Custom hook to manage event listeners
function useReportEvents(report) {
  useEffect(() => {
    // Function to handle data selection
    const handleDataSelected = (event) => {
      let data = event.detail;
      console.log("Event - dataSelected:\n", data);
    };

    // Add event listener
    report.on("dataSelected", handleDataSelected);

    // Cleanup function to remove event listener
    return () => {
      report.off("dataSelected", handleDataSelected);
    };
  }, [report]); // Re-run effect if 'report' changes
}

// Example component using the custom hook
const ReportComponent = ({ report }) => {
  // Use the custom hook to setup event listeners
  useReportEvents(report);

  return (
    <div>
      <p>Select data to see events in Log window.</p>
      {/* Render your report component or visualization here */}
    </div>
  );
};

export default ReportComponent;