import React, {Component} from 'react';
import PropTypes from 'prop-types';

//Static type checkers for small code bases
class Greeting extends Component {
    //the second way to use propTypes static
    //babel-plugin-transform-class-properties using static variable
    static defaultProps = {
        name:"Stranger"
    }
    render() {
        return (
            <h1> Hello, {this.props.name}</h1>
        )
    }
}

//the first way to use propTypes
Greeting.propTypes = {
    name: PropTypes.string
}

class MyComponnt extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    render() {
        const children = this.props.children;
        return (
            <div ref={this.myRef}>
                {children}
            </div>
        )
    }
}

MyComponnt.propTypes = {
    children: PropTypes.element.isRequired
}
export {Greeting, MyComponnt}