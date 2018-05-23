import React, {Component} from 'react'
/*
color button templates
http://fxexperience.com/2011/12/styling-fx-buttons-with-css/
*/
class ColorButton extends Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
      this.myRef = React.createRef();
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    render() {
      const children = this.props.children;
      return (
        <div class="btn-group mr-2 mb-2" role="group" aria-label={children}>
            <button type="button" data-toggle="button" aria-pressed="false" class="btn btn-secondary" onClick={this.handleClick}>
                {children}
            </button>
        </div>
      );
    }
}

export {ColorButton}