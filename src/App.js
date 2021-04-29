import React, { createContext, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Home from "./components/HomePage/Home/Home";
import Login from "./components/Login/Login/Login";
import Booking from './components/DasboardPage/Booking/Booking';
import AddServices from './components/DasboardPage/AddServices/AddServices';
import ServicesList from './components/DasboardPage/ServicesList/ServicesList';
import Review from './components/DasboardPage/Review/Review';
import ManageServices from './components/DasboardPage/ManageServices/ManageServices';
import OrderList from './components/DasboardPage/OrderList/OrderList';
import Admin from './components/DasboardPage/Admin/Admin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
     <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <PrivateRoute path="/orderList">
            <OrderList/>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/:id">
            <Booking/>
          </PrivateRoute>
          <Route path="/addServices">
            <AddServices/>
          </Route>
          <Route path="/servicesList">
            <ServicesList/>
          </Route>
          <Route path="/review">
            <Review/>
          </Route>
          <Route path="/manageServices">
            <ManageServices/>
          </Route>
          <Route path="/addAdmin">
            <Admin/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
       </Switch>
    </Router>
     </UserContext.Provider>
  );
}

export default App;
