import React from "react";
import "../Styles/PicVid.css";
import video1 from "../assets/Videos/video1.mp4";
import video2 from "../assets/Videos/video2.mp4";
import video3 from "../assets/Videos/video3.mp4";
import video4 from "../assets/Videos/video4.mp4";
import video5 from "../assets/Videos/video5.mp4";
import video6 from "../assets/Videos/video6.mp4";
import video7 from "../assets/Videos/video7.mp4";
import video8 from "../assets/Videos/video8.mp4";

const PicVid = () => {
    return(
        <div className="pvcontainer">
            <h2>PAST VIDEO PROJECT</h2>
            <div className="videos_section1">
                <div className="video1">
                    <video src={video1} playsinline width="300" height="500" controls type="video/mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video2">
                    <video src={video2} playsinline width="300" height="500"controls type="video/mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video3">
                    <video src={video3} playsinline width="300" height="500"controls type="video/mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video4">
                    <video src={video4} playsinline width="300" height="500"controls type="video/mp4">s
                    Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className="videos_section2">
                <div className="video5">
                    <video src={video5} playsinline width="300" height="500"controls type="video/mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video6">
                    <video src={video6} playsinline width="300" height="500"controls type="video/mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video7">
                    <video src={video7} playsinline width="300" height="500"controls type="video/mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video8">
                    <video src={video8} playsinline width="300" height="500"controls type="video/mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
);
}

export default PicVid;