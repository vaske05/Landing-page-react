import React from 'react';

class Footer extends React.Component<IFooterProps, IFooterState> {
    constructor(props: IFooterProps) {
        super(props);
    }

    render() {
        return (
            <section id="contact" className="s-footer">
                <div className="row section-header" data-aos="fade-up">
                    <div className="col-full">
                        <h3 className="subhead subhead--light">Contact Us</h3>
                        <h1 className="display-1 display-1--light">Get in touch and follow us on social media for latest updates!</h1>
                    </div>
                </div> 

                
                <div className="row">
                    <div className="col-three tab-full footer-secondary" data-aos="fade-up">
                        <h3 className="subhead subhead--light">Company</h3>
                        <p className="footer-address">
                            <a href="https://workclubhq.com/about-us">About us</a> <br></br>
                            <a href="https://workclubhq.com/terms-of-use">Terms of use</a><br></br>
                            <a href="https://workclubhq.com/privacy-policy">Privacy policy</a>
                        </p>
                    </div> 

                    <div className="col-three tab-full footer-secondary" data-aos="fade-up">
                        <h3 className="subhead subhead--light">Support</h3>
                        <p className="footer-address">
                            <a href="https://workclubhq.com/FAQ">FAQ</a> <br></br>
                            <a href="https://workclubhq.com/FAQ">Contact us</a><br></br>
                        </p>
                    </div>

                    <div className="col-three tab-full footer-secondary" data-aos="fade-up">
                        <h3 className="subhead subhead--light">Partners</h3>
                        <p className="footer-address">
                            <a href="https://workclub1.typeform.com/to/nWF4xF">Submit your space</a><br></br>
                        </p>
                    </div>  

                    <div className="col-three tab-full footer-secondary" data-aos="fade-up">
                        <h3 className="subhead subhead--light">Community</h3>
                        <p className="footer-address">
                            <a href="https://blog.workclubhq.com/">Blog</a><br></br>
                            <a href="https://www.facebook.com/workclubhq/">Facebook</a><br></br>
                            <a href="https://www.instagram.com/workclub/">Instagram</a><br></br>
                            <a href="https://twitter.com/WorkClub">Twetter</a><br></br>
                        </p>
                    </div>  

                    
                </div> 

                <div className="cl-go-top">
                    <a className="smoothscroll" title="Back to Top" href="#top"><i className="icon-arrow-up" aria-hidden="true"></i></a>
                </div>
            </section>
        )
    }
}

export default Footer;

export interface IFooterProps {

}

export interface IFooterState {

}