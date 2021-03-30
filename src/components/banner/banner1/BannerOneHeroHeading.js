import React, {Component} from 'react'

export default class BannerOneHeroHeading extends Component {
    state  = {
        title: 'Find expert local service providers easily',
        titleHighlight: [
            /*{
                active: true,
                text: 'Hotels'
            },
            {
                active: false,
                text: 'Restaurants'
            },
            {
                active: false,
                text: 'Shops'
            },
            {
                active: false,
                text: 'Salons'
            },
            {
                active: false,
                text: 'Apartments'
            },
            {
                active: false,
                text: 'Travels'
            },
            {
                active: false,
                text: 'Business'
            },
            {
                active: false,
                text: 'Fitness'
            }*/
        ],
        desc: 'Discover the best people around, to get your job done.'
    }
    render() {
        return (
            <>
                <div className="hero-heading">
                    <div className="section-heading">
                        <h2 className="sec__title cd-headline zoom">
                            {this.state.title}
                            <span className="cd-words-wrapper">
                                {this.state.titleHighlight.map((item, index) => {
                                    return (
                                        <b className={item.active ? 'is-visible' : ' '} key={index}> {item.text}</b>
                                    )
                                })}
                            </span>
                        </h2>
                        <p className="sec__desc banner-desc">
                            {this.state.desc}
                        </p>
                    </div>
                </div>
            </>
        )
    }
}
