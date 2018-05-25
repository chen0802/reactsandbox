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
      const children = this.props.children,
            index = this.props.index,
            value = this.props.value,
            clickHandler = this.props.clickHandler;
      return (
        <div className="btn-group ml-1 mr-1 mb-2" role="group" aria-label={index}>
            <button type="button" data-toggle="button" aria-pressed="false" className="btn btn-secondary" value={value} onClick={clickHandler}>
                {children}
            </button>
        </div>
      );
    }
}

export {ColorButton}