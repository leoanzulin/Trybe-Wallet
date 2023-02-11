/* eslint-disable jsx-a11y/control-has-associated-label */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { addLoginInfos } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleClick = () => {
    const { email } = this.state;
    const { dispatch, history } = this.props;
    dispatch(addLoginInfos(email));
    history.push('/carteira');
  };

  validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  disabledButton = () => {
    const { password, email } = this.state;
    const minCharacters = 6;
    return (password.length < minCharacters || !this.validateEmail(email));
  };

  render() {
    return (
      <main>
        <h1>TRYBE WALLET</h1>
        <form>
          <input
            type="email"
            placeholder="Email"
            data-testid="email-input"
            name="email"
            onChange={ this.handleChange }
          />
          <input
            type="text"
            placeholder="Senha"
            data-testid="password-input"
            name="password"
            onChange={ this.handleChange }
          />
          <button
            type="button"
            onClick={ this.handleClick }
            disabled={ this.disabledButton() }
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
