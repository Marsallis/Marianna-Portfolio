import React from "react";
import "../Styles/PicVid.css";


const PicVid = () => {
    return(
        <div className="pvcontainer">
            <h2>PAST VIDEO PROJECT</h2>
            <div className="videos_section1">
                <div className="video1">
                    <video src="/Videos/video1.mp4" playsinline width="300" height="500" controls type="video/mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video2">
                    <video src="/Videos/video2.mp4" playsinline width="300" height="500"controls type="video/mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video3">
                    <video src="/Videos/video3.mp4" playsinline width="300" height="500"controls type="video/mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video4">
                    <video src="/Videos/video4.mp4" playsinline width="300" height="500"controls type="video/mp4">s
                    Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className="videos_section2">
                <div className="video5">
                    <video src="/Videos/video5.mp4" playsinline width="300" height="500"controls type="video/mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video6">
                    <video src="/Videos/video6.mp4" playsinline width="300" height="500"controls type="video/mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video7">
                    <video src="/Videos/video7.mp4" playsinline width="300" height="500"controls type="video/mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video8">
                    <video src="/Videos/video8.mp4" playsinline width="300" height="500"controls type="video/mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
);
}

export default PicVid;