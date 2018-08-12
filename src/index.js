import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Quote extends React.Component {
  constructor(props) {
    super(props)
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="quote-box">
        <h4 id="text"></h4>
        <h6 id="author"></h6>
        <button class="btn btn-success" id="new-quote" type="submit">New Quote</button>
        <a id="tweet-quote"></a>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
