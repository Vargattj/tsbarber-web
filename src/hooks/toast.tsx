import React, { createContext, useCallback, useContext, useState } from 'react';
import { uuid } from 'uuidv4';
import ToastContainer from '../components/ToastContainer';

interface ToastContextData {
  addToast(message: Omit<ToastState, 'id'>): void;
  removeToast(id: string): void;
}
export interface ToastState {
  id: string;
  type?: 'info' | 'success' | 'error';
  title: string;
  description?: string;
}
const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastState[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastState, 'id'>) => {
      const toast = {
        id: uuid(),
        type,
        title,
        description,
      };
      setMessages((oldMessages) => [...oldMessages, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ removeToast, addToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within an ToastProvider');
  }
  return context;
}
