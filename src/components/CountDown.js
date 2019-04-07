import React from 'react'

export default class CountDown extends React.Component {
    render() {
        return (
            <div className="vc_row wpb_row vc_row-fluid">
                <div className="nocontainer">
                    <div className="vc_col-sm-12 wpb_column vc_column_container ">
                        <div className="wpb_wrapper">
                            <div className="tzcountdown2">
                                <div className="container">
                                    <h3 className="tzcount_title">COUNTDOWN TO MYLIEN &amp; LEO WEDDING CEREMONY</h3>
                                    <div className="countdown">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="tzcountdownitem">
                                                    <span className="days">00</span>
                                                </div>
                                                <p className="timeRefDays tzcount-ds">days</p>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="tzcountdownitem">
                                                    <span className="hours">00</span>
                                                </div>
                                                <p className="timeRefHours tzcount-ds">hours</p>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="tzcountdownitem">
                                                    <span className="minutes tzcount-ds">00</span>
                                                </div>
                                                <p className="timeRefMinutes tzcount-ds">minutes</p>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="tzcountdownitem">
                                                    <span className="seconds">00</span>
                                                </div>
                                                <p className="timeRefSeconds tzcount-ds">seconds</p>
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