import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import quotesData from './quotesData'

const quotesDataLength = quotesData.quotes.length + 1
// let quote = quotesData.quotes[Math.floor(Math.random() * quotesDataLength)]
// console.log(Math.random() * Math.floor(quotesDataLength))
// console.log(Math.floor(Math.random() * quotesDataLength))
// console.log(quote)

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
  constructor(props) {
    super(props)
    this.state = {
      quoteText: quotesData.quotes[Math.floor(Math.random() * quotesDataLength)].quote,
      quoteAuthor: quotesData.quotes[Math.floor(Math.random() * quotesDataLength)].author
    }
    this.getQuote = this.getQuote.bind(this)
  }

  getQuote() {
    // Get random quote and update the state.
    let quote = quotesData.quotes[Math.floor(Math.random() * quotesDataLength)]
    this.setState({
      quoteText: quote.quote,
      quoteAuthor: quote.author
    })
  }

  render() {
    return (
      <div>
        <h4
          id="text"
        >
          {this.state.quoteText}
        </h4>
        <h6
          id="author"
        >
          {this.state.quoteAuthor}
        </h6>
        <button
          className="btn btn-success"
          onClick={this.getQuote}
          id="new-quote"
          type="submit"
        >
          New Quote
        </button>
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
