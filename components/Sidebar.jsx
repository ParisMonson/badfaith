import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ReportHistoryList from "./ReportHistoryList";

const drawerWidth = 280;

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   })
// );

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Sidebar({ open, setOpen, listItems, setReport }) {
  const theme = useTheme();

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader className="justify-between pl-12 bg-slate-950 text-white">
        <Typography variant="h6" noWrap component="div">
          Report History
        </Typography>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon sx={{ color: "white" }} />
          ) : null}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <div className="bg-slate-950 h-full text-slate-200 ">
        {listItems.length > 0 ? (
          <ReportHistoryList reportHistory={listItems} setReport={setReport} />
        ) : (
          <p className="m-auto">Log in to save reports.</p>
        )}
      </div>
    </Drawer>
  );
}

// Add Open Button
// Add Close Button
// Add vertical scrollbar
//
