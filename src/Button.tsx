import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary';
}

export const Button = ({ children, variant = 'primary', ...props }: Props) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor: variant === 'primary' ? 'blue' : 'gray',
        color: 'white',
        border: 'none',
        borderRadius: 50,
        padding: 10,
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};
