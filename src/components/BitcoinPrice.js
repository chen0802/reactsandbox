import React, {Component} from 'react'
import axios from 'axios'
import {listItems, NumberList} from './ListNumber'

class BitcoinPrice extends Component {

  componentDidMount() {
    let bitcoinApiUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    axios.get(bitcoinApiUrl).then(res=> {
      const bitcoin = res.data;
      this.setState({bitcoin});
    });
  }
  //Restful API to get Bitcoin price https://api.coindesk.com/v1/bpi/currentprice.json
    constructor(props) {
        super(props);
        this.state = {bitcoin: []}
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

  render() {
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
    }
    )
  }
}


export { BitcoinPrice }