import React, {Component} from 'react';

class ManyLocations extends Component {
    state = {
        locations: [
            {
                img: require('../../../assets/images/flag1.jpg'),
                country: 'United States (2)',
                countryurl: '/list',
            },
            {
                img: require('../../../assets/images/flag2.jpg'),
                country: 'London (4)',
                countryurl: '/list',
            },
            {
                img: require('../../../assets/images/flag3.jpg'),
                country: 'Australia (7)',
                countryurl: '/list',
            },
            {
                img: require('../../../assets/images/flag4.jpg'),
                country: 'Japan (9)',
                countryurl: '/list',
            },
            {
                img: require('../../../assets/images/flag5.jpg'),
                country: 'France (12)',
                countryurl: '/list',
            },
            {
                img: require('../../../assets/images/flag6.jpg'),
                country: 'Russia (14)',
                countryurl: '/list',
            },
            {
                img: require('../../../assets/images/flag7.jpg'),
                country: 'New Zealand (17)',
                countryurl: '/list',
            },
            {
                img: require('../../../assets/images/flag8.jpg'),
                country: 'India (19)',
                countryurl: '/list',
            },
            {
                img: require('../../../assets/images/flag9.jpg'),
                country: 'Netherlands (15)',
                countryurl: '/list',
            },
            {
                img: require('../../../assets/images/flag10.jpg'),
                country: 'Sweden (17)',
                countryurl: '/list',
            },
            {
                img: require('../../../assets/images/flag11.jpg'),
                country: 'Saudi Arabia (29)',
                countryurl: '/list',
            },
            {
                img: require('../../../assets/images/flag12.jpg'),
                country: 'Scotland (10)',
                countryurl: '/list',
            },
            {
                img: require('../../../assets/images/flag13.jpg'),
                country: 'Canada (43)',
                countryurl: '/list',
            },
            {
                img: require('../../../assets/images/flag14.jpg'),
                country: 'Mexico (45)',
                countryurl: '/list',
            },
            {
                img: require('../../../assets/images/flag15.jpg'),
                country: 'Bangladesh (50)',
                countryurl: '/list',
            },
            {
                img: require('../../../assets/images/flag16.jpg'),
                country: 'South Africa (60)',
                countryurl: '/list',
            },
            {
                img: require('../../../assets/images/flag17.jpg'),
                country: 'Pakistan (48)',
                countryurl: '/list',
            },
            {
                img: require('../../../assets/images/flag18.jpg'),
                country: 'Costa Rica (33)',
                countryurl: '/list',
            },
            {
                img: require('../../../assets/images/flag19.jpg'),
                country: 'Italy (44)',
                countryurl: '/list',
            },
            {
                img: require('../../../assets/images/flag20.jpg'),
                country: 'Thailand (55)',
                countryurl: '/list',
            }
        ]
    }
    render() {
        return (
            <>
                <div className="col-lg-3 column-td-6">
                    <div className="location-item">
                        <div className="loc-img">
                            <img src="images/flag1.jpg" alt="flag" />
                        </div>
                        <a href="#" className="loc-name">United states (2)</a>
                    </div>
                </div>
            </>
        );
    }
}

export default ManyLocations;