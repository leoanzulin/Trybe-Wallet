import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestApi, requestApi2 } from '../redux/actions/walletActions';

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    id: 0,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(requestApi());
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleClick = () => {
    const { value, description, currency, method, tag, id } = this.state;
    const { dispatch } = this.props;
    dispatch(requestApi2({ value, description, currency, method, tag, id }));
    this.setState((prevState) => ({ ...prevState,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      id: prevState.id + 1,
    }));
  };

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <main>
        <h2>WalletForm</h2>
        <form>
          <input
            type="text"
            data-testid="value-input"
            placeholder="Valor"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
          <input
            type="text"
            data-testid="description-input"
            placeholder="Descrição"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
          <select
            data-testid="currency-input"
            value={ currency }
            onChange={ this.handleChange }
            name="currency"
          >
            {currencies.map((currencie) => (
              <option key={ currencie } value={ currencie }>{currencie}</option>
            ))}
          </select>
          <select
            data-testid="method-input"
            value={ method }
            onChange={ this.handleChange }
            name="method"
          >
            <option value="Dinheiro<">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
          <select
            data-testid="tag-input"
            value={ tag }
            onChange={ this.handleChange }
            name="tag"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
          <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
        </form>
      </main>
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
