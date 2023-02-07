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

  handleChangeEmail = ({ target }) => {
    this.setState({ email: target.value });
  };

  handleChangePassword = ({ target }) => {
    this.setState({ password: target.value });
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
    const magicNumber = 6;
    return (password.length < magicNumber || !this.validateEmail(email));
  };

  render() {
    return (
      <div>
        <h1>LOGIN TRYBE WALLET</h1>
        <form>
          <input
            type="email"
            placeholder="Email"
            data-testid="email-input"
            onChange={ this.handleChangeEmail }
          />
          <input
            type="text"
            placeholder="Senha"
            data-testid="password-input"
            onChange={ this.handleChangePassword }
          />
          <button
            type="button"
            onClick={ this.handleClick }
            disabled={ this.disabledButton() }
          >
            Entrar
          </button>
        </form>
      </div>
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
