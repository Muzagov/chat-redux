import React from "react";
import { useSelector } from "react-redux";
import Communication from "./Communication";
import Avatar from "./Avatar";
import Social from "./Social";
import { useParams } from "react-router-dom";
import Media from "./Media";
import { CSSTransition } from "react-transition-group";

function Profile() {
  const opened = useParams().id;

  const loading = useSelector((state) => state.contacts.loading);

  const openProfile = useSelector(
    (state) => state.application.openContactProfile
  );

  const profile = useSelector((state) =>
    state.contacts.contacts.find((contact) => {
      return opened === contact._id;
    })
  );

  if (loading || !opened) {
    return null;
  }

  return (
    <CSSTransition in={openProfile} timeout={1100} unmountOnExit>
      <div className="commonProfile">
        <div className="common-block">
          <Avatar size={"large"} name={profile?.fullname[0]} />
          <div className="nameProfile">{profile?.fullname}</div>
          <div className="name">@{profile?.username}</div>
          <Communication />
          <Social socials={profile?.socials} />
          <Media fileName={"desktop-chat.pdf"} />
        </div>
      </div>
    </CSSTransition>
  );
}

export default Profile;
