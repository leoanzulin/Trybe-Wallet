import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../img/logo.png';
import coin from '../img/coin.png';
import user from '../img/user.png';

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
        <img src={ logo } alt="logo-header" className="logo-header" />
        <div className="totalExpenses">
          <img src={ coin } alt="moedas" />
          <h2>
            Total de despesas:
          </h2>
          <h2>
            { this.totalExpenses(expenses) }
          </h2>
          <h2>
            {currency}
          </h2>
        </div>
        <div className="user">
          <img src={ user } alt="user-logo" />
          <p>
            {email}
          </p>
        </div>
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
