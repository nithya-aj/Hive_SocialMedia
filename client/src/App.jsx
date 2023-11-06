import { Suspense, lazy, useMemo } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./theme";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/HomePage";
import FeedsPage from "./pages/FeedsPage";
import FriendsPage from "./pages/FriendsPage";
import EditProfile from "./components/Modals/EditProfile";
import BlockUsers from "./components/Settings/BlockUsers";
import HiddenPosts from "./components/Settings/HiddenPosts";
import LikedPosts from "./components/Settings/LikedPosts";
import ManageAccount from "./components/Settings/ManageAccount";
import BookmarkedPosts from "./components/Settings/BookmarkedPosts";
import PassWordAndSecurity from "./components/Settings/PassWordAndSecurity";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import NotificationsPage from "./pages/NotificationsPage";
import MessagesPage from "./pages/MessagesPage";
import Suggestions from "./components/Suggestions";
import Following from "./components/Following";
import Followers from "./components/Followers";
// import HomePage from "./pages/HomePage";
// import FeedsPage from "./pages/FeedsPage";
// import FriendsPage from "./pages/FriendsPage";
// import Followers from "./components/Followers";
// import Following from "./components/Following";
// import Suggestions from "./components/Suggestions";
// import MessagesPage from "./pages/MessagesPage";
// import NotificationsPage from "./pages/NotificationsPage";
// import ProfilePage from "./pages/ProfilePage";
// import SettingsPage from "./pages/SettingsPage";
// import EditProfile from "./components/Settings/EditProfile";
// import BlockUsers from "./components/Settings/BlockUsers";
// import PassWordAndSecurity from "./components/Settings/PassWordAndSecurity";
// import HiddenPosts from "./components/Settings/HiddenPosts";
// import LikedPosts from "./components/Settings/LikedPosts";
// import BookmarkedPosts from "./components/Settings/BookmarkedPosts";
// import ManageAccount from "./components/Settings/ManageAccount";

const AuthPage = lazy(() => import("./pages/AuthPage"));

const App = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(user._id, "user");
  const mode = useSelector((state) => state.theme.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Suspense fallback={<p>loading...</p>}>
            <Routes>
              <Route path="/auth" element={<AuthPage />} />
              <Route
                exact
                path=""
                element={user ? <HomePage /> : <Navigate to="/auth" />}
              >
                <Route path="/" element={<FeedsPage />} />
                <Route path="/friends" element={<FriendsPage />}>
                  <Route path="" element={<Navigate to="followers" />} />
                  <Route exact path="followers" element={<Followers />} />
                  <Route path="following" element={<Following />} />
                  <Route path="suggestions" element={<Suggestions />} />
                </Route>
                <Route path="/messages" element={<MessagesPage />} />
                <Route path="/notifications" element={<NotificationsPage />} />
                <Route path={`/profile/:id`} element={<ProfilePage />} />
                <Route path="/settings" element={<SettingsPage />}>
                  <Route path="" element={<Navigate to="edit-profile" />} />
                  <Route path="edit-profile" element={<EditProfile />} />
                  <Route path="blocked-users" element={<BlockUsers />} />
                  <Route
                    path="password-security"
                    element={<PassWordAndSecurity />}
                  />
                  <Route path="manage-posts/hidden" element={<HiddenPosts />} />
                  <Route path="manage-posts/liked" element={<LikedPosts />} />
                  <Route
                    path="manage-posts/bookmarked"
                    element={<BookmarkedPosts />}
                  />
                  <Route path="manage-account" element={<ManageAccount />} />
                </Route>
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
