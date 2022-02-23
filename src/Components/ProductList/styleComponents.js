import styled from 'styled-components';


export const ProductListComponent = styled.div`
    width: 80vw;
    margin-top:  80px;
    .productSeachBox{
      width: 100%;
      border: none;
      box-shadow: 0px 6px 20px rgb(208 208 208 / 20%);
      border: 1px solid #f2f2f2;
      border-radius: 15px;
      padding: 15px 20px;
      font-size: 24px;
      font-weight: normal;
    } 
    .productSeachBox::placeholder {
     color: #000;
     font-size: 24px;
     font-weight: normal;
    }
    *:focus {
      outline: none;
    }
`;