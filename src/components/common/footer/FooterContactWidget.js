import React, {Component} from 'react';
import { AiOutlineHome } from 'react-icons/ai'
import { FiHeadphones } from 'react-icons/fi'
import { FaRegEnvelope } from 'react-icons/fa'

class FooterContactWidget extends Component {
    state = {
        title: 'Contact Us',
        lists: [
            {
                icon: <AiOutlineHome />,
                text: '38/3 Islamia College Road, Khulna'
            },
            {
                icon: <FiHeadphones />,
                text: '+8801923062028'
            },
            {
                icon: <FaRegEnvelope />,
                text: 'support@service64.com'
            }
        ]
    }
    render() {
        return (
            <>
                <div className="col-lg-3 column-td-6">
                    <div className="footer-item">
                        <p className="footer__title">
                            {this.state.title}
                        </p>
                        <ul className="info-list contact-links">
                            {this.state.lists.map((list, index) => {
                                return (
                                    <li key={index}>
                                        <span className="la">
                                            {list.icon}
                                        </span> {list.text}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default FooterContactWidget;