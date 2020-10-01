import React from 'react';
import { Container } from './styles';
import { ToastState, useToast } from '../../hooks/toast';
import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastState[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
