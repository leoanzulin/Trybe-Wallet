import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  despesas = (expenses) => {
    let atualValue = 0;
    expenses.forEach((expense) => {
      atualValue += expense.value * expense.exchangeRates[expense.currency].ask;
    });
    return atualValue.toFixed(2);
  };

  render() {
    const { email, expenses } = this.props;
    const moeda = 'BRL';
    return (
      <div>
        <h2 data-testid="email-field">
          {email}
        </h2>
        <h2 data-testid="total-field">
          { this.despesas(expenses) }
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
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,

};

const mapStateToProps = (globalState) => ({
  email: globalState.user.email,
  expenses: globalState.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
