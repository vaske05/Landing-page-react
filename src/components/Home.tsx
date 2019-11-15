import React from 'react';

class Home extends React.Component<IHomeProps, IHomeState> {
    constructor(props: IHomeProps) {
        super(props);
    }

    componentWillMount() {
        const htmlElement = document.querySelector('html') as HTMLElement;
        htmlElement.classList.add("cl-preload");

    }

    componentDidMount() {
        const htmlElement = document.querySelector('html') as HTMLElement;
        htmlElement.classList.remove("cl-preload");
        htmlElement.classList.add("cl-loaded");
    }

    render() {
        return(
            <section id="home" className="s-home target-section" data-parallax="scroll"  data-natural-width="3000" data-natural-height="2000" data-position-y="top">
                <div className="shadow-overlay">
                </div> 
                <div className="home-content">
                    <div className="row home-content__main">
                    <h1>
                        Productive working spaces for modern <br></br>
                        mobile professionals.
                            
                    </h1>
                    <p>
                            Whether you need a single desk or an entire meeting room, we create modern coworking environments that will help you and your business thrive
                    </p>
                        
                    </div> 
                </div>                 

                <ul className="home-sidelinks">
                    <li><a className="smoothscroll" href="">Join<span>Join workclub now</span></a></li>
                    <li><a className="smoothscroll" href="">Login<span></span></a></li>
                    <li><a className="smoothscroll" href="#explore">Explore<span>coworking spaces</span></a></li>
                    <li><a className="smoothscroll" href="#howItWorks">How it works<span></span></a></li>
                    <li><a  className="smoothscroll" href="#contact">Contact<span>get in touch</span></a></li>
                </ul>

                <ul className="home-social">
                    <li className="home-social-title">Follow Us</li>
                    <li><a href="https://www.facebook.com/workclubhq/">
                        <i className="fab fa-facebook"></i>
                        <span className="home-social-text">Facebook</span>
                    </a></li>
                    <li><a href="https://twitter.com/WorkClub">
                        <i className="fab fa-twitter"></i>
                        <span className="home-social-text">Twitter</span>
                    </a></li>
                    <li><a href="">
                        <i className="fab fa-linkedin"></i>
                        <span className="home-social-text">LinkedIn</span>
                    </a></li>
                </ul>

                <a href="#explore" className="home-scroll smoothscroll">
                    <span className="home-scroll__text">Scroll Down</span>
                    <span className="home-scroll__icon"></span>
                </a> 
            </section>

        )
    }

}

export interface IHomeProps {

}

export interface IHomeState {

}


export default Home;