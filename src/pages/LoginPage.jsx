import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import Login from "../components/Login";
import Signup from "../components/Signup";

function LoginPage() {
  const [toggleAuth, setToggleAuth] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const { login, signup } = useContext(AuthContext);
  
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      {!toggleAuth ? (
        <Login
          userData={userData}
          handleOnchange={handleOnchange}
          setToggleAuth={setToggleAuth}
          login={login}
        />
      ) : (
        <Signup
          userData={userData}
          handleOnchange={handleOnchange}
          setToggleAuth={setToggleAuth}
          signup={signup}
        />
      )}
    </>
  );
}

export default LoginPage;
