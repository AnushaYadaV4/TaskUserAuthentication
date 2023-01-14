import Auth from "./components/auth";
import Dashboard from "./components/dashboard";
import { useUserContext } from "./context/userContext";
import { Container, Row, Col } from "react-bootstrap";
import Userprofile from "./pages/Userprofile";
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";

function App() {
  const { user, loading, error } = useUserContext();

  return (
    <BrowserRouter>
      <Switch>

  
    <div className="App">
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : <> {user ? <Home /> :<Route path="/auth"><Auth /></Route> } </>}

      <Route path="/userprofile">
        <Userprofile/>
        </Route>

        <Route path="/">
              <Redirect to="/auth" />
            </Route>


    </div>
    </Switch>

    </BrowserRouter>



  
  );
}

export default App;