import styled from 'styled-components';

export const Container = styled.div`

* {
  margin: auto;
  text-align:center;
  align-self:center;
}
section{
  padding-bottom:200px;
  margin-top:300px;
  heigth: 400px;
  width: 600px;
}
form{
  display: inline-block;
  height: 60%;
  margin-top:50px;
 
}
input{
  margin: 10px;
}
.botoes{
  background: #fff;
  width: 380px;
  height: 40px;
  border-radius: 15px;
}

@media only screen and (max-width: 800px){

  section{
    padding-bottom:100px;
    margin-top:300px;
    heigth: 200px;
    width: 400px;
  }
  form{
    display: inline-block;
    height: 40%;
    margin-top:50px;
   
  }
  .botoes{
    background: #fff;
    width: 200px;
    height: 40px;
    border-radius: 15px;
  }
`;