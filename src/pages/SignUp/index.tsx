import React from 'react';

import { FiLogIn, FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />

    <Content>
      <img src={logo} alt="" />

      <form>
        <h1>Faça seu Cadastro</h1>
        <Input name="name " icon={FiUser} type="text" placeholder="Nome" />

        <Input name="email " icon={FiMail} type="email" placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button>Cadastrar</Button>
      </form>

      <a href="login">
        <FiArrowLeft />
        Voltar pra Logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
