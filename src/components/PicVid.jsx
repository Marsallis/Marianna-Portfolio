import React from "react";
import "../Styles/PicVid.css";
import ReactPlayer from "react-player";

const PicVid = () => {
    return(
        <div className="pvcontainer">
            <h2>PAST VIDEO PROJECT</h2>
            <div className="videos_section1">
                <div className="video1">
                    <ReactPlayer url="Videos/video1.mp4" className="video1" playsinline width="300" height="500" controls muted type="video/mp4">
                    Your browser does not support the video tag.
                    </ReactPlayer>
                </div>
                <div className="video2">
                    <ReactPlayer url="Videos/video2.mp4" className="video2" playsinline width="300" height="500"controls muted type="video/mp4">
                    Your browser does not support the video tag.
                    </ReactPlayer>
                </div>
                <div className="video3">
                    <ReactPlayer url="Videos/video3.mp4" className="video3" playsinline width="300" height="500"controls muted type="video/mp4">
                    Your browser does not support the video tag.
                    </ReactPlayer>
                </div>
                <div className="video4">
                    <ReactPlayer 
                        url="Videos/video4.mp4" 
                        className="video4" 
                        playsinline width="300" 
                        height="500" 
                        controls muted type="video/mp4">
                        Your browser does not support the video tag.
                    </ReactPlayer>
                </div>
            </div>
            <div className="videos_section2">
                <div className="video5">
                    <ReactPlayer url="Videos/video5.mp4" className="video5" playsinline width="300" height="500"controls muted type="video/mp4">
                    Your browser does not support the video tag.
                    </ReactPlayer>
                </div>
                <div className="video6">
                    <ReactPlayer url="Videos/video6.mp4" className="video6" playsinline width="300" height="500"controls muted type="video/mp4">
                    Your browser does not support the video tag.
                    </ReactPlayer>
                </div>
                <div className="video7">
                    <ReactPlayer url="Videos/video7.mp4" className="video7" playsinline width="300" height="500"controls muted type="video/mp4">
                    Your browser does not support the video tag.
                    </ReactPlayer>
                </div>
                <div className="video8">
                    <ReactPlayer url="Videos/video8.mp4" className="video8" playsinline width="300" height="500"controls muted type="video/mp4">
                    Your browser does not support the video tag.
                    </ReactPlayer>
                </div>
            </div>
        </div>
);
}

export default PicVid;