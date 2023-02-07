import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../redux/actions/formActions';

class Table extends Component {
  render() {
    const { expenses, dispatch } = this.props;
    return (
      <div>
        <table>
          <thead>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </thead>
          <tbody>
            {expenses.map((expencie) => (
              <tr key={ expencie.id }>
                <td>{expencie.description}</td>
                <td>{expencie.tag}</td>
                <td>{expencie.method}</td>
                <td>{Number(expencie.value).toFixed(2)}</td>
                <td>{expencie.exchangeRates[expencie.currency].name}</td>
                <td>
                  {Number(
                    expencie.exchangeRates[expencie.currency].ask,
                  )
                    .toFixed(2)}

                </td>
                <td>
                  {Number(
                    expencie.value * expencie.exchangeRates[expencie.currency].ask,
                  )
                    .toFixed(2)}
                </td>
                <td>REAL</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => dispatch(deleteItem(expencie.id)) }
                  >
                    delete
                  </button>

                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    );
  }
}

Table.propTypes = {
  dispatch: PropTypes.func.isRequired,
  expenses: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (globalState) => ({
  expenses: globalState.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
