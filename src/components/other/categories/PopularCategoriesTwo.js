import React, {Component} from 'react';
import {Link} from "react-router-dom";

class PopularCategoriesTwo extends Component {
    state = {
        title: 'Popular:',
        lists: [
            {
                url: '/list',
                title: 'Travel'
            },
            {
                url: '/list',
                title: 'Food'
            },
            {
                url: '/list',
                title: 'Business'
            },
            {
                url: '/list',
                title: 'Salon'
            },
            {
                url: '/list',
                title: 'Cleaning'
            }
        ]
    }
    render() {
        return (
            <>
                <ul className="tag-list">
                    <li className="font-weight-semi-bold color-text-2">Popular:</li>
                    {this.state.lists.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.url} className="radius-rounded line-height-20">
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </>
        );
    }
}

export default PopularCategoriesTwo;