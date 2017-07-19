import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from 'rc-pagination';
import '../css/page.css';

class App extends React.Component {
  state = {
    current: 3,
  };
  onChange = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });
  }
  render() {
     return <Pagination onChange={this.onChange} current={this.state.current} total={25} />;
  }
}

ReactDOM.render(<App />, document.getElementById('__react-content'));