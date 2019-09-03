import React from "react";
import {Link} from "react-router-dom";
import { Container } from "./styles";

export default function Login() {
  return (
    <Container>
      <section>
      <form>
          <input placeholder= "Email" type = "Email"/>
          <input placeholder= "Senha" type = "Password"/><br/>
          <button className = "botoes" type = "submit">Entrar </button>
      </form>
      <br/>
      <Link to="./Cadastrar">
      <p>Cadastrar</p>
      </Link>
      <Link to="./Recuperar">
      <p>Recuperar Senha</p>
      </Link>
      
      </section>
  
    </Container>
  );
}
