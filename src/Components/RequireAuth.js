import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth.js";

const RequireAuth = () => {
  const { userId } = useAuth();

  if (!userId) {
    return (
      <div>
        <h1>you are not logged in</h1>
      </div>
    );
  } else {
    return <Outlet />;
  }
};

export default RequireAuth;
