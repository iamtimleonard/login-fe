import { Route } from "react-router-dom";
import Welcome from "./Welcome";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import { AuthRoute, ProtectedRoute } from "../util/route";

function App() {
  return (
    <>
      <Route exact path="/" component={Welcome} />
      <AuthRoute exact path="/login" component={Login} />
      <AuthRoute exact path="/signup" component={Signup} />
      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
    </>
  );
}

export default App;
