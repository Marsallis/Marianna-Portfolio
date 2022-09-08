import React from "react";
import "../Styles/Prices.css";


const Prices = () => {
    return(
        <div className="container">
            <div className="pricing_header">
                <div>
                    <h2>PRICING</h2>
                </div>
                <div>
                    <p>*Rates subject to change*</p>
                </div>
            </div>
            <div className="bundle_pricing">
                <div className="bundle_box">
                    <h3>5 UGC Videos</h3>
                    <h3>+5 images</h3>
                    <h4>$750</h4>
                </div>
                <div className="bundle_box">
                    <h3>10 UGC Videos</h3>
                    <h3>+5 images</h3>
                    <h4>$1400</h4>
                </div>
                <div className="bundle_box">
                    <h3>20 UGC Videos</h3>
                    <h3>+5 images</h3>
                    <h4>$2400</h4>
                </div>
            </div>
            <div className="single_media_pricing">
                <div>
                    <h3>UGC VIDEO PRICES</h3>
                    <div className="pricing_list">
                        <p>1 UGC VIDEO</p>
                        <p>$150</p>
                    </div>
                    <div className="pricing_list">
                        <p>3 UGC VIDEOS</p>
                        <p>$400</p>
                    </div>
                    <div className="pricing_list">
                        <p>5 UGC VIDEOS</p>
                        <p>$700</p>
                    </div>
                </div>
                <div>
                    <h3>PRODUCT PRICES</h3>
                    <div className="pricing_list">
                        <p>5 UGC PHOTOS</p>
                        <p>$100</p>
                    </div>
                    <div className="pricing_list">
                        <p>15 UGC VIDEOS</p>
                        <p>$220</p>
                    </div>
                </div>
            </div>
            <div className="disclaimer">
                <p>*Other bundle options available. Please email for details!*</p>
            </div>
        </div>
    )
}

export default Prices;