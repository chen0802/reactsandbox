import React, {Component} from 'react'
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

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHome from '@fortawesome/fontawesome-free-solid/faHome';


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
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/"><FontAwesomeIcon icon={faHome}/></Link>
                        </li>

                        <li>
                            <Link to="/bitcoin"> Bitcoin </Link>
                        </li>
                        
                        <li>
                            <Link to="/ethereum"> Ethereum </Link>
                        </li>
                    </ul>

                    <Route exact path="/" component={Home} /> 
                    <Route exact path="/bitcoin" component={Bitcoin} />
                    <Route exact path="/ethereum" component={Ethereum} />
                </div>
            </Router>
        )
    };
   

    renderWelcome() {
        return (
            <Welcome  />
        )
    }

    render1() {
    
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
/*
Ethereum = () => (
    <div>
        <h2> Home </h2>
    </div>
)
*/
const Home = () => (
    <div>
        <h2> Home </h2>
    </div>
);

const Bitcoin = () => (
    <BitcoinPrice />    
)
class Ethereum extends Component {
    render() {
        return <div> Ethereum </div>
    }
}
export default App