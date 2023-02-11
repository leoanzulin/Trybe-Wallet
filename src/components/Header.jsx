import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  totalExpenses = (expenses) => {
    let currValue = 0;
    expenses.forEach((expense) => {
      currValue += expense.value * expense.exchangeRates[expense.currency].ask;
    });
    return currValue.toFixed(2);
  };

  render() {
    const { email, expenses } = this.props;
    const currency = 'BRL';
    return (
      <header>
        <h2 data-testid="email-field">
          {email}
        </h2>
        <h2 data-testid="total-field">
          { this.totalExpenses(expenses) }
        </h2>
        <h2 data-testid="header-currency-field">
          Câmbio utilizado:
          {' '}
          {currency}
        </h2>
      </header>
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
