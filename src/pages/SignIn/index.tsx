import React from 'react';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="" />

      <form>
        <h1>Faça seu Logon</h1>
        <Input name="email " icon={FiMail} type="email" placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button>Entrar</Button>
        <a href="/forgot">Esqueci minha senha</a>
      </form>

      <a href="login">
        <FiLogIn />
        Criar Conta
      </a>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
