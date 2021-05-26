import React, {Component} from 'react';
import SectionsHeading from "../../common/SectionsHeading";
import { GoFile } from 'react-icons/go'
import { FiFilter } from 'react-icons/fi'
import { AiOutlineQuestionCircle, AiOutlineApple, AiFillAndroid } from 'react-icons/ai'
import Button from "../../common/Button";

export default class CtaOne extends Component {
    stateList = {
        img: require('../../../assets/images/ezgif.com-gif-maker.webp'),
        lists: [
            {
                icon: <GoFile />,
                text: 'Register easily'
            },
            {
                icon: <FiFilter />,
                text: 'Find the best match for you'
            },
            {
                icon: <AiOutlineQuestionCircle />,
                text: 'Large community to help'
            }
        ],
        symbolImg: [
            {
                img: require('../../../assets/images/symble1.png')
            },
            {
                img: require('../../../assets/images/symble2.png')
            },
            {
                img: require('../../../assets/images/symble3.png')
            },
            {
                img: require('../../../assets/images/symble4.png')
            }
        ]
    }
    render() {
        return (
            <>
                    {this.stateList.symbolImg.map((img, index) => {
                        return (
                            <img src={img.img} key={index} alt="CTA Symbol" className="symble-img" />
                        )
                    })}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="mobile-img">
                                    <img src={this.stateList.img} alt="service64_app_mobile_view" />
                                </div>
                            </div>
                            <div className="col-lg-6 ml-auto">
                                <div className="mobile-app-content">
                                    <SectionsHeading title="Service64 Android App is Available to Download!" titleClass="mb-3" desc="Download our mobile app to register in our directory. It also can help you to find the best worker in any selected category on any location you want to. This app can make finding people more awesome, and you can register to get connected. " descClass="font-size-17 mb-4" />
                                    <ul className="info-list contact-links">
                                        {this.stateList.lists.map((item, index) => {
                                            return (
                                                <li className="d-flex align-items-center mb-2" key={index}>
                                                    <span className="la">{item.icon}</span> {item.text}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <div className="btn-box text-left margin-top-40px">                                        
                                      <a className="down-btn" rel="noopener" target="_blank" href="https://play.google.com/store/apps/details?id=com.service64"><span className="btn_icon"><AiFillAndroid /></span> Download android app</a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
}
