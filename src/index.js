import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import quotesData from './quotesData'


const quotesDataLength = quotesData.quotes.length

class Main extends React.Component {
  render() {
    return (
      <QuoteBox />
    )
  }
}

class QuoteBox extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div id="quote-box">
            <Quotes />
          </div>
        </div>
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
      <div style= {{padding: 20}}>
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
        <div className="row d-flex align-items-baseline justify-content-between">
          <button
            className="btn btn-success"
            onClick={this.getQuote}
            id="new-quote"
            type="submit"
          >
          New Quote
          </button>
          <a 
            className="twitter-share-button"
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${this.state.quoteText} - ${this.state.quoteAuthor}`}>
            Tweet
          </a>
        </div>
        
      </div>
    )
  }
}

/*class ShareQuote extends React.Component {
  render() {
    return (
      <div>
        <a 
          className="twitter-share-button"
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${Quotes.getQuote}`}>
          Tweet
        </a>
      </div>
    )
  }
}*/

ReactDOM.render(<Main />, document.getElementById('root'));
