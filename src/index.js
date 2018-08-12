import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  // Fetch quotes if component loads.

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
