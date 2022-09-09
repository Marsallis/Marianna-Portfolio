import React from "react";
import "../Styles/Welcome.css";
import template from "../assets/iphone_video_template.webp";
import video1 from "../assets/video1.mp4";
import video1w from "../assets/video1.webm";
import vid1 from "../assets/Vid1.m4v";

const Welcome = () => {
    return(
        <div className="Welcome">
            <div className="text">
                <h2 className="special-text"><span>Are you looking for Authentic and Organic short video ads for your brand?</span></h2>
                <h3 className="special-text-2"><span><a href="mailto:marianna.ugcmarketing@gmail.com" >Let's Chat!</a></span></h3>
            </div>
            <div className="video">
                <img src={template} className="template" width="535" height="820" alt="template" class="silhouette"/>
                <video className="main_vid" width="455" height="950" alt="" autoplay="autoplay" muted loop="loop" defaultMuted playsInline oncontextmenu="return false;" preload="auto">
                    <source src={vid1} type="video/mp4"/>
                    <source src={video1} type="video/mp4"/>
                    <source src={video1w} type="video/webm"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default Welcome;