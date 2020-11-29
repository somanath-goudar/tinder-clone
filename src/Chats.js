import React from "react";
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Sarah"
        message="Hey! How are you?"
        timestamp="35 Minutes Ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/2/29/Sarah_Bolger_%2848484781976%29_%28cropped%29.jpg"
      />

      <Chat
        name="Ellen"
        message="Whats Up?"
        timestamp="55 Minutes Ago"
        profilePic="https://pyxis.nymag.com/v1/imgs/dc6/431/1f2359b510bceecc2722bccc0b19c7a0c2-ellen.rsquare.w1200.jpg"
      />

      <Chat
        name="Sandra"
        message="Ola!"
        timestamp="3 Days Ago"
        profilePic="https://img.discogs.com/w3E3o4nVVOhJxouF3H5AU_nDlYU=/600x795/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-4537475-1447235370-2165.jpeg.jpg"
      />

      <Chat
        name="Natasha"
        message="Oops Whats going on?"
        timestamp="1 week Ago"
        profilePic="https://i.pinimg.com/originals/35/f3/61/35f361e265c1e4ac5465a7934dfed92f.jpg"
      />
    </div>
  );
}

export default Chats;
