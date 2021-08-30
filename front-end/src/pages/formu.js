import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Form,Row,Col,Button} from 'react-bootstrap';
import axios from 'axios';

// const ErrorSpan = styled.span`
//  color: red;
//  display: ${(props) => props.isError ? 'block' : 'none'};
//`;

export default function Forms(){

    const fetchAddress = async () => {
        const address = await axios.get(`https://viacep.com.br/ws/${form.cep}/json/`);
        setForm({ ...form, rua: address.data.rua });
      };
    
      const createCandidate = async (candidate) => {
        try {
          const user = await axios.post('http://localhost:5000/register', form);
          if (user.status === 200) {
            alert('Formulário enviado com sucesso!');
          }
    
        } catch (error) {
          setCpfError(true);
        }
      };
    
      const [form, setForm] = useState({
        cpf: '',
        name: '',
        dtnasc: '',
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        email: '',
        profissao: '',
        celular: '',
      });
    
      const [cpfError, setCpfError] = useState(false);

    return (
        <>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} md={6} controlId="formGridNome">
                    <Form.Label>Nome completo</Form.Label>
                    <Form.Control onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        }} value={form.name} type="text" placeholder="João da Silva" />
                    </Form.Group>

                    <Form.Group as={Col} md={3} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        }} value={form.email} type="email" placeholder="exemplo@exemplo.com" />
                    </Form.Group>

                    <Form.Group as={Col} md={3} controlId="formGridProfissao">
                    <Form.Label>Profissão</Form.Label>
                    <Form.Control onChange={(e) => {
                        setForm({ ...form, profissao: e.target.value });
                        }} value={form.profissao} type="text" placeholder="Desenvolvedor Full Stack" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md={4} controlId="formGridCPF">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control onChange={(e) => {
                        setForm({ ...form, cpf: e.target.value });
                        }} value={form.cpf} type="text" placeholder="000.000.000-00" />
                    </Form.Group>
                    <Form.Group as={Col} md={4} controlId="formGridDataDeNascimento">
                        <Form.Label>Data de nascimento</Form.Label>
                        <Form.Control onChange={(e) => {
                        setForm({ ...form, dtnasc: e.target.value });
                        }} value={form.dtnasc} type="date" />
                        </Form.Group>
                    <Form.Group as={Col} md={4} controlId="formGridCelular">
                        <Form.Label>Celular</Form.Label>
                        <Form.Control onChange={(e) => {
                        setForm({ ...form, celular: e.target.value });
                        }} value={form.celular} type="text" placeholder="(xx) xxxxx-xxxx"/>
                        </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md={4} controlId="formGridEndereco">
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control onChange={(e) => {
                        setForm({ ...form, rua: e.target.value });
                        }} value={form.rua} placeholder="Rua/Av Julio da Costa" />
                    </Form.Group>

                    <Form.Group as={Col} md={2} controlId="formGridNumero">
                        <Form.Label>Número</Form.Label>
                        <Form.Control onChange={(e) => {
                        setForm({ ...form, numero: e.target.value });
                        }} value={form.numero} placeholder="123" />
                    </Form.Group>

                    <Form.Group as={Col} md={3} controlId="formGridComplemento">
                        <Form.Label>Complemento</Form.Label>
                        <Form.Control placeholder="Ap 0 Bloco 0" />
                    </Form.Group>

                    <Form.Group as={Col} md={3} controlId="formGridBairro">
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control onChange={(e) => {
                        setForm({ ...form, bairro: e.target.value });
                        }} value={form.bairro} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control onBlur={() => {
                        fetchAddress();
                        }} onChange={(e) => {
                        setForm({ ...form, cidade: e.target.value });
                        }} value={form.cidade} />
                    </Form.Group>

                    <Form.Group as={Col} md={2} controlId="formGridState">
                    <Form.Label>Estado</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Escolha...</option>
                        <option>AC</option>
                        <option>AL</option>
                        <option>AP</option>
                        <option>AM</option>
                        <option>BA</option>
                        <option>CE</option>
                        <option>ES</option>
                        <option>GO</option>
                        <option>MA</option>
                        <option>MT</option>
                        <option>MS</option>
                        <option>MG</option>
                        <option>PA</option>
                        <option>PB</option>
                        <option>PR</option>
                        <option>PE</option>
                        <option>PI</option>
                        <option>RJ</option>
                        <option>RN</option>
                        <option>RS</option>
                        <option>RO</option>
                        <option>RR</option>
                        <option>SC</option>
                        <option>SP</option>
                        <option>SE</option>
                        <option>TO</option>
                        <option>DF</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control onChange={(e) => {
                        setForm({ ...form, cep: e.target.value });
                        }} value={form.cep}/>
                    </Form.Group>
                </Row>

                <Button onClick={() => createCandidate()} style={{justifyContent: 'center'}} variant="success" type="submit">
                    Enviar!
                </Button>
            </Form>
        </>        
    )
}