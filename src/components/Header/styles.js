import styled from "styled-components";

export const Container = styled.div`
  height: 300px;
  background-color: #201b2c;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='542' height='542' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23514869' stroke-width='3.8'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%2300FF88'%3E%3Ccircle cx='769' cy='229' r='7'/%3E%3Ccircle cx='539' cy='269' r='7'/%3E%3Ccircle cx='603' cy='493' r='7'/%3E%3Ccircle cx='731' cy='737' r='7'/%3E%3Ccircle cx='520' cy='660' r='7'/%3E%3Ccircle cx='309' cy='538' r='7'/%3E%3Ccircle cx='295' cy='764' r='7'/%3E%3Ccircle cx='40' cy='599' r='7'/%3E%3Ccircle cx='102' cy='382' r='7'/%3E%3Ccircle cx='127' cy='80' r='7'/%3E%3Ccircle cx='370' cy='105' r='7'/%3E%3Ccircle cx='578' cy='42' r='7'/%3E%3Ccircle cx='237' cy='261' r='7'/%3E%3Ccircle cx='390' cy='382' r='7'/%3E%3C/g%3E%3C/svg%3E");

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;

  .header__logo {
    width: 320px;
    margin-top: 80px;
  }

  .header__content {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;

    outline: none;
    box-sizing: border-box;

    padding: 15px;
    font-size: 20px;

    color: #f0ffffde;
    background: rgba(81, 72, 105, 0.75);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    img {
      margin: 5px;
    }
    p {
      margin: 0;
    }
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: space-between;

    .header__content {
      width: 400px;
      flex-direction: row;
      padding: 10px;
      font-size: 16px;
      border-radius: 0 0 10px 10px;
    }
    .header__logo {
      width: 330px;
      margin-top: 0px;
    }
  }
`;
