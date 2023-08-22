"use client";

import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function ReportHistoryList({ reportHistory, setReport }) {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index, report) => {
    console.log("CLick");
    setSelectedIndex(index);
    console.log("Selected", index, event);
    setReport(report.content);
  };

  return (
    <List component="nav" aria-label="main mailbox folders">
      {reportHistory?.reverse().map((report, index) => (
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0, report)}
          key={report._id}
        >
          <ListItemText
            className="truncate w-10"
            primary={report.content.slice(0, 50)}
          />
        </ListItemButton>
      ))}
    </List>
  );
}
