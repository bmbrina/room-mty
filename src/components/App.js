import React from 'react';
import PropTypes from 'prop-types';
import Header from '../containers/Header';
import Routes from '../routes';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Routes />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
