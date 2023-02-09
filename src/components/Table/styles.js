import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  height: 500px;
  overflow: auto;
  flex-wrap: wrap;

  table {
    width: 100%;
    table-layout: fixed;
    min-width: 900px;
    border-collapse: collapse;
  }

  thead,
  th {
    position: sticky;
    top: 0;
    background-color: #514869;
    color: #8493a5;
    font-size: 15px;
    color: #00ff88;
    text-transform: uppercase;
    border-right: 1px solid #201b2c;
  }

  th,
  td {
    border-bottom: 1px solid #dddddd;
    padding: 10px 10px;
    word-break: break-all;
    text-align: center;
  }

  tr:hover td {
    color: #00ff88;
    cursor: pointer;
    background-color: #f6f9fc;
    background: #514869;
  }

  td button:nth-child(1) {
    background-color: #00ff88;
    color: #ffffff;
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 5px;
    margin: 2px;
    opacity: 0.8;
  }

  td button:nth-child(2) {
    background-color: red;
    color: #ffffff;
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 5px;
    margin: 2px;
    opacity: 0.8;
  }

  td button:nth-child(1):hover, td button:nth-child(2):hover {
    color: #201b2c;
    opacity: 1;
  }

  ::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  @media only screen and (max-width: 900px) {
    thead,
    th {
      font-size: 12px;
    }
  }
`;
