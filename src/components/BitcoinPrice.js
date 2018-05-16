import React, {Component} from 'react'
import axios from 'axios'
import {listItems, NumberList} from './ListNumber'

class BitcoinPrice extends Component {

  bitcoinApiUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json'
  getBitcoinPrice() {
    axios.get(this.bitcoinApiUrl).then(res => {
      const bitcoin = res.data;
      this.setState({
        bitcoin
      });
    });
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.getBitcoinPrice();
    let timeoutInterval = 300000; //5 mins
    this.timerID = setInterval(() => this.getBitcoinPrice(), timeoutInterval);
  }
  componentWillMount() {
    console.log("componentWillMount");
    clearInterval(this.timerID);
  }

  //Restful API to get Bitcoin price https://api.coindesk.com/v1/bpi/currentprice.json
  //Other APIs
  //https://www.cryptocompare.com/api#
  constructor(props) {
    super(props);
    this.state = {
      bitcoin: []
    }
    /*
    this.state = {
      "time": {
        "updated": "Apr 28, 2018 02:46:00 UTC",
        "updatedISO": "2018-04-28T02:46:00+00:00",
        "updateduk": "Apr 28, 2018 at 03:46 BST"
      },
      "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
      "chartName": "Bitcoin",
      "bpi": {
        "USD": {
          "code": "USD",
          "symbol": "&#36;",
          "rate": "9,120.6025",
          "description": "United States Dollar",
          "rate_float": 9120.6025
        },
        "GBP": {
          "code": "GBP",
          "symbol": "&pound;",
          "rate": "6,617.7724",
          "description": "British Pound Sterling",
          "rate_float": 6617.7724
        },
        "EUR": {
          "code": "EUR",
          "symbol": "&euro;",
          "rate": "7,508.8096",
          "description": "Euro",
          "rate_float": 7508.8096
        }
      }
    };*/
  }
  render() {
    const showList = false;

    return ( 
      <div>
      <table className="table table-hover table-responsive">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Symbol</th>
            <th scope="col">Currency</th>
            <th scope="col">Description</th>
            <th scope="col">Rate</th>
            {showRate  &&
            <th scope="col">Rate Float</th>
          }
          </tr>
        </thead>
        <tbody>
          <Bitcoin data={this.state.bitcoin.bpi} />
        </tbody>
    </table>
        {showList ? (
        <div>
          <ul>100 Units Price:{listItems}</ul>
          <NumberList numbers={numbers} />
        </div>
        ): (<div></div>) }
    </div>    
    )
  }
}

const numbers = [1, 2, 3, 4, 5];
const showRate = false;

class Bitcoin extends Component {
  constructor(props) {
    console.log('Constructor Start');
    super(props);
    this.state = {
      price: ''
    };
    console.log('Constructor End');
  }
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
    return null;
  }
  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps');
    return null;
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps - Legancy function to update state based on new props value. Version 16 recommend to use getDerivedStateFromProps');
  }


  /* Legancy event handlers begin */
  /* 17.0: Remove componentWillMount, componentWillReceiveProps, and componentWillUpdate . 
    (Only the new “UNSAFE_” lifecycle names will work from this point forward.) */
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate - DONOT use async mode since might be called multiple times, no guarantee');
    /* Example
    if (
      this.state.someStatefulValue !==
      nextState.someStatefulValue
    ) {
      nextProps.onChange(nextState.someStatefulValue);
    }    
    */
  } 
  componentWillMount() {
    console.log('componentWillMount - Initialize state or fetch external data');
  }
  componentWillUnmount() {
    console.log('componentWillunmount - Cancel fetch request');
  }
  /* Legancy event handlers end */

  componentDidMount() {
    console.log('componentDidMount');
  }


  componentDidUpdate() {
    console.log('componentDidUpdate - call async here to update or get new data');
    /**
     * Like componentWillUpdate, componentWillReceiveProps might get called multiple times for a single update. 
     * For this reason it is important to avoid putting side effects in this method. Instead, componentDidUpdate 
     * should be used since it is guaranteed to be invoked only once per update:
     */

  }
  render() {
    console.log('render');
    const data = this.props.data;
    if (!data) return null;

    return Object.entries(data).map((key, index) => {
      const item = data[key[0]];
      //workaround #12712 to use dangerouslySetInnerHTML
      return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td dangerouslySetInnerHTML={{__html: item.symbol}}></td>
          <td>{item.code}</td>
          <td>{item.description}</td>
          <td>{item.rate}</td>
          {showRate &&
            <td>{item.rate_float}</td>
          }
        </tr>
      )
    })
  }
}
   
export { BitcoinPrice }