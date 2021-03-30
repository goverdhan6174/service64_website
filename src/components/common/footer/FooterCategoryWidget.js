import React, {Component} from 'react';
import {Link} from "react-router-dom";

class FooterCategoryWidget extends Component {
    state = {
        title: 'Categories',
        links: [
            {
                path: '/list',
                text: 'Home Shifting'
            },
            {
                path: '/list',
                text: 'House Tutor'
            },
            {
                path: '/list',
                text: 'Electronic Repair'
            },
            {
                path: '/list',
                text: 'Gas Mechanic'
            },
            {
                path: '/list',
                text: 'Plumbing'
            }
            
        ]
    }
    render() {
        return (
            <>
                <div className="col-lg-2 column-td-6">
                    <div className="footer-item">
                        <p className="footer__title">
                            {this.state.title}
                        </p>
                        <ul className="list-items">
                            {this.state.links.map((link, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={link.path}>{link.text}</Link>
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

export default FooterCategoryWidget;