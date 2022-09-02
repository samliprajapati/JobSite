import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import './Jumpstart.css'

class JumpStart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            deals: "1",
            revenue: "50000",
            pipeline: "1.84.000",
            activities: "2",
            closeActivities:"5",

        }

    }
    render() {
        const { userDetails } = this.props;
        const userType = userDetails.userType || '';
        return (
            <div>
                { userType === 'ADMIN'
                    ? <div className ="calculus">
                        <div className="jumpstart">
                            <i className="fas fa-thumbs-up"></i>
                            <h3 className="deals"> {this.state.deals} </h3>
                            <h3 >Deals Won </h3>
                        </div>
                        <div className="jumpstart">
                            <i className="fas fa-money-bill-wave"></i>
                            <h3 className="revenue"> {this.state.revenue} </h3>
                            <h3 >Total Revenue </h3>
                        </div>
                        <div className="jumpstart">
                            <i className="fas fa-briefcase"></i>
                            <h3 className="pipeline"> {this.state.pipeline} </h3>
                            <h3 >Deals in Pipelines  </h3>
                        </div>
                        <div className="jumpstart">
                            <i className="far fa-calendar-alt"></i>
                            <h3 className="activities"> {this.state.activities} </h3>
                            <h3 >Open Activities </h3>
                        </div>
                    </div>
                        : <div className="calculus">
                        <div className="jumpstart">
                            <i className="fas fa-thumbs-up"></i>
                            <h3 className="deals"> {this.state.deals} </h3>
                            <h3 >Deals Won </h3>
                        </div>
                        <div className="jumpstart">
                            <i className="far fa-calendar-alt"></i>
                            <h3 className="activities"> {this.state.activities} </h3>
                            <h3 >Open Activities </h3>
                        </div>
                        <div className="jumpstart">
                            <i className="far fa-calendar-alt" style={{color:"yellow"}}></i>
                            <h3 className="activities"> {this.state.activities} </h3>
                            <h3 >Close Activities </h3>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = ({ auth }) => ({
    fetchingUserDetails: auth.fetchingUserDetails,
    userDetails: auth.userDetails,

})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(JumpStart) 