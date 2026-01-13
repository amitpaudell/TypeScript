import React, { type PropsWithChildren, type ReactNode } from 'react';

interface CardProps extends PropsWithChildren {
  title: string;
  footer?: ReactNode;
}

const Card = ({ title, children, footer }: CardProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <div style={{ color: 'red', fontSize: '24px' }}>{children}</div>
      {footer && <footer>{footer}</footer>}
    </section>
  );
};

export default Card;
