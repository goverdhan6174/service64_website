import React, { Component } from 'react';
import { GiPositionMarker } from 'react-icons/gi'
import { FaRegEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FiPhone, FiExternalLink } from 'react-icons/fi'
import { connect } from 'react-redux';
import phone from './Images/phone.png'

class ContactInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: 'Contact Information',
            address: '38/3 Islamia College Road, Khulna',
            number: '+8803062028',
            hid: 'XXXXXXX',
            numberStyle: {
                color: "black",
                fontFamily: "Arial",
            },
            slide: {
                color: "white",
                fontFamily: "Arial",
            },
            styles: {
                color: "black",
            },
        }
    }
    componentDidMount() {
        const details = JSON.parse(localStorage.getItem('"_ud_"'))
        if (details !== null) {
            this.setState({
                number: details.user_number,
                address: details.location + ' ' + details.city
            })
        }
    }
    numberShow() {
        const { number } = this.state
        let num = number
        const details = this.props.item
        if (details !== undefined) {
            num = details.user_number
            let changeStyle = {
                transition: '2s',
                color: 'black',
            }
            this.setState({
                styles: changeStyle,
                hid: details.user_number.slice(4)
            })
        }
        else {
            let changeStyle = {
                transition: '2s',
                color: 'black',
            }
            this.setState({
                styles: changeStyle,
                hid: num.slice(4)
            })
        }

    }

    render() {
        const { styles } = this.state

        return (
            <>
                <div className=''>
                    <div className="contact-listing">
                        {/* <h2 className="widget-title">
                            {this.state.title}
                        </h2> */}
                        <div className="info-list margin-top-5px padding-bottom-5px">
                            <ul>
                                {/* {this.state.address ? (
                                    <li> Location:  {this.state.address}</li>

                                ) : ''} */}

                                {this.state.number ? (

                                    <li onClick={this.numberShow.bind(this)} style={{ cursor: 'pointer' }} className='animate__backInLeft animate__delay-2s' >
                                        Click:  {this.state.number.slice(0, 4)}<span style={styles} >{this.state.hid}</span>
                                    </li>
                                ) : ''}

                            </ul>
                        </div>

                    </div>
                   
                </div>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        item: state.listing_details
    }
}

export default connect(mapStateToProps, null)(ContactInfo);