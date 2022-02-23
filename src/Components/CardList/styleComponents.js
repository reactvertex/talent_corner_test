import styled from "styled-components";

export const CardListComponent = styled.div`
  margin-top:  15px ;
  .productList {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: none;
      box-shadow: 0px 6px 10px rgb(208 208 208 / 20%);
      border: 1px solid #f2f2f2;
      border-radius: 15px;
      padding: 15px 10px;
      .product_name{
         padding-left: 20px;
         font-size: 20px;
         font-weight: normal;
      }
  }
`;