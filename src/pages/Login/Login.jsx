import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionSaveEmail } from '../../redux/actions';

import { Container } from './styles';
import logo from '../../assets/curr.svg'

class Login extends Component {
  state = {
    email: '',
    password: '',
    isDisabled: true,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, () => {
      const { email, password } = this.state;
      const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\)?$/i;
      const five = 5;
      const validateEmail = regex.test(email);
      const validatePassword = password.length > five;

      if (validateEmail && validatePassword) {
        this.setState({ isDisabled: false });
      } else {
        this.setState({ isDisabled: true });
      }
    });
  };

  render() {
    const { dispatch, history } = this.props;
    const { isDisabled, email, password } = this.state;
    console.log(password);
    return (
      <Container>
        <div className='login__left'>
          <img src={logo} alt="logo" />
        </div>
        <div className='login__right'>
          <form className='login__card'>
            <h1>Faça login para acessar sua carteira</h1>
            <div className='login__textField'>
              <input
                onChange={this.handleChange}
                type="text"
                name="email"
                id="email"
                placeholder='E-mail'
                required
              />
            </div>
            <div className='login__textField'>
              <input
                minLength={6}
                onChange={this.handleChange}
                type="password"
                id="password"
                name="password"
                placeholder='Password'
                required
              />
            </div>
            <button
              type="button"
              disabled={isDisabled}
              className="login__btn"
              onClick={() => {
                dispatch(actionSaveEmail(email));
                history.push('/carteira');
              }}
            >
              Entrar
            </button>
          </form>
        </div>
      </Container>

    )
  }
}

Login.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default connect()(Login);
