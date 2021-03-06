import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/index';
import User from './components/User';
import { authenticate } from './store/session';
import LandingPage from './components/LandingPage';
import ListingsPage from './components/ListingsPage';
import Listing from './components/Listing'

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/users/:userId' exact={true} >
          <User />
        </Route>
        <Route path='/' exact={true} >
          <LandingPage />
        </Route>
        <Route path='/listings' exact={true} >
          <ListingsPage />
        </Route>
        <Route path='/listings/:listingId' exact={true} >
          <Listing />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
