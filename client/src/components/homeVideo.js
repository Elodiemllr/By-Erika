import React from "react";
import ReactPlayer from "react-player";

const HomeVideo = () => {
    return (
        <div className="homevideo">
            <div className="homevideo__video">
                <ReactPlayer
                    className="homevideo__video__cup"
                    width="100%"
                    height="100%"
                    playing="true"
                    loop="true"
                    url={[{ src: "./video/cupvideo.mp4", type: "video/mp4" }]}
                ></ReactPlayer>
            </div>
            <div className="homevideo__text">
                <h3 className="homevideon__title">
                    Choisissez la box cadeau qui vous correspond{" "}
                </h3>
            </div>
        </div>
    );
};

export default HomeVideo;
