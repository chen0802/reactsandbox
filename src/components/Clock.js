import React, {Component} from 'react'

/*
function CTime(props) {
    return (
        <div>
            <h1> Hello </h1>
            <h2> It is {new Date().toLocaleTimeString()}. </h2>
        </div>
    )
}
*/

//arrow function format
class Welcome extends Component {
    constructor(props) {
      console.log("constructor");
      super(props);
      this.state = {isToggleOn: true};
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    componentWillMount() {
        console.log("componentWillMount");
    }
    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps');
        return null;
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps - Legancy function to update state based on new props value. Version 16 recommend to use getDerivedStateFromProps');
    }
    render() {
        console.log("render");
        return <h3>Hello</h3>;
    }
    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate');
        return null;
    }
}

/* regular function format
function Welcome(props) {
    return <h3> Hello, {props.name} </h3>;
}
*/


/*
const Clock_Old = function() {
    return  (
        <div>
            <Welcome name = "Sara" />
            <Welcome name = "Cahal" />

            <CTime />
            <h1> Hello Clock </h1>
            <h2> It is {new Date().toLocaleTimeString()}. </h2>
        </div>
    );
}    
*/
class GreetingAMPM extends Component {
    //pass property to child components
    render() {
        return <a>{ parseInt(this.props.Hours, 10) < 12 ? "Good Morning": "Good Afternoon"}</a>
    }
}

class Toggle extends Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }


class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            counter: 1,
            increment: 1 
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }
    componentWillMount() {
        clearInterval(this.timerID);
    }
    tick() {
        //this.setState({date: new Date()});
        this.setState(function(prevState, props) {
            return {
               date: new Date(),
               counter: prevState.counter + Number(props.increment)
        }; })
    }
    render() {
        return <a>{this.state.date.toLocaleTimeString()}</a>
    }
} 

export {Clock, Welcome, Toggle, GreetingAMPM} 