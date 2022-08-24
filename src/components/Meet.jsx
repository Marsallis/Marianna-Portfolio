import React from "react";
import "../Styles/Meet.css";
import profilePic from '../assets/profilePic.PNG';

const Meet = () => {
    return(
        <div className="Meet">
            <h3 className="greeting">MEET YOUR CREATOR</h3>
            <div className="who-i-am">
                <img src={profilePic} alt="" id="proPic"></img>
                <p>Hey Y’all! My name is Marianna Macaluso and I am a User Generated Content (UGC) creator based in Upstate, NY. I have studied the psychology of marketing and can create a variety of different style videos that can help boost sales for your brand. UGC can help gain trust of potential clients by showing “real life people” with “real life” results.</p>
            </div>
        </div>

    );
}

export default Meet;