import React from 'react';

import Slider from 'react-slick';

class Explore extends React.Component<IExploreProps, IExploreState> {
    constructor(props: IExploreProps) {
        super(props);
    }

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
          };
        return (
            
            <section id='explore' className="s-explore">
                    
                <div className="row section-header" data-aos="fade-up">
                    <div className="col-full">
                        <h3 className="subhead">Explore spaces</h3>
                        <h1 className="display-1">Explore spaces near you.</h1>
                    </div>
                </div> 

                <div className="row" data-aos="fade-up">
                    <div className="col-full">
                        <p className="lead">
                        Choose from dedicated coworking spaces, to meeting spaces and more with one flexible membership. 
                        </p>
                    </div>
                </div>
                <div className="row testimonials">
                    <div className="col-full testimonials__slider">
                        <Slider {...settings}>
                            <div className="explore-space"><h3>Space 1</h3></div>
                            <div className="explore-space"><h3>Space 2</h3></div>
                            <div className="explore-space"><h3>Space 3</h3></div>
                            <div className="explore-space"><h3>Space 4</h3></div>
                            <div className="explore-space"><h3>Space 5</h3></div>
                            <div className="explore-space"><h3>Space 6</h3></div>
                        </Slider>
                    </div>
                </div>
            </section> 
            
        )
    }

}

export default Explore;

export interface IExploreProps {

}

export interface IExploreState {

}