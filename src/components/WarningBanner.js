import React, {Component} from 'react'

class WarningBanner extends Component {

    render() {
        if (!this.props.warn) {
            return null;
        }
        return <div className="alert alert-warning"> {this.props.warn} </div>
    }
}

export {WarningBanner}