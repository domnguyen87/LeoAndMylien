import React from 'react'

export default class Quotes extends React.Component {
    render() {
        return(
            <div className="vc_row wpb_row parallax vc_row-fluid vc_custom_1423135867032">
                <div className="overlay_parallax"></div>
                <div className="container">
                    <div className="row">
                        <div className="vc_col-sm-12 wpb_column vc_column_container ">
                            <div className="wpb_wrapper">
                                <div className="tz-testimonials  ">
                                    <div className="container">
                                        <ul className="tz-quote">
                                            <li>
                                                <i className="fa fa-heart-o icon_testimonials"></i>
                                                <h3 className="title_testimonials">
                                                    <i className="fa fa-quote-left"></i>Better to have loved and lost, than to have never loved<i className="fa fa-quote-right"></i>
                                                </h3>
                                                <span className="author_testimonials">~ ST.AUGUSTINE ~</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-heart-o icon_testimonials"></i>
                                                <h3 className="title_testimonials">
                                                    <i className="fa fa-quote-left"></i>Nulla facilisis vitae metus quis consequat<i className="fa fa-quote-right"></i>
                                                </h3>
                                                <span className="author_testimonials">~ ST.AUGUSTINE ~</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-heart-o icon_testimonials"></i>
                                                <h3 className="title_testimonials">
                                                    <i className="fa fa-quote-left"></i>Integer vulputate molestie ante, vel pellentesque<i className="fa fa-quote-right"></i>
                                                </h3>
                                                <span className="author_testimonials">~ ST.AUGUSTINE ~</span>
                                            </li>
                                        </ul>
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