import { useUser } from "@auth0/nextjs-auth0/client";
import LoginButton from "./LoginButton";
import { styled } from "@mui/material/styles";
import LogoutButton from "./LogoutButton";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import MuiAppBar from "@mui/material/AppBar";

const drawerWidth = 280;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Header({ open, setOpen }) {
  const { user, isLoading, error } = useUser();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <AppBar className="header" position="fixed" open={open}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="flex">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <ViewSidebarIcon
              sx={{
                marginRight: 1,
              }}
            />
          </IconButton>
          <Typography variant="h4" noWrap component="div">
            Badfaith
          </Typography>
        </div>

        <div className="flex gap-4">
          <h2>{user?.email}</h2>

          {!user ? (
            <LoginButton variant="outlined" />
          ) : (
            <LogoutButton variant="outlined" />
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}
