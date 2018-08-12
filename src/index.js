import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Quote extends React.Component {
  constructor(props) {
    super(props)
  }
}

class App extends React.Component {
  render() {
    return (
      <div id="quote-box">
        <h4 id="text"></h4>
        <h6 id="author"></h6>
        <a href="#" id="new-quote"></a>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
