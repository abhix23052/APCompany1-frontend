import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logged Out Successfully");

    navigate("/login");
  };

  return (
    <nav>

      <Link to="/">Home</Link> {" | "}

      <Link to="/about">About</Link> {" | "}

      <Link to="/services">Services</Link> {" | "}

      <Link to="/contact">Contact</Link> {" | "}

      {user ? (
        <>
          <Link to="/dashboard">
            Dashboard
          </Link>{" | "}

          <Link to="/profile">
            Profile
          </Link>{" | "}

          <button
            onClick={logoutHandler}
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              color: "blue"
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login">
            Login
          </Link>{" | "}

          <Link to="/register">
            Register
          </Link>
        </>
      )}

    </nav>
  );
}

export default Navbar;