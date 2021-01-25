import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #F6F9FF;
`

export const ProductsList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  list-style: none;

  

  li {
    display: flex;
    flex-direction: column;
    background: #EEEEEE;
    width: 380px;
    height: 300px;
    align-items: center;
    justify-content: center;

    border-radius: 8px;
    padding: 5px;
    margin: 20px;
    cursor: pointer;

    img {
      width: 150px;
      height: 150px;
      margin: 0 0 20px 0;
    }

  a {
    color: #A6ABBD;
    text-decoration: none;
  }  

  p {
    color: #A6ABBD;
    font-weight: 700;
  }

  button {
    margin-top: 10px;
    padding: 10px 30px;
    background: #2AC194;
    border: 0;
    border-radius: 4px;

  }
    
  }

  
`;
