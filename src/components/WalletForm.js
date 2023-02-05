import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestApi } from '../redux/actions/walletActions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(requestApi());
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <h2>WalletForm</h2>
        <form>
          <input
            type="text"
            data-testid="value-input"
            onChange={ this.handleChangeEmail }
          />
          <input
            type="text"
            data-testid="description-input"
            onChange={ this.handleChangeEmail }
          />
          <select data-testid="currency-input">
            {currencies.map((currency) => (
              <option key={ currency } value={ currency }>{currency}</option>
            ))}
          </select>
          <select data-testid="method-input">
            <option value="Dinheiro<">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
          <select data-testid="tag-input">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </form>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (globalState) => ({
  currencies: globalState.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
