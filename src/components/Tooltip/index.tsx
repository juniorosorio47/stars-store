import React, { ReactNode } from 'react';

import { Container } from './styles';

interface TooltipProps {
    title: string;
    className?: string;
    children: string | ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ title, children, className='' }) => {
    console.log(className)
  return (
    <Container className={className}>
        {children}
        <span>{title}</span>
    </Container>
  );
}

export default Tooltip;