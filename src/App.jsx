import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";

const App = () => {
  let isAuth = localStorage.getItem("isAuth");

  console.log(isAuth);

  if (isAuth) {
    return (
      <>
        <Navbar/>
        <Outlet />
        <h1>Footer</h1>
      </>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default App;
