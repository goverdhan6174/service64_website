import React, { Component } from 'react';
import Select from "react-select";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { val, get_loc } from '../../store/action';


// const divisions = [
//     {
//         value: 0,
//         label: 'Select a category'
//     },
//     {
//         value: 1,
//         label: 'All Divisions'
//     },
//     {
//         value: 2,
//         label: 'Barisal'
//     },
//     {
//         value: 3,
//         label: 'Chittagong'
//     },
//     {
//         value: 4,
//         label: 'Dhaka'
//     },
//     {
//         value: 5,
//         label: 'Mymensingh'
//     },
//     {
//         value: 6,
//         label: 'Rajshahi'
//     },
//     {
//         value: 7,
//         label: 'Sylhet'
//     },
//     {
//         value: 8,
//         label: 'Rangpur'
//     },

// ]
// const locations = [
//     {
//         value: 0,
//         label: 'Select a category'
//     },
//     {
//         value: 2,
//         label: 'Barisal'
//     },
//     {
//         value: 3,
//         label: 'Chittagong'
//     },
//     {
//         value: 4,
//         label: 'Dhaka'
//     },
//     {
//         value: 5,
//         label: 'Mymensingh'
//     },
//     {
//         value: 6,
//         label: 'Rajshahi'
//     },
//     {
//         value: 7,
//         label: 'Sylhet'
//     },
//     {
//         value: 8,
//         label: 'Rangpur'
//     },

//     {
//         value: 9,
//         label: 'Comilla'
//     },
//     {
//         value: 10,
//         label: 'Narayanganj'
//     },

//     {
//         value: 11,
//         label: 'Gazipur'
//     },
//     {
//         value: 12,
//         label: 'Khulna'
//     },

// ]
class AddLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Add Location',

            selected_city: null,
            selected_location: null,

            cities: [],
            locations: [],

            city: '',
            state: '',
            country: '',
            zip: '',
        }
    }


    handleChangeCit = (ev) => {
        this.setState({ selected_city: ev });
        const ct = { city: ev.label, type: 'city' }
        this.props.actions.val(ct)
        if (ev.locations !== null) {
            let array = ev.locations
            let new_arr = []
            if (array.length > 0) {
                for (let i = 0; i < array.length; i++) {
                    const element = array[i];
                    element.value = i
                    new_arr.push(element)
                }
                this.setState({
                    locations: new_arr,
                    selected_location: null,
                })
            }
        }
        else {
            this.setState({ locations: [] })
        }
    }


    handleChangeLoc = (ev) => {
        const ct = { location: ev, type: 'state' } 
        console.log(ev);
        this.props.actions.val(ct)
        this.setState(
            { selected_location: ev }
        );
    }


    value(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.props.actions.val(e.target)
    }

    get_loc() {
        this.props.actions.get_loc().then((res) => {
            let array = res.data
            let new_arr = []
            if (array.length > 0) {
                for (let i = 0; i < array.length; i++) {
                    const element = array[i];
                    element.value = i
                    new_arr.push(element)
                }
                this.setState({
                    cities: new_arr,
                })
            }
        })
    }

    componentDidMount() {
        this.get_loc()
    }

    render() {
        const { cities, locations, selected_location, selected_city } = this.state
        return (
            <>
                <div className="billing-form-item">
                    <div className="billing-title-wrap">
                        <h3 className="widget-title pb-0">
                            {this.state.title}
                        </h3>
                        <div className="title-shape margin-top-10px"></div>
                    </div>
                    <div className="billing-content">
                        <div className="contact-form-action">
                            <form method="post">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">City</label>
                                            <div className="form-group">
                                                <Select
                                                    value={selected_city}
                                                    onChange={this.handleChangeCit.bind(this)}
                                                    placeholder="Select a City"
                                                    options={cities}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Location</label>
                                            <div className="form-group">
                                                <Select
                                                    value={selected_location}
                                                    isMulti
                                                    onChange={this.handleChangeLoc.bind(this)}
                                                    placeholder="Select a Location"
                                                    options={locations}
                                                    className="basic-multi-select"
                                                    classNamePrefix="select"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
const mapDispatchToProps = (dispatchEvent) => {
    return {
        actions: bindActionCreators({
            val, get_loc
        }, dispatchEvent),
    }
}

const mapStateToProps = (state) => {
    return {
        item: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLocation);