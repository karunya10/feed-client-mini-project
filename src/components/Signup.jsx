import { useNavigate } from "react-router-dom";

function Signup({ userData, handleOnchange, setToggleAuth, signup }) {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(userData);
    navigate("/");
  };
  return (
    <div>
      {" "}
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="font-extrabold">Signup</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col mx-auto mt-20 w-full max-w-md p-8 border rounded-lg bg-white shadow"
        >
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleOnchange}
            value={userData.email}
            required
            className="border border-gray-400 rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={handleOnchange}
            value={userData.password}
            required
            className="border border-gray-400 rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
          />

          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleOnchange}
            value={userData.name}
            required
            className="border border-gray-400 rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
          />
          <div className="flex flex-col gap-4 justify-center items-center">
            <button
              type="submit"
              className="mt-4 mx-auto border rounded-lg w-[50%] h-10 hover:scale-105 bg-amber-100"
            >
              Sign up
            </button>
            <span>
              Already have an account?
              <button
                className="text-blue-400 underline"
                type="button"
                onClick={() => setToggleAuth((prev) => !prev)}
              >
                Login
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
