import React from "react";

const LiveChat = () => {
  return (
    <div id="live-chat-wrapper">
      <div className="chat-head">
        <div></div>
        <div>Autograph</div>
        <div>-</div>
      </div>
      <div className="chat-body">
        <div className="msgs">
          <div className="msg">
            <div className="img">
              <img src="./assets/imgs/chat-img.png" alt="img" />
            </div>
            <div className="text-wrapper">Hi! Welcome to Proxime;.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
