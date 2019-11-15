import React from 'react';

class HowItWorks extends React.Component<IHowItWorksProps, IHowItWorksState> {
    constructor(props: IHowItWorksProps) {
        super(props);
    }

    render() {
        return (
        <section id='howItWorks' className="s-about">
            
            <div className="row section-header" data-aos="fade-up">
            <div className="col-full">
                <h3 className="subhead">How it works</h3>
                
            </div>
            </div> 
{/* 
            <div className="row" data-aos="fade-up">
                <div className="col-full">
                    <p className="lead">
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. 
                    </p>
                </div>
            </div>
             */}

        <div className="row">
                
            <div className="about-process process block-1-2 block-tab-full">

                <div className="process__vline-left"></div>
                <div className="process__vline-right"></div>

                <div className="col-block process__col" data-item="1" data-aos="fade-up">
                    <div className="process__text">
                        <h4>DISCOVER NEARBY SPACES</h4>

                        <p>
                        We have a range of workspaces and meeting rooms for you to choose from
                        </p>
                    </div>
                </div>
                <div className="col-block process__col" data-item="2" data-aos="fade-up">
                    <div className="process__text">
                        <h4>RESERVE YOUR SPACE</h4>

                        <p>
                        Find a space that suits your work requirements & book 30mins ahead of time.
                        </p>
                    </div>
                </div>
                <div className="col-block process__col" data-item="3" data-aos="fade-up">
                    <div className="process__text">
                        <h4>CHECK IN</h4>

                        <p>
                        Make sure you check-in to let the venue manager know you have arrived.
                        </p>
                    </div>
                </div>
                <div className="col-block process__col" data-item="4" data-aos="fade-up">
                    <div className="process__text">
                        <h4>GET TO WORK</h4>

                        <p>
                        Find a work spot, grab some coffee and make it happen.
                        </p>
                    </div>
                </div>

            </div> 

        </div> 

    </section> 

            
            
        )
    }

}

export default HowItWorks;

export interface IHowItWorksProps {

}

export interface IHowItWorksState {

}