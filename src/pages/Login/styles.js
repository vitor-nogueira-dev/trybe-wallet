import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #201b2c;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='542' height='542' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23514869' stroke-width='3.8'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%2300FF88'%3E%3Ccircle cx='769' cy='229' r='7'/%3E%3Ccircle cx='539' cy='269' r='7'/%3E%3Ccircle cx='603' cy='493' r='7'/%3E%3Ccircle cx='731' cy='737' r='7'/%3E%3Ccircle cx='520' cy='660' r='7'/%3E%3Ccircle cx='309' cy='538' r='7'/%3E%3Ccircle cx='295' cy='764' r='7'/%3E%3Ccircle cx='40' cy='599' r='7'/%3E%3Ccircle cx='102' cy='382' r='7'/%3E%3Ccircle cx='127' cy='80' r='7'/%3E%3Ccircle cx='370' cy='105' r='7'/%3E%3Ccircle cx='578' cy='42' r='7'/%3E%3Ccircle cx='237' cy='261' r='7'/%3E%3Ccircle cx='390' cy='382' r='7'/%3E%3C/g%3E%3C/svg%3E");

  display: flex;
  justify-content: center;
  align-items: center;

  .login__left {
    width: 50vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .login__left > h1 {
    color: #77ffc0;
    font-size: 15px;
  }

  .login__left > img {
    width: 35vw;
  }

  .login__right {
    width: 50vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login__card {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 35px;
    background: #2f2841;
    border-radius: 20px;
    box-shadow: 0 10px 40px #00000056;
  }

  .login__card > h1 {
    color: #00ff88;
    font-weight: 800;
    margin: 0;
    font-size: 16px;
    text-transform: uppercase;
  }

  .login__textField {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px 0;
  }

  .login__textField > input {
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

  .login__textField > input::placeholder {
    color: #f0ffff94;
  }

  .login__btn {
    width: 100%;
    padding: 16px 0;
    margin: 25px;
    border: none;
    border-radius: 8px;
    outline: none;
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 18px;
    letter-spacing: 3px;
    color: #2b134b;
    background: #00ff88;
    cursor: pointer;
    box-shadow: 0 10px 40px -12px #00ff8052;
    opacity: 0.5;
  }

  .login__btn:enabled {
    opacity: 1;
  }
  .login__btn:hover {
    box-shadow: 0 10px 40px -12px #fff;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;

    .login__card {
      width: 80%;
    }

    .login__card > h1 {
      font-size: 12px;
    }

    .login__left {
      width: 100%;
      height: auto;
    }
    .login__right {
      width: 100%;
      height: auto;
    }
    .login__left > img {
      width: 50vw;
      padding-bottom: 20px;
    }
  }
`;
