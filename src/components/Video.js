import React from 'react'

export default class Rsvp extends React.Component {
    render() {
        return (
            <div className="vc_row wpb_row vc_row-fluid vc_custom_1423647303632">
                <div className="container">
                    <div className="row">
                        <div className="vc_col-sm-12 vc_col-lg-6 vc_col-md-5 wpb_column vc_column_container ">
                            <div className="wpb_wrapper">
                                <div className="tzmusic_playlist">
                                    <h3 className="playlist_title">
                                        MUSIC FOR LOVE
                                </h3>
                                    <div id="jquery_jplayer_2" className="jp-jplayer"></div>
                                    <div id="jp_container_2" className="jp-audio" role="application" aria-label="media player">
                                        <div className="jp-type-playlist">
                                            <div className="jp-gui jp-interface">
                                                <div className="controls-progress">
                                                    <div className="jp-controls">
                                                        <button className="jp-previous" role="button" tabindex="0"><i className="fa fa-backward"></i></button>
                                                        <button className="jp-play" role="button" tabindex="0"><i className="fa fa-play"></i></button>
                                                        <button className="jp-pause" role="button" tabindex="0"><i className="fa fa-pause"></i></button>
                                                        <button className="jp-next" role="button" tabindex="0"><i className="fa fa-forward"></i></button>
                                                        <button className="jp-stop" role="button" tabindex="0"><i className="fa fa-stop"></i></button>
                                                    </div>
                                                    <div className="jp-progress">
                                                        <div className="jp-seek-bar">
                                                            <div className="jp-play-bar"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="jp-volume-controls">
                                                    <button className="jp-mute" role="button" tabindex="0">mute</button>
                                                    <button className="jp-volume-max" role="button" tabindex="0">max volume</button>
                                                    <div className="jp-volume-bar">
                                                        <div className="jp-volume-bar-value"></div>
                                                    </div>
                                                </div>
                                                <div className="jp-time-holder">
                                                    <div className="jp-current-time" role="timer" aria-label="time">&nbsp;</div>
                                                    <div className="jp-duration" role="timer" aria-label="duration">&nbsp;</div>
                                                </div>
                                                <div className="jp-toggles">
                                                    <button className="jp-repeat" role="button" tabindex="0">repeat</button>
                                                    <button className="jp-shuffle" role="button" tabindex="0">shuffle</button>
                                                </div>
                                            </div>
                                            <div className="jp-playlist">
                                                <ul>
                                                    <li>&nbsp;</li>
                                                </ul>
                                            </div>
                                            <div className="jp-no-solution">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="vc_col-sm-12 vc_col-lg-6 vc_col-md-7 wpb_column vc_column_container ">
                            <div className="wpb_wrapper">
                                <div className="container-custom">
                                    <h2 className="elementblog-title elementblog-title3">FROM OUR BLOG</h2>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="blog-item blog-style2">
                                                <div className="blog-image">
                                                    <img src="http://placehold.it/270x170" className="attachment-medium wp-post-image" alt="bloghome4" />
                                                </div>
                                                <div className="blog-description">
                                                    <h3><a href="#">Nulla facilisis vitae</a></h3>
                                                    <span className="tzblog_meta">
                                                        February 5, 2015                                /
                                                    <a href="#" title="Comment on Nulla facilisis vitae">Leave a comment</a>
                                                    </span>
                                                    <p>Thank you for choosing CosmoThemes and purchasing one of our Premium WordPress Themes your choice is greatly.</p>
                                                    <a className="tzblog_readmore" href="#">READ MORE</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="blog-item blog-style2">
                                                <div className="blog-image">
                                                    <img src="http://placehold.it/270x170" className="attachment-medium wp-post-image" alt="bloghome3" />
                                                </div>
                                                <div className="blog-description">
                                                    <h3><a href="#">Mauris viverra ipsum</a></h3>
                                                    <span className="tzblog_meta">
                                                        February 5, 2015                                /
                                                    <a href="#" title="Comment on Mauris viverra ipsum">Leave a comment</a>
                                                    </span>
                                                    <p>Thank you for choosing CosmoThemes and purchasing one of our Premium WordPress Themes your choice is greatly.</p>
                                                    <a className="tzblog_readmore" href="#">READ MORE</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}