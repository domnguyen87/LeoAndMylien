import React from 'react'

export default class Video2 extends React.Component {
    render() {
        return (
            <div className="vc_row wpb_row vc_row-fluid">
                <div className="nocontainer">
                    <div className="vc_col-sm-12 wpb_column vc_column_container ">
                        <div className="wpb_wrapper">
                            <div className="tz-video">
                                <div className="tz-video-content">
                                    <button className="tzautoplay"><i className="fa fa-video-camera"></i></button>
                                    <button className="tzpause"><i className="fa fa-pause"></i></button>
                                    <h3>“The Power of Love”</h3>
                                    <p>LEO AND MYLIEN WEDDING VIDEO</p>
                                </div>
                                <div className="bg-video bg-video-home-2"></div>
                                <video className="videoID">
                                    <source type="video/mp4" src="video/video.mp4" />
                                    <source type="video/ogg" src="video/video.ogv" />
                                    <source type="video/webm" src="video/video.webm" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}