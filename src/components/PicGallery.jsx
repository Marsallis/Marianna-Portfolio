import React from "react";
import "../Styles/PicGallery.css";
import photo1 from "../assets/photo_1.jpg";
import photo2 from "../assets/photo_2.jpg";
import photo3 from "../assets/photo_3.jpg";
import photo4 from "../assets/photo_4.JPG";
import photo5 from "../assets/photo_5.jpg";
import photo6 from "../assets/photo_6.jpg";
import photo7 from "../assets/photo_7.jpg";


const Pics = () => {
    return(
        <div className="pc-container">
            <h2 className="header">PAST PHOTO PROJECTS</h2>
            <div className="pic_section1">
                <div className="pic1">
                    <img src={photo1} alt="" width="300" height="400"></img>
                </div>
                <div className="pic2">
                    <img src={photo2} alt="" width="300" height="400"></img>
                </div>
                <div className="pic3">
                    <img src={photo3} alt="" width="300" height="400"></img>
                </div>
                <div className="pic4">
                    <img src={photo4} alt="" width="300" height="400"></img>
                </div>
            </div>
            <div className="pic_section2">
                <div className="pic5">
                    <img src={photo5} alt="" width="300" height="400"></img>
                </div>
                <div className="pic6">
                    <img src={photo6} alt="" width="300" height="400"></img>
                </div>
                <div className="pic7">
                    <img src={photo7} alt="" width="300" height="400"></img>
                </div>
            </div>
        </div>
    );
}

export default Pics;