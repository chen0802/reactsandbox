import React, {Component} from 'react'

/*
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>
    }

    return <p>The water would not boil. </p>
}

class Calculator extends Component{

    constructor(props) {
        super(props);
        this.state = {temperature: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({temperature: e.target.value});
    }
    render() {
        const temperature = this.state.temperature;

        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input
                    value={this.state.temperature} 
                    onChange={this.handleChange} />
                <BoilingVerdict
                    celsius={parseFloat(temperature)} />
            </fieldset>
        )
    }
}
*/

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>
    }

    return <p>The water would not boil. </p>
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Calculator extends Component{
    constructor(props) {
        super(props);
        this.state = {temperature: '', scale: 'c'};
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFehrenheitChange = this.handleFehrenheitChange.bind(this);
    }
    handleCelsiusChange(temperature) {
        this.setState({temperature, scale: 'c'});
    }
    handleFehrenheitChange(temperature) {
        this.setState({temperature, scale: 'f'});
    }
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f'? tryConvert(temperature, toCelsius): temperature;
        const fehrenheit = scale === 'c'? tryConvert(temperature, toFahrenheit): temperature;
        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput scale="f" temperature={fehrenheit} onTemperatureChange={this.handleFehrenheitChange}/>
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        )
    }
}

const scaleNames = {
 c: 'Celsius',
 f: 'Fehrenheit'   
}
class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.state = {temperature: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        //Before this.setState({temperature: e.target.value});
        this.props.onTemperatureChange(e.target.value);
    }
    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;

        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input
                    value={this.props.temperature} 
                    onChange={this.handleChange} />
            </fieldset>
        )
    }
}

export {Calculator}