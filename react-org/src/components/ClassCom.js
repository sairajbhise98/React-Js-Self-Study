import React from "react";

class ClassCom extends React.Component {
    render() {
        let element = (
            <div onClick={this.props.onClick}>
                <h1>Class Component</h1>
                <p className='click'>Click any where</p>
                <p>Hii {this.props.name}</p>
            </div>
        );
        return element;
    }
}

export default ClassCom ;