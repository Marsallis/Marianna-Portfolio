import React from "react";
import "../Styles/PicVid.css";

const PicVid = () => {
    return(
        <div className="pvcontainer">
            <h2>PAST VIDEO PROJECTS</h2>
            <div className="videos_section1">
                <div className="video1">
                    <video src="Videos/video1.mov" className="video1" width="300" height="500" controls muted type="video/mov">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video2">
                    <video src="Videos/video2.mp4" className="video2" width="300" height="500"controls muted type="video/mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video3">
                    <video src="Videos/video3.mp4" className="video3" width="300" height="500"controls muted type="video/mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video4">
                    <video 
                        src="Videos/video4.mp4" 
                        className="video4" 
                        width="300" 
                        height="500" 
                        controls muted type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className="videos_section2">
                <div className="video5">
                    <video src="Videos/video5.mp4" className="video5"width="300" height="500"controls muted type="video/mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video6">
                    <video src="Videos/video6.mp4" className="video6" width="300" height="500"controls muted type="video/mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video7">
                    <video src="Videos/video7.mp4" className="video7" width="300" height="500"controls muted type="video/mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video8">
                    <video src="Videos/video8.mp4" className="video8" width="300" height="500"controls muted type="video/mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
);
}

export default PicVid;