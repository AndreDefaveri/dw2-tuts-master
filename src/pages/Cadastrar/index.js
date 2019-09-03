import React from "react";

import { Container } from "./styles";
import {Link} from "react-router-dom";
export default function Cadastrar() {
  return (
    <Container>
      <section>
      <form>
          <input placeholder= "Nome" type = "Name"/>
          <input placeholder= "Email" type = "Email"/>
          <input placeholder= "Senha" type = "Password"/><br/>
          <button className = "botoes" type = "submit"> Salvar </button><br/>
          <Link to= "/"> 
          <label className= "Logar" htmlFor= "login"> Já criou sua conta? Deseja Logar? </label>
          </Link>

      </form>
      
      </section>
     
    </Container>
  );
}
