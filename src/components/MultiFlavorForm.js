import React, {Component} from 'react'

class MultiFlavorForm extends Component {

    constructor(props) {
        super(props);

        this.state = {value: ['coconut', 'lime']};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const newValue = [];
        for (let i = 0; i < e.target.options.length; ++i) {
            if (e.target.options[i].selected) {
              newValue.push(e.target.options[i].value);
          }
        }
          this.setState({ hasFocus: true, value: newValue });
    }

    handleSubmit(e) {
        e.preventDefault();
        alert("Your favorite flavor is " + this.state.value);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite La Croix flavor:
                    <select multiple={true} value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }

}

export {MultiFlavorForm}