import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {GiPineTree} from 'react-icons/gi'
import {BsBriefcase} from 'react-icons/bs'
import {TiBrush} from 'react-icons/ti'
import {AiOutlineCar} from 'react-icons/ai'
import {FiBookOpen} from 'react-icons/fi'

import { GiSpade, GiLargePaintBrush, GiOpenedFoodCan, GiPikeman, GiVacuumCleaner, GiWoodCabin, GiPokecog, GiWaterDrop, GiDominoTiles, GiWindow } from "react-icons/gi";

export default class PopularCategoriesMore extends Component {
    states = {
        items: [
            {
                icon: <GiSpade />,
                title: 'Constructor ',
                url: '/list',                
            },
            {
                icon: <GiLargePaintBrush />,
                title: 'Painter ',
                url: '/list',                
            },
            {
                icon: <GiOpenedFoodCan />,
                title: 'Chef ',
                url: '/list',                
            },
            {
                icon: <GiPineTree />,
                title: 'Decorator ',
                url: '/list',
            },
            {
                icon: <GiPikeman />,
                title: 'Caretaker ',
                url: '/list',                
            },
            {
                icon: <AiOutlineCar />,
                title: 'Rent a car ',
                url: '/list',                
            },
            {
                icon: <GiVacuumCleaner />,
                title: 'Helping Hand',
                url: '/list',
            },
            {
                icon: <GiWoodCabin />,
                title: 'Carpenter',
                url: '/list',
            },
            {
                icon: <GiPokecog />,
                title: 'Pump Mechanic',
                url: '/list',
            },
            {
                icon: <GiWaterDrop />,
                title: 'Water Tank Cleaner',
                url: '/list',
            },
            {
                icon: <GiDominoTiles />,
                title: 'Tiles Mistri',
                url: '/list',
            },
            {
                icon: <GiWindow />,
                title: 'Thai Glass Mistri',
                url: '/list',
            }

        ]
    }
    render() {
        return (
            <>
                {this.states.items.map((item, index) => {
                    return (
                        <div className="col-lg-3 column-td-6" key={index}>
                            <div className="category-item mb-4 mt-0 ml-0 mr-0 p-0">
                                <div className="cat-main">                                    
                                    <div className="cat-item-home">
                                        <span className="cat-icon">{item.icon}</span><span className="category-title">{item.title}</span>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        );
    }
}