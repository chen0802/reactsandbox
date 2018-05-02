import React, {Component} from 'react';

/*
class CustomTextInput extends Component {
    constructor(props) {
        super(props);
        //create a ref to store the textInput DOM element
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        this.textInput.current.focus();
    }

    render() {
        return (
            <div>
                <input 
                    type="text"
                    ref={this.textInput}/>

                <input
                    type="button"
                    value = "Focus the text input"
                    onClick={this.focusTextInput} />
            </div>
        )
    }
}
*/

//ref callback
class CustomTextInput extends React.Component {
    constructor(props) {
      super(props);
  
      this.textInput = null;
  
      this.setTextInputRef = element => {
        this.textInput = element;
      };
  
      this.focusTextInput = () => {
        // Focus the text input using the raw DOM API
        if (this.textInput) this.textInput.focus();
      };
    }
  
    componentDidMount() {
      // autofocus the input on mount
      this.focusTextInput();
    }
  
    render() {
      // Use the `ref` callback to store a reference to the text input DOM
      // element in an instance field (for example, this.textInput).
      return (
        <div>
          <input
            type="text"
            ref={this.setTextInputRef}
          />
          <input
            type="button"
            value="Focus the text input"
            onClick={this.focusTextInput}
          />
        </div>
      );
    }
  }

export {CustomTextInput}