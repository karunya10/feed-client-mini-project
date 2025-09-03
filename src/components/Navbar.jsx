import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export const Navbar = () => {
  const { user, logout, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    setUser(null);
  };
  return (
    <div className="flex justify-evenly items-center bg-violet-200 w-[full] h-20">
      <Link to="/" className="hover:scale-105">
        Home
      </Link>

      {user ? (
        <>
          <Link to="/post" className="hover:scale-105">
            Post
          </Link>
          <Link to="/profile">User Profile</Link>
          <button className="hover:scale-105" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <Link to="/login" className="hover:scale-105">
          Login
        </Link>
      )}
    </div>
  );
};
