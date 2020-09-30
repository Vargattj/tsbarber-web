import React, { useCallback, useContext, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Content, Background } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import { AuthContext } from '../context/AuthContext';

interface SignDataForm {
  password: string;
  email: string;
}

const SignIn: React.FC = () => {
  const { signIn } = useContext(AuthContext);
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: SignDataForm) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Insira um e-mail válido'),
        password: Yup.string().required('Insira sua senha'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      signIn({ email: data.email, password: data.password });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={logo} alt="" />

        <Form onSubmit={handleSubmit} ref={formRef}>
          <h1>Faça seu Logon</h1>
          <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>
          <a href="/forgot">Esqueci minha senha</a>
        </Form>

        <a href="login">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
