import React, { useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Messages/Chat";
import { useDispatch, useSelector } from "react-redux";
import { loadMyId } from "./redux/actions/profile";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const loading = useSelector((state) => state.profile.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMyId());
  }, [dispatch]);

  return (
    !loading && (
      <BrowserRouter>
        <Route path="/:id?">
          <div className="App">
            <Sidebar />
            <Chat />
            <Profile />
          </div>
        </Route>
      </BrowserRouter>
    )
  );
}

export default App;
