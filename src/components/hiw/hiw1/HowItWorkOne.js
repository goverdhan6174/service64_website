import React, {Component} from 'react';
import HowItWorkOneVideo from "./HowItWorkOneVideo";

class HowItWorkOne extends Component {
    render() {
        return (
            <>
                
                {/* Video */}
                <div className="row">
                    <div className="col-lg-8 mx-auto padding-top-30px">
                        <HowItWorkOneVideo />
                    </div>
                </div>
            </>
        );
    }
}

export default HowItWorkOne;