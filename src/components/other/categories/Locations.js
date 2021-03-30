import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Locations extends Component {
    state = {
        locations: [
            {
                img: require('../../../assets/images/flag1.jpg'),
                title: 'Bagerhat',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag2.jpg'),
                title: 'Bandarban',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag3.jpg'),
                title: 'Barguna',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag4.jpg'),
                title: 'Barisal',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag5.png'),
                title: 'Bhola',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag6.png'),
                title: 'Bogra',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag7.jpg'),
                title: 'Brahmanbaria',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag8.jpg'),
                title: 'Chandpur',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag9.png'),
                title: 'Chapainawabganj',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag10.png'),
                title: 'Chattogram',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag11.png'),
                title: 'Chuadanga',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag12.jpg'),
                title: 'Comilla',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag13.jpg'),
                title: 'Coxs Bazar',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag14.png'),
                title: 'Dhaka',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag15.jpg'),
                title: 'Dinajpur',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag16.jpg'),
                title: 'Faridpur',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag17.jpg'),
                title: 'Feni',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag18.jpg'),
                title: 'Gaibandha',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag19.svg'),
                title: 'Gazipur',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag20.png'),
                title: 'Gopalgonj',
                titleUrl: '#'
            }
        ]
    }
    render() {
        return (
            <>
                <div className="row">
                    {this.state.locations.map((item, index) => {
                        return (
                            <div className="col-lg-3 column-td-6" key={index}>
                                <div className="location-item">
                                    <div className="loc-img">
                                        <img src={item.img} alt="flag" />
                                    </div>
                                    <Link to={item.titleUrl} className="loc-name">
                                        {item.title}
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    }
}

export default Locations;