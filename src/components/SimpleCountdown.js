import React from 'react';
import moment from 'moment';

class SimpleCountdown extends React.Component {
    state = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    };
    
    componentDidMount() {
        this.interval = setInterval(() => {
            const { timeTillDate, timeFormat } = this.props;
            const then = moment(timeTillDate, timeFormat);
            const now = moment();
            const countdown = moment(then - now);
            const months = countdown.format('M');
            const days = countdown.format('D');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');
            this.setState({ months, days, hours, minutes, seconds });
        }, 1000);
    }
    
    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
    
    render() {
        const { months, days, hours, minutes, seconds } = this.state;
        
        if (!seconds) {
            return null;
        }
        
        return (
            <div id="countdown-wrapper">
            <div className="countdown-wrapper">
                {months && (
                    <span className="countdown-item">
                        {months}
                        <span> months </span>
                    </span>
                )}
                {days && (
                    <span className="countdown-item">
                        {days}
                        <span> days </span>
                    </span>
                )}
                {hours && (
                    <span className="countdown-item">
                        {hours}
                        <span> hours </span>
                    </span>
                )}
                {minutes && (
                    <span className="countdown-item">
                        {minutes}
                        <span> minutes </span>
                    </span>
                )}
                {seconds && (
                    <span className="countdown-item">
                        {seconds}
                        <span> seconds</span>
                    </span>
                )}
            </div>
            </div>
        );
    }
}

export default SimpleCountdown