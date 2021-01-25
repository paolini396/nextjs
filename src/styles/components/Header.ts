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


  ul {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: start;

    li {
      color: #000;
      font-weight: 700;
      list-style: none;
      margin: 0 10px;
      cursor: pointer;
    }
  }


`;