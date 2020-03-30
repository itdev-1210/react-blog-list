import React, { Component } from 'react';
import './input_box.scss';

class InputBox extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="input-box " >
                <input placeholder={this.props.placeholder ? this.props.placeholder : ''} type={this.props.type ? this.props.type : 'text'} name={this.props.name} onChange={(e) => this.props.onUpdate(e, "inputbox")} />
            </div>
        );
    }
}
export default InputBox;    