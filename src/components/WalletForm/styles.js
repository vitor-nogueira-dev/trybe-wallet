import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  padding: 20px;
  background-color: rgb(240, 240, 240);

  background-color: #201b2c;

  .form__btn {
    padding: 13px;
    border: none;
    border-radius: 8px;
    outline: none;
    text-transform: uppercase;
    font-weight: bolder;
    color: #2b134b;
    background: #00ff88;
    cursor: pointer;
    box-shadow: 0 10px 40px -12px #00ff8052;
    opacity: 0.7;
  }

  .form__btn:hover {
    opacity: 1;
    box-shadow: 0 10px 30px -12px #fff;
    transition: ease-in-out 0.1s;
  }

  input {
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 15px;
    background: #514869;
    color: #f0ffffde;
    font-size: 12pt;
    box-shadow: 0 10px 40px #00000056;
    outline: none;
    box-sizing: border-box;
  }

  select {
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 15px;
    background: #514869;
    color: #f0ffffde;
    font-size: 12pt;
    box-shadow: 0 10px 40px #00000056;
    outline: none;
    box-sizing: border-box;
  }

  input::placeholder {
    color: #f0ffffde;
  }

  @media only screen and (max-width: 1000px) {
    input {
      width: 30vw;
      margin: 10px;
    }
    .form__btn {
      padding: 7px 14px;
      margin: 10px;
    }

    table > thead > th:nth-child(4) {
      color: red;
    }
  }
  @media only screen and (max-width: 600px) {
    input {
      width: 30vw;
      margin: 10px;
    }

    .form__btn {
      padding: 7px 14px;
      margin-top: 14px;
    }

    table > thead > th:nth-child(4) {
      color: red;
    }

    input,
    select {
      padding: 8px;
      width: 110px;
    }

    #description,
    #value {
      width: 38vw;
    }
  }
`;
