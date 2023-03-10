import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../redux/actions/formActions';
import deleteIcon from '../img/delete.png';

class Table extends Component {
  render() {
    const { expenses, dispatch } = this.props;
    return (
      <section className="container-table">
        <table>
          <thead className="thead">
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th className="ultimo">Excluir</th>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{Number(expense.value).toFixed(2)}</td>
                <td>{expense.exchangeRates[expense.currency].name}</td>
                <td>
                  {Number(
                    expense.exchangeRates[expense.currency].ask,
                  )
                    .toFixed(2)}

                </td>
                <td>
                  {Number(
                    expense.value * expense.exchangeRates[expense.currency].ask,
                  )
                    .toFixed(2)}
                </td>
                <td>REAL</td>
                <td>
                  <button
                    type="button"
                    className="delete-btn"
                    onClick={ () => dispatch(deleteItem(expense.id)) }
                  >
                    <img src={ deleteIcon } alt="" />
                  </button>

                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </section>
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
