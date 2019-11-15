import React from 'react';

class Sidebar extends React.Component<ISidebarProps, ISidebarState> {
    constructor(props: ISidebarProps) {
        super(props);
        this.onMenuClick = this.onMenuClick.bind(this);
        this.onCloseClick = this.onCloseClick.bind(this);
    }

    onMenuClick() {
        const siteBody = document.querySelector('body') as HTMLBodyElement;
        siteBody.classList.add("menu-is-open");
    }

    onCloseClick() {
        this.onMenuClick();
        const siteBody = document.querySelector('body') as HTMLBodyElement;
        siteBody.classList.remove("menu-is-open");
        
    }

    render() {
        return (
            
            <header className="s-header">
                
                <div className="header-logo" data-aos="fade-up">
                    <a className="site-logo" href="index.html">
                        <img src="https://workclubhq.com/assets/media/workclub_logo.png" alt="Homepage"></img>
                    </a>
                </div>

                <nav className="header-nav">
                    <a href="#0" className="header-nav__close" onClick={this.onCloseClick}> <span>Close</span></a>
                    
                    <div className="header-nav__content">
                        <h3>WorkClub</h3>
                        <ul className="header-nav__list">
                            <li className="current"><a className="smoothscroll" href="#home" title="home">Home</a></li>
                            <li><a className="smoothscroll"  href="#about" title="about">Login</a></li>
                            <li><a className="smoothscroll"  href="#explore" title="services">Explore spaces</a></li>
                            <li><a className="smoothscroll"  href="#works" title="works">How it works</a></li>
                            <li><a className="smoothscroll"  href="#contact" title="contact">Contact</a></li>
                        </ul>

                        <p>Productive <a href='#0'>working spaces</a> for modern mobile professionals.</p>
    
                        <ul className="header-nav__social">
                            <li>
                                <a href="https://www.facebook.com/workclubhq/"><i className="fab fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/WorkClub"><i className="fab fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/workclub/"><i className="fab fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <a className="header-menu-toggle" href="#0" onClick={this.onMenuClick}>
                    <span className="header-menu-icon"></span>
                </a>



            </header>
        )
    }

}

export interface ISidebarProps {

}

export interface ISidebarState {

}

export default Sidebar;