import "./App.css";
import "../index.css";
import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PostWrite from "../pages/PostWrite";
import PostDetail from "../pages/PostDetail";
import Notifi from '../pages/Notification';

import Header from "../components/Header";
import { Grid, Button, Margin } from "../elements";
import Permit from "./Permit";

// eslint-disable-next-line
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { apiKey } from "./firebase";

function App() {
  const dispatch = useDispatch();

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  React.useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckFB());
    }
  }, []);

  return (
    <React.Fragment>
        <Header></Header>
        <ConnectedRouter history={history}>
          <Route path="/" exact component={PostList} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/write" exact component={PostWrite}/>
          <Route path="/write/:id" exact component={PostWrite}/>
          <Route path="/post/:id" exact component={PostDetail}/>
          <Route path="/alert" exact component={Notifi}/>
        </ConnectedRouter>      
      <Permit>
        <Button is_float text="+" _onClick={()=>{history.push("/write");}}></Button>
      </Permit>
    </React.Fragment>
  );
}

export default App;
