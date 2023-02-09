import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestAPI, saveCoins, expenseEdited } from '../../redux/actions';
import { Container } from './styles';

const INITIAL_STATE = {
  id: 0,
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Lazer',
};

class WalletForm extends Component {
  state = {
    ...INITIAL_STATE,
    exchangeRates: {},
  };

  async componentDidMount() {
    const {
      dispatch,
    } = this.props;
    await dispatch(requestAPI());
  }

  componentDidUpdate() {
    const { isEdit, editExpense } = this.props; // falta testes
    const { id } = this.state;
    if (isEdit && id !== editExpense.id) {
      this.setState({ // falta testes
        id: editExpense.id,
        value: editExpense.value,
        description: editExpense.description,
        currency: editExpense.currency,
        method: editExpense.method,
        tag: editExpense.tag,
        exchangeRates: editExpense.exchangeRates,
      });
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSaveInfos = async () => {
    const { dispatch } = this.props; // falta testes até a 61

    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    const { id } = this.state;
    this.setState({
      exchangeRates: data,
    }, async () => {
      await dispatch(saveCoins(this.state));
      this.setState({
        id: id + 1,
        value: '',
        description: '',
      });
    });
  };

  handleEdited = () => {
    const { dispatch } = this.props; // falta testes
    dispatch(expenseEdited(this.state)); // falta testes
    this.setState({
      ...INITIAL_STATE,
    });
  };

  render() {
    const { currencies, isEdit } = this.props;
    const { value, currency, description, method, tag } = this.state;
    const editarDespesa = 'Editar despesa';
    const adicionarDespesa = 'Adicionar despesa';

    return (
      <div>
        <Container>
          <label htmlFor="value">
            <input
              type="text"
              name="value"
              id="value"
              data-testid="value-input"
              value={ value }
              onChange={ this.handleChange }
              placeholder="Valor despesa"
            />
          </label>
          <label htmlFor="description">
            <input
              type="text"
              name="description"
              id="description"
              data-testid="description-input"
              value={ description }
              onChange={ this.handleChange }
              placeholder="Descrição"
            />
          </label>
          <label htmlFor="moeda">
            <select
              name="currency"
              id="moeda"
              data-testid="currency-input"
              value={ currency }
              onChange={ this.handleChange }
            >
              {currencies
                .map((cur) => (
                  <option key={ cur }>{cur}</option>
                ))}
            </select>
          </label>
          <label htmlFor="method">
            <select
              name="method"
              id="method"
              data-testid="method-input"
              value={ method }
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            <select
              name="tag"
              id="tag"
              data-testid="tag-input"
              value={ tag }
              onChange={ this.handleChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button
            className='form__btn'
            data-testid="add-btn"
            type="button"
            onClick={ isEdit ? this.handleEdited : this.handleSaveInfos }
          >
            {isEdit ? `${editarDespesa}` : `${adicionarDespesa}`}
          </button>
        </Container>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.shape({
    map: PropTypes.func,
  }),
  dispatch: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  state,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  editExpense: state.wallet.editExpense,
  isEdit: state.wallet.isEdit,
});

export default connect(mapStateToProps)(WalletForm);
