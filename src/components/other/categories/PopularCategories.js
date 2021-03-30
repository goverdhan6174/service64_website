import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {AiOutlineCar} from 'react-icons/ai';
import { FaTelegramPlane,FaMicrochip, FaBolt, FaGasPump, FaPiedPiperAlt, FaToolbox, FaThermometerHalf} from "react-icons/fa";

class PopularCategories extends Component {
    states = {
        items: [
            {
                icon: <FaTelegramPlane />,
                title: 'Home Shifting',                
                url: '/list',
            },
            {
                icon: <FaBolt />,
                title: 'Electrician ',                
                url: '/list',
            },
            {
                icon: <FaGasPump />,
                title: 'Gas Mechanic ',
                url: '/list',
            },
            {
                icon: <AiOutlineCar />,
                title: 'Ambulance ',
                url: '/list',
            },
            {
                icon: <FaPiedPiperAlt />,
                title: 'Plumbing ',
                url: '/list',
            },
            {
                icon: <FaMicrochip />,
                title: 'Electronic Repair ',
                url: '/list',
            },
            {
                icon: <FaToolbox />,
                title: 'Fridge Mechanic ',
                url: '/list',
            },
            {
                icon: <FaThermometerHalf />,
                title: 'AC Repair',
                url: '/list',
            }
        ]
    }
    render() {
        return (
            <>
                {this.states.items.map((item, index) => {
                    return (
                        <div className="col-lg-3 col-sm-3 column-td-6" key={index}>
                            <div className="category-item mb-4 mt-0 ml-0 mr-0 p-0">
                                <div className="cat-main">                                    
                                    <div className="cat-item-home">
                                        <span className="cat-icon">{item.icon}</span><span className="category-title">{item.title}</span>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        );
    }
}

export default PopularCategories;