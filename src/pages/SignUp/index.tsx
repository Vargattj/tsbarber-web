import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Content, Background } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Insira um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />

      <Content>
        <img src={logo} alt="" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>

          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
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
