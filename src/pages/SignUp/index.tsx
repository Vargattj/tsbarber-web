import React from 'react';
import { FiLogIn, FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';

import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />

      <Content>
        <img src={logo} alt="" />

        <Form onSubmit={handleSubmit} initialData={{ name: 'Johnny' }}>
          <h1>Faça seu Cadastro</h1>
          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />

          <Input
            name="email "
            icon={FiMail}
            type="email"
            placeholder="E-mail"
          />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="login">
          <FiArrowLeft />
          Voltar pra Logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
