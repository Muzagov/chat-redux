import React from 'react';
import ButtonClip from "./ButtonClip";
import ButtonMicro from "./ButtonMicro";

function SendMessage() {
    return (
        <div className="sendInput">
            <input type="text" placeholder="Write a message" className="inputMessage"/>
            <ButtonClip />
            <ButtonMicro />
        </div>
    );
}

export default SendMessage;
