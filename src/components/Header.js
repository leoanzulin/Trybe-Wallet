import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    const despesas = 0;
    const moeda = 'BRL';
    return (
      <div>
        <h2 data-testid="email-field">
          {email}
        </h2>
        <h2 data-testid="total-field">
          despesas totais:
          {' '}
          {despesas}
        </h2>
        <h2 data-testid="header-currency-field">
          Câmbio utilizado:
          {' '}
          {moeda}
        </h2>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (globalState) => ({
  email: globalState.user.email,
});

export default connect(mapStateToProps)(Header);
