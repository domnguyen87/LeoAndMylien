import React from 'react'

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="tz-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 footerattr">
                            <aside id="contact_info-2" className="widget_contact_info widget">
                                <h3 className="module-title title-widget"><span>LOCATION</span></h3>
                                <div className="tzwidget-contact">
                                    <address> Brea Community Center </address>
                                    <address> 2695 Madison Way, Brea, CA 92821 </address>
                                    <span> (714) 369-0058 </span>
                                    <span className="wemail">info@mylienandleo.com</span>
                                </div>
                            </aside>
                        </div>
                            <div className="col-md-6 footerattr">
                                <aside id="tz_social-2" className="widget_tz_social widget">
                                    <h3 className="module-title title-widget"><span>GET IN TOUCH</span></h3>
                                    <div className="tz_social">
                                        <a href="#" className="fa fa-facebook"></a>
                                        <a href="#" className="fa fa-google-plus"></a>
                                        <a href="#" className="fa fa-twitter"></a>
                                        <a href="#" className="fa fa-youtube"></a>
                                    </div>
                                </aside>
                            </div>
                        </div>
                        {/* <!--end className row--> */}
                    </div>
                    {/* <!--end className container--> */}
            </footer>
        )
    }
}