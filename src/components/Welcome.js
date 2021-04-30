import { Link } from "react-router-dom";
const Welcome = () => (
  <>
    <h1>Welcome!</h1>
    <Link to="/login">Login</Link>
    <Link to="/signup">Signup</Link>
    <Link to="/dashboard">Dashboard</Link>
  </>
);

export default Welcome;
