import HomePage from "./pages/users/homepage";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/users/theme/masterLayout";
import ProfilePage from "./pages/users/profilepage";
import { Routes, Route } from "react-router-dom"; // Sử dụng Routes và Route từ react-router-dom

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      Component: <HomePage />,
    },
    {
      path: ROUTERS.USER.PROFILE,
      Component: <ProfilePage />,
    },
  ];

  return (
    <MasterLayout>
      <Routes>
        {userRouters.map((router, index) => (
          <Route
            key={index}
            path={router.path}
            element={router.Component} // Thay component bằng element
          />
        ))}
      </Routes>
    </MasterLayout>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;
