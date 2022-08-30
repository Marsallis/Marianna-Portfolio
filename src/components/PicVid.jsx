import React from "react";
import "../Styles/PicVid.css";
import video1 from "../assets/video1.mp4";
import video1w from "../assets/video1.webm";
import video2 from "../assets/video2.mp4";
import video2w from "../assets/video2.webm";
import video3 from "../assets/video3.mp4";
import video3w from "../assets/video3.webm";
import video4 from "../assets/video4.mp4";
import video4w from "../assets/video4.webm";
import video5 from "../assets/video5.mp4";
import video5w from "../assets/video5.webm";
import video6 from "../assets/video6.mp4";
import video6w from "../assets/video6.webm";
import video7 from "../assets/video7.mp4";
import video7w from "../assets/video7.webm";
import video8 from "../assets/video8.mp4";
import video8w from "../assets/video8.webm";

const PicVid = () => {
    return(
        <div className="pvcontainer">
            <h2>PAST VIDEO PROJECTS</h2>
            <div className="videos_section1">
                <div className="video1">
                    <video width="300" height="500" controls>
                        <source src={video1w}  type="video/webm"/>
                        <source src={video1} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video2">
                    <video width="300" height="500" controls>
                        <source src={video2w} type="video/webm"/>
                        <source src={video2}  type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video3">
                    <video width="300" height="500" controls>
                        <source src={video3w} type="video/webm"/>
                        <source src={video3}  type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video4">
                    <video width="300" height="500" controls>
                        <source src={video4w} type="video/webm"/>
                        <source src={video4}  type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className="videos_section2">
                <div className="video5">
                    <video width="300" height="500" controls>
                        <source src={video5w} type="video/webm"/>
                        <source src={video5}  type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video6">
                    <video width="300" height="500" controls> 
                        <source src={video6w} type="video/webm"/>
                        <source src={video6}  type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video7">
                    <video width="300" height="500" controls> 
                        <source src={video7w} type="video/webm"/>
                        <source src={video7}  type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video8">
                    <video width="300" height="500" controls>
                        <source src={video8w} type="video/webm"/>
                        <source src={video8}  type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
);
}

export default PicVid;