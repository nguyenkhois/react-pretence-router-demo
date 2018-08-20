// React-Redux component
import React, { Component } from 'react';
import { connect } from 'react-redux';

export const timestampReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_TIMESTAMP':
            return ({ ...state, timestamp: Date.now() })
        default:
            return state
    }
};

const timestampAction = {
    setTimeStamp: () => ({ type: 'SET_TIMESTAMP' })
};

const mapDispatchToProps = {
    setTimeStampNow: timestampAction.setTimeStamp
};

const mapStateToProps = (state) => {
    return ({
        datetime: state.timestampReducer.timestamp
    })
};

class SetTimeStamp extends Component {
    componentDidMount() {
        this.props.setTimeStampNow();
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.setTimeStampNow();
    }

    render() {
        return (
            <div>
                <p>Timestamp - React-Redux component: {this.props.datetime}</p>
                <button onClick={e => this.handleClick(e)}>Set timestamp</button>
            </div>
        )
    }
};
export const TimeStamp = connect(mapStateToProps, mapDispatchToProps)(SetTimeStamp);