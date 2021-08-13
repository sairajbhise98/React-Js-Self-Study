import { Component } from "react";

class ClassComponent extends Component {

    render() {


        return (
            <div>
                <h1>Class Component</h1>
                <input type='text' onKeyUp={(e) => {this.props.show(e.target.value)}} />
            </div>
        );
    }

}

export default ClassComponent;