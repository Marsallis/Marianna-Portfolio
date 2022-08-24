import React from "react";
import "../Styles/PicVid.css";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import video5 from "../assets/video5.mp4";
import video6 from "../assets/video6.mp4";
import video7 from "../assets/video7.mp4";
import video8 from "../assets/video8.mp4";

const PicVid = () => {
    return(
        <div className="pvcontainer">
            <h2>PAST VIDEO PROJECTS</h2>
            <div className="videos_section1">
                <div className="video1">
                    <video width="300" height="500"controls>
                    <source src={video1} type="video/mp4"></source>
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video2">
                    <video width="300" height="500"controls>
                    <source src={video2} type="video/mp4"></source>
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video3">
                    <video width="300" height="500"controls>
                    <source src={video3} type="video/mp4"></source>
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video4">
                    <video width="300" height="500"controls>
                    <source src={video4} type="video/mp4"></source>
                    Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className="videos_section2">
                <div className="video5">
                    <video width="300" height="500"controls>
                    <source src={video5} type="video/mp4"></source>
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video6">
                    <video width="300" height="500"controls>
                    <source src={video6} type="video/mp4"></source>
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video7">
                    <video width="300" height="500"controls>
                    <source src={video7} type="video/mp4"></source>
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video8">
                    <video width="300" height="500"controls>
                    <source src={video8} type="video/mp4"></source>
                    Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
);
}

export default PicVid;