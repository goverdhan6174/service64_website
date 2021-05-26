import React, {Component} from 'react';
import CopyrightMenu from "./CopyrightMenu";
import { FiHeart } from 'react-icons/fi'

class Copyright extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copy-right padding-top-60px">
                            <p className="copy__desc">
                            Copyright @ {(new Date().getFullYear())} Service64.com | All Rights Reserved
                            </p>

                            <CopyrightMenu />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Copyright;
