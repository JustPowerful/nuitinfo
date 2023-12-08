import "./App.css";

import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* Authentication */}
        <div className="pt-[69px]">
          <Route exact path="/">
            <Landing />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
