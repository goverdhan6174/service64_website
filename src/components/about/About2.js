import React, {Component} from 'react';
import SectionsHeading from "../common/SectionsHeading";
import Button from "../common/Button";

class About2 extends Component {
    state = {
        images: [
            {
                img: require('../../assets/images/curology-6CJg-fOTYs4-unsplash.jpg'),
                boxClass: 'mt-4'
            },
            {
                img: require('../../assets/images/neonbrand-60krlMMeWxU-unsplash.jpg'),
                boxClass: ''
            },
            {
                img: require('../../assets/images/steve-johnson-e5LdlAMpkEw-unsplash.jpg'),
                boxClass: 'mt-4'
            },
            {
                img: require('../../assets/images/intrapixel-7XaBaKwrV1E-unsplash.jpg'),
                boxClass: ''
            }
        ]
    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-content">
                            <SectionsHeading
                                title="We are the first and largest directory for local service providers."
                                desc="We connect local service providers with great people"
                                descClass=" font-size-17 pr-3 mb-3"
                            >
                                <p className="sec__desc about-text font-size-17 pr-3">
                                Our goal is to get the people connected with the customers who are looking for them, especially the service providers who don't have an office or shop. 
                                Like the people who shift furniture from one place to another at the time, we move from one city to the next. They don't have any shop or anything 
                                to contact except the contact numbers in the electric pols, that is why we are trying to get them all together here. 
                                </p>
                                <div className="btn-box padding-top-30px">
                                    <Button text="find out more" url="/contact" />
                                </div>
                            </SectionsHeading>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="img-boxes">
                            <div className="row">
                                {this.state.images.map((item, i) => {
                                    return (
                                        <div className="col-lg-6 column-td-6" key={i}>
                                            <div className={'img-box-item ' + item.boxClass}>
                                                <img src={item.img} alt="about" />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default About2;