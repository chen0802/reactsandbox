import React from 'react'
import { Clock, Welcome, Toggle } from './Clock'
import { BitcoinPrice } from './BitcoinPrice'
import LoginControl from './LoginControl'
import { WarningBanner } from './WarningBanner'
import { NameForm } from './NameForm'
import { FlavorForm } from  './FlavorForm'
import { MultiFlavorForm } from  './MultiFlavorForm'
import { Calculator } from './Temperature';
import { WelcomeDialog } from './FancyBorder';
import { SplitApp } from './SplitPanel';
import { Greeting, MyComponnt } from './PropTypesCheck';
import { CustomTextInput } from './CustomTextInput';
import { AutoFocusTextInput } from './AutoFocusTextInput';

class App extends React.Component {
    hideStyle = {
        display: 'none'
    }

    constructor(props) {
        super(props);
        this.state = {warning: ''};
        this.handleToggerClick = this.handleToggerClick.bind(this);
    }

    handleToggerClick() {
        if (this.state.warning) {
            this.setState({warning: ''})
        } else {
            //set sample warning
            this.setState({warning: 'DB Update Failed on Forgien Key Violation'})
        }
    }

    render() {
    
        return (
            <React.Fragment>
                <WarningBanner warn={this.state.warning} />                 
                <h2 className='text-left'> Bitcoin Price &#36; &pound; &euro;  <Clock increment="1"/> </h2>
                <BitcoinPrice />

                <Welcome name = "Add Bitcoin into your portifilo"  />
            </React.Fragment>
        )
    }

    renderold() {

        return (
            <div>
                <WarningBanner warn={this.state.warning} />                 
                <h2 className='text-center'> Bitcoin Price &#36; &pound; &euro;  <Clock increment="1"/> </h2>
                <BitcoinPrice />

                <Welcome name = "Add Bitcoin into your portifilo"  />
                <Toggle />
                <LoginControl />
                <button onClick={this.handleToggerClick}> 
                    Toggle warning
                </button>
                <NameForm />
                <FlavorForm />
                <MultiFlavorForm />
                <Calculator />
                <WelcomeDialog />
                <SplitApp />

                <Greeting  name='1'/>
                <Greeting  />
                <MyComponnt>
                    <a>The first link </a>
                </MyComponnt>

                <CustomTextInput />
                <AutoFocusTextInput/>
            </div>
        ) 
    }
}

export default App