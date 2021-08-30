import React from 'react';
import Forms from './pages/formu';
import {Container,Row,Col} from 'react-bootstrap';
import './css/style.css';
import './App.css';
import axios from 'axios';

export default function App() {
  
  return (
    <div className="App d-flex align-items-center">
      <Container className="formulario">
        <Row>
          <Col>
            <h1 className="titulo">Cadastro de Currículo JobsNET</h1>
            <Forms></Forms>
          </Col>
        </Row>
      </Container>      
    </div>
  );
}
