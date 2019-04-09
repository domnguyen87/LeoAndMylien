import React from 'react'

export default class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="vc_row wpb_row vc_row-fluid">
                    <div className="nocontainer">
                        <div className="vc_col-sm-12 wpb_column vc_column_container ">
                            <div className="wpb_wrapper">
                                <header className="tz-header tz-header1">
                                    <div className="wrapbox">
                                        <div className="container">
                                            <button data-target=".nav-collapse" className="btn-navbar tz_icon_menu" type="button">
                                                <i className="fa fa-bars"></i>
                                            </button>
                                            <h3 className="tzlogo pull-left">
                                                <a href="#" title="Everline">
                                                    <img src="images/Everline_logo.png" alt="Everline" />
                                        </a>
                                    </h3>
                                                <button className="tz-search pull-right"> <i className="fa fa-search"></i></button>
                                                <nav className="pull-right tznav-menu">
                                                    <ul id="menu-primary" className="tz-menu nav-collapse themeple_megemenu">
                                                        <li id="menu-item-102" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-has-children">
                                                            <a href="index.html">Home</a>
                                                            <ul className="sub-menu non_mega_menu">
                                                                <li id="menu-item-103" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="home-style-2.html">Home style 2</a>
                                                                </li>
                                                                <li id="menu-item-149" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="home-style-3.html">Home style 3</a>
                                                                </li>
                                                                <li id="menu-item-163" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="home-style-4.html">Home style 4</a>
                                                                </li>
                                                                <li id="menu-item-173" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="home-style-5.html">Home style 5</a>
                                                                </li>
                                                                <li id="menu-item-497" className="menu-item menu-item-type-custom menu-item-object-custom">
                                                                    <a href="home-rtl.html">Home RTL</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="menu-item-397" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor menu-item-has-children">
                                                            <a href="#">Features</a>
                                                            <div className='themeple_custom_menu_mega_menu themeple_mega2'>
                                                                <ul className="sub-menu ">
                                                                    <li id="menu-item-398" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children themeple_custom_menu_columns2 themeple_custom_menu_first_col">
                                                                        <a className="mega-group-title" href="#">Header Style</a>
                                                                        <ul className="sub-menu ">
                                                                            <li id="menu-item-459" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home">
                                                                                <a href="index.html">Header 1</a></li>
                                                                            <li id="menu-item-411" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                                <a href="header-2.html">Header 2</a>
                                                                            </li>
                                                                            <li id="menu-item-415" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                                <a href="header-3.html">Header 3</a>
                                                                            </li>
                                                                            <li id="menu-item-418" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                                <a href="header-4.html">Header 4</a>
                                                                            </li>
                                                                            <li id="menu-item-468" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                                <a href="header-5.html">Header 5</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li id="menu-item-399" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children themeple_custom_menu_columns2">
                                                                        <a className="mega-group-title" href="#">Pages</a>
                                                                        <ul className="sub-menu ">
                                                                            <li id="menu-item-425" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                                <a href="about.html">About</a>
                                                                            </li>
                                                                            <li id="menu-item-444" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                                <a href="services.html">Services</a>
                                                                            </li>
                                                                            <li id="menu-item-451" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                                <a href="contact.html">Contact</a>
                                                                            </li>
                                                                            <li id="menu-item-463" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                                <a href="coming-soon.html">Coming soon</a>
                                                                            </li>
                                                                            <li id="menu-item-501" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                                <a href="typography.html">Typography</a>
                                                                            </li>
                                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                                <a href="404.html">404 Page</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li id="menu-item-183" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children">
                                                            <a href="blog.html">Blog</a>
                                                            <ul className="sub-menu non_mega_menu">
                                                                <li id="menu-item-266" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="timeline.html">Timeline</a>
                                                                </li>
                                                                <li id="menu-item-208" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="blog-2-columns.html">Blog 2 columns</a>
                                                                </li>
                                                                <li id="menu-item-228" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="blog-3-columns.html">Blog 3 columns</a>
                                                                </li>
                                                                <li id="menu-item-263" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="blog-4-columns.html">Blog 4 columns</a>
                                                                </li>
                                                                <li id="menu-item-269" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                                                    <a href="#">Blog Sidebar</a>
                                                                    <ul className="sub-menu ">
                                                                        <li id="menu-item-270" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                            <a href="left-sidebar.html">Left sidebar</a>
                                                                        </li>
                                                                        <li id="menu-item-273" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                            <a href="right-sidebar.html">Right sidebar</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="blog-single-images.html">Blog Single Images</a>
                                                                </li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="blog-single-audio.html">Blog Single Audio</a>
                                                                </li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="blog-single-video.html">Blog Signgle Video</a>
                                                                </li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="blog-single-quote.html">Blog Single Quote</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="menu-item-279" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                                            <a href="#">Portfolio</a>
                                                            <ul className="sub-menu non_mega_menu">
                                                                <li id="menu-item-323" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="timeline-2.html">Timeline</a>
                                                                </li>
                                                                <li id="menu-item-278" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="fullwidth.html">Fullwidth</a>
                                                                </li>
                                                                <li id="menu-item-293" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="portfolio-2-columns.html">Portfolio 2 columns</a>
                                                                </li>
                                                                <li id="menu-item-298" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="portfolio-3-columns.html">Portfolio 3 columns</a>
                                                                </li>
                                                                <li id="menu-item-301" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="portfolio-4-columns.html">Portfolio 4 columns</a>
                                                                </li>
                                                                <li id="menu-item-328" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="portfolio-mansory.html">Portfolio Mansory</a>
                                                                </li>
                                                                <li id="menu-item-335" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="portfolio-left-sidebar.html">Portfolio Left sidebar</a>
                                                                </li>
                                                                <li id="menu-item-340" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="portfolio-right-sidebar.html">Portfolio right sidebar</a>
                                                                </li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="portfolio-post.html">Portfolio Post</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="menu-item-373" className="menu-item menu-item-type-taxonomy menu-item-object-tribe_events_cat menu-item-has-children">
                                                            <a href="event.html">Events</a>
                                                            <ul className="sub-menu non_mega_menu">
                                                                <li id="menu-item-380" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="events-grid.html">Events Grid</a>
                                                                </li>
                                                                <li id="menu-item-396" className="menu-item menu-item-type-post_type menu-item-object-tribe_events">
                                                                    <a href="your-honeymoon.html">Single Event</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="menu-item-20" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                                                            <a href="shop.html">Shop</a>
                                                            <ul className="sub-menu non_mega_menu">
                                                                <li id="menu-item-19" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="cart.html">Cart</a>
                                                                </li>
                                                                <li id="menu-item-18" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="checkout.html">Checkout</a>
                                                                </li>
                                                                <li id="menu-item-17" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="my-account.html">My Account</a>
                                                                </li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="product-detail.html">Product Detail</a>
                                                                </li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="product-category.html">Product Category</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </nav>
                                </div>
                                        </div>
                        </header>
                                    <div className="tzform-search">
                                        <img className="tzcontro_search" src="images/icon_search_delete.png" alt="icon search" />
                                            <form method="get" id="searchform" action="#">
                                                <label className="icon-search">&nbsp;</label>
                                                <label for="s" className="assistive-text assistive-tzsearch">Search</label>
                                                <input type="text" className="field Tzsearchform inputbox search-query" name="s" id="s" placeholder="Search..." />
                                                <input type="submit" className="submit" name="submit" id="searchsubmit" value="Search" />
                                            </form>
                        </div>
                                    </div>
                </div>
                            </div>
                        </div>
            </React.Fragment>
        )
    }
}