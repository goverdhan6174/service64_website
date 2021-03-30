import React, {Component} from 'react';

class FooterQuickLinkWidget extends Component {
    state = {
        title: 'Quick Links',
        links: [
            {
                path: '/about-us',
                text: 'about'
            },
            {
                path: '/sign-up',
                text: 'sign up'
            },
            {
                path: '/login',
                text: 'log in'
            },
            
            {
                path: '/contact',
                text: 'contact us'
            },
            {
                path: '/list',
                text: 'Ambulance'
            }
        ]
    }
    render() {
        return (
            <>
                <div className="col-lg-2 offset-md-1 column-td-6">
                    <div className="footer-item">
                        <p className="footer__title">
                            {this.state.title}
                        </p>
                        <ul className="list-items">
                            {this.state.links.map((link, index) => {
                                return (
                                    <li key={index}>
                                        <a href={link.path}>{link.text}</a>
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

export default FooterQuickLinkWidget;