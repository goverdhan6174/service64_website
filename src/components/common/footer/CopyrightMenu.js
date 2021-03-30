import React, {Component} from 'react';

class CopyrightMenu extends Component {
    state = {
        links: [
            {
                path: 'terms-conditions',
                title: 'Terms & Conditions'
            },
            {
                path: '/Privacy-policy',
                title: 'Privacy Policy'
            },
            {
                path: '/contact',
                title: 'Help Center'
            }
        ]
    }
    render() {
        return (
            <>
                <ul className="list-items">
                    {this.state.links.map((link, index) => {
                        return (
                            <li key={index}>
                                <a href={link.path}>{link.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </>
        );
    }
}

export default CopyrightMenu;