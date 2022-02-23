import styled from 'styled-components';


export const LoginFormComponent = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 40vw;
   min-height: 100vh;
   justify-content: center;
   @media (max-width: 528px) {
        width: 80vw;
      }
   .loginHeader{
       font-size: 35px;
       font-weight: bold;
       color: #000;
       @media (max-width: 528px) {
        font-size: 25px;
        width: 80vw;
      }
   }
   .emailbox {
       border: none;
       margin: 25px 0;
       border-bottom: 2px solid #000;
       font-size: 24px;
       font-weight: normal;
     /* @media (max-width: 528px) {
        font-size: 20px;
    } */
   }
   .emailbox::placeholder {
     color: #000;
     text-align: center;
     font-size: 24px;
     font-weight: normal;
     /* @media (max-width: 528px) {
        font-size: 20px;
    } */
    }
    *:focus {
      outline: none;
    }
    .loginButton{
        border: none;
        border-radius:  40px;
        background-color: #000;
        color: #FFF;
        padding: 15px 80px;
        font-size: 24px;
        margin: 20px 0px;
    }
    
`;