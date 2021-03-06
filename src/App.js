import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import { useDispatch, useSelector } from "react-redux";
import { loadMyProfile } from "./redux/actions/profile";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const loading = useSelector((state) => state.profile.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMyProfile());
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
