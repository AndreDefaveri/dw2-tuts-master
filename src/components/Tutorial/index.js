import React, { useState } from "react";

import { Container } from "./styles";

export default function Tutorial(props) {
  const [entendi, setEntendi] =useState(props.entendi || 0);
  const [naoentendi, setNaoEntendi] =useState(props.naoEntendi || 0);
  return (
    <Container>
      <header>
        <h2>{props.titulo}</h2>
        <p>
          Autor: <span>{props.autor}</span>
        </p>
      </header>
      <div>
        <p>{props.texto}</p>
      </div>
      <div>
        <button type="button" onClick={()=> setEntendi(entendi+1)}>Entendi ({entendi})</button>
        <button type="button" onClick={()=> setNaoEntendi(naoentendi+1)}>Não Entendi ({naoentendi})</button>
      </div>
    </Container>
  );
}
