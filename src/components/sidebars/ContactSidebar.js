import React, {Component} from 'react';
import { GoLocation } from 'react-icons/go'
import { FiPhone } from 'react-icons/fi'
import { FaRegEnvelope } from 'react-icons/fa'

class ContactSidebar extends Component {
    state = {
        title: 'Quick contact',
        img: require('../../assets/images/img27.jpg'),
        desc: 'Feel free to send us an email with any questions or help needed. Its a great pleasure for us to help you with that. Sometimes we get a large number of emails from our users so, it can take a while to reply in time. Thanks in advance for your patience.',
        address: 'Islamia college road, Boyra, Khulna',
        phoneNum: '01923062028',
        email: 'support@service64.com',
        opendays: 'Saturday To Thursday',
        opendaytime: '9am - 7pm',
        closeday: 'Friday'
    }
    render() {
        return (
            <>
                <div className="billing-form-item">
                    <div className="billing-title-wrap">
                        <h3 className="widget-title pb-0">
                            {this.state.title}
                        </h3>
                        <div className="title-shape margin-top-10px"></div>
                    </div>
                    <div className="billing-content">
                        <div className="our-office-content">
                            
                            <div className="section-heading mt-4 mb-4">
                                <p className="c-page-text font-size-15 line-height-24">
                                    {this.state.desc}
                                </p>
                            </div>
                            <ul className="info-list">
                                <li className="d-inline-block mb-2 mr-2">
                                    <span className="la"><GoLocation /></span> {this.state.address}
                                </li>
                                <li className="d-inline-block mb-2 mr-2">
                                    <span className="la"><FiPhone /></span> {this.state.phoneNum}
                                </li>
                                <li className="d-inline-block mb-2 mr-2">
                                    <span className="la"><FaRegEnvelope /></span> {this.state.email}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="billing-title-wrap pt-0">
                        <h3 className="widget-title pb-0">Working Hours</h3>
                        <div className="title-shape margin-top-10px"></div>
                    </div>
                    <div className="billing-content">
                        <ul className="list-items">
                            <li className="d-flex align-items-center justify-content-between">
                                <strong className="font-weight-medium">{this.state.opendays}</strong><strong className="font-weight-medium color-text-3">{this.state.opendaytime}</strong>
                            </li>
                            <li className="d-flex align-items-center justify-content-between">
                                <strong className="font-weight-medium">{this.state.closeday}</strong><strong className="color-text">Closed</strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default ContactSidebar;