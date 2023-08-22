"use client";

import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function ReportHistoryList({ reportHistory, setReport }) {
  // Maintain the selected index in the state
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Handle click events on the list items
  const handleListItemClick = (event, index, report) => {
    setSelectedIndex(index);
    setReport(report.content);
  };

  // Reverse the report history list for display, if it exists
  const reversedReports = reportHistory?.slice().reverse();

  return (
    <List component="nav" aria-label="main mailbox folders">
      {reversedReports?.map((report, index) => (
        <ListItemButton
          // Highlight the selected item based on its index
          selected={selectedIndex === reversedReports.length - 1 - index}
          onClick={(event) =>
            handleListItemClick(
              event,
              reversedReports.length - 1 - index,
              report
            )
          }
          key={report._id}
        >
          <ListItemText
            className="truncate w-10"
            // Display the first 50 characters of the report content
            primary={report.content.slice(0, 50)}
          />
        </ListItemButton>
      ))}
    </List>
  );
}
