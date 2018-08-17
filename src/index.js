import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import quotes from './quotesData'


class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quotes: []
    }
  }

  render() {
    return (
      <QuoteBox />
    )
  }
}

class QuoteBox extends React.Component {
  render() {
    return (
      <div id="quote-box">
        <Quotes />
      </div>
    )
  }
}

class Quotes extends React.Component {
  render() {
    return (
      <div>
        <h4 id="text">dhjhkj</h4>
        <h6 id="author">rtdf</h6>
        <button className="btn btn-success" id="new-quote" type="submit">New Quote</button>
        <ShareQuote />
      </div>
    )
  }
}

class ShareQuote extends React.Component {
  render() {
    return (
      <div>
        <a id="tweet-quote"></a>
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
