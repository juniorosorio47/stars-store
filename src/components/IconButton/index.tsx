import React, { MouseEventHandler } from 'react';
import { IconBaseProps } from 'react-icons';

import { Button } from './styles';

interface IconButtonProps{
    icon: React.ComponentType<IconBaseProps>;
    onClick: any
}

const IconButton: React.FC<IconButtonProps> = ({icon: Icon, onClick, ...rest}) => {
  return <>
    <Button onClick={onClick} {...rest}>
        <Icon/>
    </Button>
  </>;
}

export default IconButton;