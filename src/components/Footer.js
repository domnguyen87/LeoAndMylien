import React from 'react'

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="tz-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 footerattr">
                            <aside id="contact_info-2" className="widget_contact_info widget">
                                <h3 className="module-title title-widget"><span>LOCATION</span></h3>
                                <div className="tzwidget-contact">
                                    <address> London, UK, 10, Friks Avenue </address>
                                    <span> +0987 092 291 091 </span>
                                    <span className="wemail">info@everline.com</span>
                                </div>
                            </aside>
                        </div>
                        <div className="col-md-4 footerattr">
                            <aside id="widget_logo-2" className="widget_widget_logo widget">
                                <div className="tz_logo_widget">
                                    <a href="#">
                                        <img src="images/EverlineTheme.png" alt="Everline" />
                                </a>
                                        <p>All right server. Copyright by  TemPlaza.com</p>
                            </div>
                        </aside>
                    </div>
                            <div className="col-md-4 footerattr">
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