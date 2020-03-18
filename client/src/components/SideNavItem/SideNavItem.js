import React, { Component } from 'react'

export default class SideNavItem extends Component {

    transferCurrentUni = () => {
        this.props.transferCurrentUni(this.props.specifier)
    }

    render() {
        return (
            <div className="WolfAndBirdTracker__nav-item" onClick={this.transferCurrentUni}>
                <h4 className="WolfAndBirdTracker__uni-name">{this.props.name}</h4>
            </div>
        )
    }
}
