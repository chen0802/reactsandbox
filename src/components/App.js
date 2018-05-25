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
        this.state = {
                warning: '',
                language: 'zh-CN',
                selectedConditions: []
            };
        this.handleToggerClick = this.handleToggerClick.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleToggerClick() {
        if (this.state.warning) {
            this.setState({warning: ''})
        } else {
            //set sample warning
            this.setState({warning: 'DB Update Failed on Forgien Key Violation'})
        }
    }

    handleButtonClick(e) {
        let selectedConditions;
        if (this.state.selectedConditions.indexOf(e.target.value) > -1) {
            selectedConditions = this.state.selectedConditions.filter(condition => condition !== e.target.value)
        } else {
            selectedConditions = [...this.state.selectedConditions, e.target.value];
        }

        this.setState({
                selectedConditions
        });
    }

    render() {
        const CommonConditions = [
            {
                index: 1,
                display: 'Common cold and influenza',
                display1: '感冒',
                value: 'Common cold and influenza'
            },   
            {
                index: 2,
                display: 'Cough',
                display1: '咳嗽',
                value: 'Cough'
            },
            {
                index: 3,
                display: 'Jaundice',
                display1: '黄疸',
                value: 'Jaundice'
            },
            {
                index: 4,
                display: 'Dizziness and Vertigo',
                display1: '眩晕',
                value: 'Dizziness and Vertigo'
            },
            {
                index: 5,
                display: 'Asthma',
                display1: '哮喘',
                value: 'Asthma'
            },
            {
                index: 6,
                display: 'Epigastric Pain',
                display1: '胃脘痛',
                value: 'Epigastric Pain'
            },
            {
                index: 7,
                display: 'Acid reflux',
                display1: '反酸',
                value: 'Acid reflux'
            },
            {
                index: 8,
                display: 'Gastric Upset',
                display1: '胃部不适',
                value: 'Gastric Upset'
            },
            {
                index: 9,
                display: 'Abdominal pain',
                display1: '腹痛',
                value: 'Abdominal pain'
            },
            {
                index: 10,
                display: 'Indigestion for Children',
                display1: '疳积',
                value: 'Gan Ji (Indigestion for Children)'
            },
            {
                index: 11,
                display: 'Tiredness',
                display1: '疲倦',
                value: 'Tiredness'
            },
            {
                index: 12,
                display: 'Hermorrhoid',
                display1: '痔疮',
                value: 'Hermorrhoid'
            },
            {
                index: 13,
                display: 'Diarrhoea',
                display1: '腹泻',
                value: 'Diarrhoea'
            },
            {
                index: 14,
                display: 'Constipation',
                display1: '便秘',
                value: 'Constipation'
            },
            {
                index: 15,
                display: 'Diabetes',
                display1: '糖尿病',
                value: 'Diabetes'
            },
            {
                index: 16,
                display: 'Painful Obstruction Syndrome (Bi Zheng)',
                display1: '痹症',
                value: 'Painful Obstruction Syndrome (Bi Zheng)'
            },
            {
                index: 17,
                display: 'Facial Pain',
                display1: '面痛',
                value: 'Facial Pain'
            },
            {
                index: 18,
                display: 'Lower Back Pain',
                display1: '腰痛',
                value: 'Lower Back Pain'
            },
            {
                index: 19,
                display: 'Neck Pain',
                display1: '颈痛',
                value: 'Neck Pain'
            },
            {
                index: 20,
                display: "Mian Tan, Facial Paralysis, Bell's Palsy",
                display1: '面瘫',
                value: "Mian Tan, Facial Paralysis, Bell's Palsy"
            },
            {
                index: 21,
                display: 'Headache',
                display1: '头痛',
                value: 'Headache'
            },
            {
                index: 22,
                display: 'Wind Stroke',
                display1: '中风',
                value: 'Wind Stroke'
            },
            {
                index: 23,
                display: 'Atrophy Syndrome',
                display1: '萎缩综合症',
                value: 'Atrophy Syndrome'
            },
            {
                index: 24,
                display: 'Sprains',
                display1: '扭伤',
                value: 'Sprains'
            },
            {
                index: 25,
                display: 'Sudden Deafness',
                display1: '突发性耳聋',
                value: 'Sudden Deafness'
            },
            {
                index: 26,
                display: 'Er Ming, Ringing in the Ear/Tinnitus',
                display1: '耳鸣',
                value: 'Er Ming, Ringing in the Ear/Tinnitus'
            },
            {
                index: 27,
                display: 'Ear Pain',
                display1: '耳痛',
                value: 'Ear Pain'
            },
            {
                index: 28,
                display: 'Myopia',
                display1: '近视',
                value: 'Myopia'
            },
            {
                index: 29,
                display: 'Bi Yan, Sinus Infection',
                display1: '鼻炎',
                value: 'Bi Yan, Sinus Infection'
            },
            {
                index: 30,
                display: 'Throat Pain',
                display1: '喉咙痛',
                value: 'Throat Pain'
            },
            {
                index: 31,
                display: 'Eczema',
                display1: '湿疹',
                value: 'Eczema'
            },
            {
                index: 32,
                display: 'Acne',
                display1: '痤疮',
                value: 'Acne'
            },
            {
                index: 33,
                display: 'Shingles',
                display1: '带状疱疹',
                value: 'Shingles'
            },
            {
                index: 34,
                display: 'Impotence',
                display1: '阳痿',
                value: 'Impotence'
            },
            {
                index: 35,
                display: 'Infertility',
                display1: '不孕不育',
                value: 'Infertility'
            },
            {
                index: 36,
                display: 'Premenstruel Syndromes',
                display1: '经前期综合征',
                value: 'Premenstruel Syndromes'
            },
            {
                index: 37,
                display: 'Dysmenorrhoea',
                display1: '痛经',
                value: 'Dysmenorrhoea'
            },
            {
                index: 38,
                display: 'Vaginal Itchiness',
                display1: '阴道痒',
                value: 'Vaginal Itchiness'
            },
            {
                index: 39,
                display: 'Irregular Menstruation',
                display1: '月经不调',
                value: 'Irregular Menstruation'
            },
            {
                index: 40,
                display: 'Morning Sickness',
                display1: '孕吐',
                value: 'Morning Sickness'
            },
            {
                index: 41,
                display: 'Menopause',
                display1: '更年期',
                value: 'Menopause'
            },
            {
                index: 42,
                display: 'Amenorrhea',
                display1: '闭经',
                value: 'Amenorrhea'
            },
            {
                index: 43,
                display: 'Abnormal Uterus Bleeding',
                display1: '异常子宫出血',
                value: 'Abnormal Uterus Bleeding'
            },
            {
                index: 44,
                display: 'Depression',
                display1: '抑郁症',
                value: 'Depression'
            },
            {
                index: 45,
                display: 'Insomnia',
                display1: '失眠',
                value: 'Insomnia'
            },
            {
                index: 46,
                display: 'Hypochondrial Pain',
                display1: '胁痛',
                value: 'Hypochondrial Pain'
            },
            {
                index: 47,
                display: 'Vomiting',
                display1: '呕吐',
                value: 'Vomiting'
            },
            {
                index: 48,
                display: 'Palpitation',
                display1: '心慌',
                value: 'Palpitation'
            },
            {
                index: 49,
                display: 'Edema',
                display1: '水肿',
                value: 'Edema'
            },
            {
                index: 50,
                display: 'Urinary Retention',
                display1: '尿潴留',
                value: 'Urinary Retention'
            },
            {
                index: 51,
                display: 'Syncope',
                display1: '晕厥',
                value: 'Syncope'
            },
            {
                index: 52,
                display: 'Toothache',
                display1: '牙痛',
                value: 'Toothache'
            }
        ]

        const commonConditionButtons = CommonConditions.map(cond => {
            if (this.state.language === 'en') {
                return <ColorButton key={cond.index} value={cond.value} clickHandler={this.handleButtonClick}> {cond.display} </ColorButton>
            } else if (this.state.language === 'zh-CN') {
                return <ColorButton key={cond.index} value={cond.value} clickHandler={this.handleButtonClick}> {cond.display1} </ColorButton>
            }
            return null;
        });

        return (
            <div>
                <Greeting  name='please select common conditions'/>
                <br />
                <div>
                    {commonConditionButtons}
                </div>
                <h3>{this.state.selectedConditions.join()}</h3>
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