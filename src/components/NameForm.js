import React, {Component} from 'react'

//controlled components
class NameForm extends Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value? e.target.value.toUpperCase(): ''});
    }

    handleSubmit(e) {
        console.log('submit clicked', this.state.value);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input value={this.state.value} onChange={this.handleChange}/>
                </div>

                <div>
                    <label>Name:</label>
                    <textarea value={this.state.value} onChange={this.handleChange}/>
                </div>

                <div>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        )
    }

}

export {NameForm}