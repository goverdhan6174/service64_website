import React, {Component} from 'react';
import { FiHeadphones, FiThumbsUp } from 'react-icons/fi'
import { FaCogs } from 'react-icons/fa'

class HowItWork4 extends Component {
    state = {
        items: [
            {
                icon: <FiHeadphones />,
                title: '24/7 Hours Support',
                desc: 'We support the service providers to get registered with an easy process. they can contact us any time with any issue '
            },
            {
                icon: <FaCogs />,
                title: 'Admin Panel',
                desc: 'Service providers can delete their profile anytime if any problem appears. They also have their admin panel to manage it.'
            },
            {
                icon: <FiThumbsUp />,
                title: 'Mobile friendly',
                desc: 'Our fast and smart mobile app helps to find the best match for your service and can detect your location to search for people. '
            }
        ]
    }
    render() {
        return (
            <>
                {this.state.items.map((item, i) => {
                    return (
                        <div className="col-lg-4 column-td-6" key={i}>
                            <div className="icon-box icon-box-layout icon-box-layout-3">
                                <div className="info-icon section-bg-3 text-white">
                                    <span className="la">{item.icon}</span>
                                </div>
                                <div className="info-content">
                                    <h4 className="info__title">
                                        {item.title}
                                    </h4>
                                    <p className="info__desc">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        );
    }
}

export default HowItWork4;