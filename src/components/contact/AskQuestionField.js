import React, { Component } from 'react';
import { AiOutlineUser } from 'react-icons/ai'
import { FaRegEnvelope } from 'react-icons/fa'
import { BsPencil } from 'react-icons/bs'
import { RiSendPlane2Line } from 'react-icons/ri'
import { bindActionCreators } from "redux";
import { mailtoadmin } from '../../store/action'
import { connect } from "react-redux";
class AskQuestionField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
            err_message: false,
            message_sent: false,
        }
    }

    value(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    send_message() {
        const { name, email, message } = this.state
        if (name.length < 2) {
            this.setState({
                err_message: "Please enter name"
            })
        }
        else if (email.length < 2) {
            this.setState({
                err_message: "Please provide an email"
            })
        }
        else if (message.length < 2) {
            this.setState({
                err_message: "Please type your message"
            })
        }
        else {
            const message_body = {
                name: name,
                email: email,
                message: message
            }
            this.props.actions.mailtoadmin(message_body).then((res) => {
                console.log(res);
                this.setState({
                    message_sent: true
                })
            })
        }
    }

    render() {
        return (
            <>
                <div className="faq-forum">
                    <div className="billing-form-item">
                        {this.props.title ? (
                            <div className="billing-title-wrap">
                                <h3 className="widget-title pb-0">{this.props.title}</h3>
                                <div className="title-shape margin-top-10px"></div>
                            </div>
                        ) : ''}
                        {!this.state.message_sent ? (
                            <div className="billing-content">
                                <div className="contact-form-action">
                                    <form method="post">
                                        <div className="input-box">
                                            <label className="label-text">Your name</label>
                                            <div className="form-group">
                                                <span className="form-icon"><AiOutlineUser /></span>
                                                <input className="form-control" type="text" name="name" value={this.state.name} onChange={this.value.bind(this)} placeholder="Your name" />
                                            </div>
                                        </div>
                                        <div className="input-box">
                                            <label className="label-text">Your email</label>
                                            <div className="form-group">
                                                <span className="form-icon"><FaRegEnvelope /></span>
                                                <input className="form-control" type="text" name="email" value={this.state.email} onChange={this.value.bind(this)} placeholder="Email address" />
                                            </div>
                                        </div>
                                        <div className="input-box">
                                            <label className="label-text">message</label>
                                            <div className="form-group">
                                                <span className="form-icon"><BsPencil /></span>
                                                <textarea className="message-control form-control" name="message" value={this.state.message} onChange={this.value.bind(this)} placeholder="Write message"></textarea>
                                            </div>
                                        </div>
                                        {this.state.err_message && (
                                            <div className="alert alert-danger">
                                                {this.state.err_message}
                                            </div>
                                        )}
                                        <div className="btn-box">
                                            <button type="button" onClick={this.send_message.bind(this)} className="theme-btn border-0">
                                                <i><RiSendPlane2Line /></i> send message
                                    </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        ) : (
                                <div className='text-center' style={{ height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
                                    <h4>We have recived your message</h4>
                                </div>
                            )}

                    </div>
                </div>
            </>
        );
    }
}

const mapDispatchToProps = (dispatchEvent) => {
    return {
        actions: bindActionCreators(
            {
                mailtoadmin
            },
            dispatchEvent
        ),
    };
};


export default connect(null, mapDispatchToProps)(AskQuestionField);