import React from 'react';
import Slider from 'react-slick';

class Feedback extends React.Component<IFeedbackProps, IFeedbackState> {
    constructor(props: IFeedbackProps) {
        super(props);
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            autoplay:true
        };
        return (
            <section id='works' className="s-feedback">
                <div className="testimonials-wrap" data-aos="fade-up">
                <div className="row">
                    <div className="col-full testimonials-header" data-aos="fade-up">
                        <h2 className="h1">WHAT USERS SAY</h2>
                    </div>
                </div>
                

                <div className="row testimonials">

                    <div className="col-full testimonials__slider">
                    <Slider {...settings}>
                        <div className="testimonials__slide">
                            <img src="https://workclubhq.com/assets/media/feedback/Liz%20Langhans.jpg" alt="" className="testimonials__avatar"/> 
                            <p>I often visit London for work purposes and when I do, I always need a space to work from. Before WorkClub, 
                            I would spend upwards of £500 for the week on hot desking and meeting rooms. With WorkClub, 
                            I spend £25 for the month and I have everything I need.</p>
                            <div className="testimonials__author">
                                Liz Langhans
                                <span>Freelancer</span>
                            </div>
                        </div>
                        <div className="testimonials__slide">
                        <img src="https://workclubhq.com/assets/media/feedback/Alfred.png" alt="" className="testimonials__avatar"/> 
                            <p>Even though we have an office, WorkClub gives the team an alternative space to work from. 
                                The service from this young company has been impeccable and I would recommend to anyone interested in a coworking membership.</p>
                            <div className="testimonials__author">
                                Alfred Scott
                                <span>Freelancer</span>
                            </div>
                        </div>
                        <div className="testimonials__slide">
                        <img src="https://workclubhq.com/assets/media/feedback/Kiran.jpg" alt="" className="testimonials__avatar"/> 
                            <p>I have just used WorkClub for the first time today and was highly impressed. 
                                They have built a wonderful coworking community, they have access to some fantastic spaces, the team are so helpful and best of all, I've managed to book free of charge.</p>
                            <div className="testimonials__author">
                                Kiran Kachela
                                <span>Freelancer</span>
                            </div>
                        </div>
                        <div className="testimonials__slide">
                        <img src="https://workclubhq.com/assets/media/feedback/James Hurley.jpg" alt="" className="testimonials__avatar"/> 
                            <p>As a recent graduate, I needed a productive space to work from during the week, that did not empty my wallet. 
                                Coffee shops are no longer suitable as they are loud, crowded spaces. 
                                WorkClub gives me pockets of peace and quiet all over the city.</p>
                            <div className="testimonials__author">
                                James Hurley
                                <span>Freelancer</span>
                            </div>
                        </div>
                    </Slider>
                    </div> 

                </div> 

            </div> 
        </section>
        )
    }
}

export default Feedback;

export interface IFeedbackProps {

}

export interface IFeedbackState {

}