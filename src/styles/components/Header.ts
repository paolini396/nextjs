import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background: #fff;
  margin-bottom: 20px;
  box-shadow: 0 0 1em #000;


  ul {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: start;

    li {
      color: #425887;
      font-weight: 700;
      list-style: none;
      margin: 0 10px;
      cursor: pointer;
    }
  }


`;