import React from "react";
import "../Styles/PicVid.css";
import video1 from "../assets/video1.mp4";
import video1w from "../assets/video1.webm";
import vid1 from "../assets/Vid1.m4v";
import video2 from "../assets/video2.mp4";
import video2w from "../assets/video2.webm";
import vid2 from "../assets/Vid2.m4v#t=0.5";
import video3 from "../assets/video3.mp4";
import video3w from "../assets/video3.webm";
import vid3 from "../assets/Vid3.m4v";
import video4 from "../assets/video4.mp4";
import video4w from "../assets/video4.webm";
import vid4 from "../assets/Vid4.m4v";
import video5 from "../assets/video5.mp4";
import video5w from "../assets/video5.webm";
import vid5 from "../assets/Vid5.m4v";
import video6 from "../assets/video6.mp4";
import video6w from "../assets/video6.webm";
import vid6 from "../assets/Vid6.m4v";
import video7 from "../assets/video7.mp4";
import video7w from "../assets/video7.webm";
import vid7 from "../assets/Vid7.m4v";
import video8 from "../assets/video8.mp4";
import video8w from "../assets/video8.webm";
import vid8 from "../assets/Vid8.m4v";

const PicVid = () => {
    return(
        <div className="pvcontainer" id="video_section">
            <h2>PAST VIDEO PROJECTS</h2>
            <div className="videos_section1">
                <div className="video1">
                    <video width="300" height="500" controls playsInline onContextMenu="return false;" preload="metadata">
                        <source src={vid1} type="video/mp4"/>
                        <source src="https://player.vimeo.com/video/745813035?h=5546cdd71b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Video Example 1 (1).mov"/>
                        <source src={video1} type="video/mp4"/>
                        <source src={video1w}  type="video/webm"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video2">
                    <video title="vimeo-player" width="300" height="500" controls playsInline onContextMenu="return false;" preload="metadata">
                        <source src={vid2} type="video/mp4"/>
                        <source src="https://player.vimeo.com/video/745815435?h=e8e69d9ce3" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="video example 2.mp4" type="video/mp4"/>
                        <source src={video2}  type="video/mp4"/>
                        <source src={video2w} type="video/webm"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video3">
                    <video width="300" height="500" controls playsInline onContextMenu="return false;" preload="metadata">
                        <source src={vid3} type="video/mp4"/>
                        <source src={video3}  type="video/mp4"/>
                        <source src={video3w} type="video/webm"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video4">
                    <video width="300" height="500" controls playsInline onContextMenu="return false;" preload="metadata">
                        <source src={vid4} type="video/mp4"/>
                        <source src={video4}  type="video/mp4"/>
                        <source src={video4w} type="video/webm"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className="videos_section2">
                <div className="video5">
                    <video width="300" height="500" controls playsInline onContextMenu="return false;" preload="metadata">
                        <source src={vid5} type="video/mp4"/>
                        <source src={video5}  type="video/mp4"/>
                        <source src={video5w} type="video/webm"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video6">
                    <video width="300" height="500" controls playsInline onContextMenu="return false;" preload="metadata">
                        <source src={vid6} type="video/mp4"/>
                        <source src={video6}  type="video/mp4"/> 
                        <source src={video6w} type="video/webm"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video7">
                    <video width="300" height="500" controls playsInline onContextMenu="return false;" preload="metadata">
                        <source src={vid7} type="video/mp4"/>
                        <source src={video7}  type="video/mp4"/> 
                        <source src={video7w} type="video/webm"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video8">
                    <video width="300" height="500" controls playsInline onContextMenu="return false;" preload="metadata">
                        <source src={vid8} type="video/mp4"/>
                        <source src={video8}  type="video/mp4"/>
                        <source src={video8w} type="video/webm"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
);
}

export default PicVid;