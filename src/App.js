import React, { Component } from "react";
// import { Switch, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./App.css";
import Home from "./pages/homes/Home";
import AllCategories from "./pages/categories/AllCategories";
import ListingGrid from "./pages/listings/ListingGrid";
import ListMapView from "./pages/listings/ListMapView";
import ListMapView2 from "./pages/listings/ListMapView2";
import ListLeftSidebar from "./pages/listings/ListLeftSidebar";
import ListRightSidebar from "./pages/listings/ListRightSidebar";
import ListingDetails from "./pages/listings/ListingDetails";
import MyProfile from "./pages/listings/MyProfile";
import UserProfile from "./components/other/account/UserProfile";
import Dashboard from "./pages/dashboard/Dashboard";
import About from "./pages/About";
import PrivacyPolicy from "./pages/Privacy-policy";
import TermsConditions from "./pages/TermsConditions";
import Faq from "./pages/FAQ";
import Contact from "./pages/Contact";
import RecoverPassword from "./pages/RecoverPassword";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Route>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/categories" component={AllCategories} />
            <Route path="/list" component={ListingGrid} />
            <Route path="/list-map-view" component={ListMapView} />
            <Route path="/list-map-view2" component={ListMapView2} />
            <Route path="/list-left-sidebar" component={ListLeftSidebar} />
            <Route path="/list-right-sidebar" component={ListRightSidebar} />
            <Route path="/profile/:id" component={ListingDetails} />
            <Route path="/myprofile" component={MyProfile} />
            <Route path="/user-profile" component={UserProfile} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/about-us" component={About} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/terms-conditions" component={TermsConditions} />
            <Route path="/faq" component={Faq} />
            <Route path="/contact" component={Contact} />
            <Route path="/recover" component={RecoverPassword} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route component={Error} />
          </Switch>
        </Route>
      </div>
    );
  }
}

export default App;
