import React, {Component} from 'react'
import { ColorButton} from './ColorButton'
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
        const CommonConditions = [
            {
                index: 1,
                display: 'Common cold and influenza',
                value: 'Common cold and influenza'
            },   
            {
                index: 2,
                display: 'Cough'
            },
            {
                index: 3,
                display: 'Jaundice'
            },
            {
                index: 4,
                display: 'Dizziness and Vertigo'
            },
            {
                index: 5,
                display: 'Asthma'
            },
            {
                index: 6,
                display: 'Epigastric Pain'
            },
            {
                index: 7,
                display: 'Acid reflux'
            },
            {
                index: 8,
                display: 'Gastric Upset'
            },
            {
                index: 9,
                display: 'Abdominal pain'
            },
            {
                index: 10,
                display: 'Gan Ji (Indigestion for Children)'
            },
            {
                index: 11,
                display: 'Tiredness'
            },
            {
                index: 12,
                display: 'Hermorrhoid'
            },
            {
                index: 13,
                display: 'Diarrhoea'
            },
            {
                index: 14,
                display: 'Constipation'
            },
            {
                index: 15,
                display: 'Diabetes'
            },
            {
                index: 16,
                display: 'Painful Obstruction Syndrome (Bi Zheng)'
            },
            {
                index: 17,
                display: 'Facial Pain'
            },
            {
                index: 18,
                display: 'Lower Back Pain'
            },
            {
                index: 19,
                display: 'Neck Pain'
            },
            {
                index: 20,
                display: "Mian Tan, Facial Paralysis, Bell's Palsy"
            },
            {
                index: 21,
                display: 'Headache'
            },
            {
                index: 22,
                display: 'Wind Stroke'
            },
            {
                index: 23,
                display: 'Atrophy Syndrome'
            },
            {
                index: 24,
                display: 'Sprains'
            },
            {
                index: 25,
                display: 'Sudden Deafness'
            },
            {
                index: 26,
                display: 'Er Ming, Ringing in the Ear/Tinnitus'
            },
            {
                index: 27,
                display: 'Ear Pain'
            },
            {
                index: 28,
                display: 'Myopia'
            },
            {
                index: 29,
                display: 'Bi Yan, Sinus Infection'
            },
            {
                index: 30,
                display: 'Throat Pain'
            },
            {
                index: 31,
                display: 'Eczema'
            },
            {
                index: 32,
                display: 'Acne'
            },
            {
                index: 33,
                display: 'Shingles'
            },
            {
                index: 34,
                display: 'Impotence'
            },
            {
                index: 35,
                display: 'Infertility'
            },
            {
                index: 36,
                display: 'Premenstruel Syndromes'
            },
            {
                index: 37,
                display: 'Dysmenorrhoea'
            },
            {
                index: 38,
                display: 'Vaginal Itchiness'
            },
            {
                index: 39,
                display: 'Irregular Menstruation'
            },
            {
                index: 40,
                display: 'Morning Sickness'
            },
            {
                index: 41,
                display: 'Menopause'
            },
            {
                index: 42,
                display: 'Amenorrhea'
            },
            {
                index: 43,
                display: 'Abnormal Uterus Bleeding'
            },
            {
                index: 44,
                display: 'Depression'
            },
            {
                index: 45,
                display: 'Insomnia'
            },
            {
                index: 46,
                display: 'Hypochondrial Pain'
            },
            {
                index: 47,
                display: 'Vomiting'
            },
            {
                index: 48,
                display: 'Palpitation'
            },
            {
                index: 49,
                display: 'Edema'
            },
            {
                index: 50,
                display: 'Urinary Retention'
            },
            {
                index: 51,
                display: 'Syncope'
            },
            {
                index: 52,
                display: 'Toothache'
            }
        ]

        const commonConditionButtons = CommonConditions.map(cond => {
            return <ColorButton> {cond.display} </ColorButton>
        });

        return (
            <div>
                <Greeting  name='please select common conditions'/>
                <br />
                <div>
                    {commonConditionButtons}
                </div>
            </div>
        )
    }

    rendermenu() {
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