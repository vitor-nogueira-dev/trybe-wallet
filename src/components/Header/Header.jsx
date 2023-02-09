import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from './styles';

import iconUser from '../../assets/user.png'
import iconMoedas from '../../assets/iconMoedas.png'
import logo from '../../assets/person.svg'

class Header extends Component {

  render() {
    const { expenses, user } = this.props;

    const sum = expenses.reduce((sum, { exchangeRates, currency, value }) => {
      const selectedCurrency = Object
        .entries(exchangeRates).find(([name]) => name === currency);
      if (!selectedCurrency) {
        return sum;
      }

      const [, { ask }] = selectedCurrency;
      return sum + Number(value) * Number(ask);
    }, 0);
    return (
      <Container>
        <div className='header__content'>
          <p data-testid="email-field"><img src={iconUser} alt="icon user" /> {user}</p>
          <p data-testid="total-field"><img src={iconMoedas} alt="icon user" />{`R$ ${sum.toFixed(2)} BRL` || 0.00}</p>
        </div>
        <img src={logo} alt="logo" className='header__logo' />
      </Container>
    );
  }
}

Header.propTypes = {
  user: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  user: state.user.email,
  expenses: state.wallet.expenses,
  // exchangeRates: state.wallet.exchangeRates,
});

export default connect(mapStateToProps)(Header);
