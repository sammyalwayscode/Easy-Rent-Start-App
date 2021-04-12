import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/HeroBody/Hero";
import SignUp from "./components/SignUp/SignUp";
import Form from "./components/DashBoard/View/Form";
import MaterialDash from "./components/DashBoard/MaterialDash";
import CardRoute from "./components/CardRoute/CardRoute";
import { GlobalProvider } from "./components/AuthState/GlobalContext";

function App() {
  return (
    <div>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Body} />
            <Route exact path="/signup" component={SignUp} />
            <Route path="/upload" component={Form} />
            <Route path="/dashboard" component={MaterialDash} />
            <Route path="/detail/:id" component={CardRoute} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
