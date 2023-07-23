import React from 'react';
import { Button } from 'react-bootstrap';

interface ICustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string,
    variant: string,
    active?: boolean
    disabled?: boolean
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    children: React.ReactNode
}

const CustomButton: React.FC<ICustomButtonProps> = (props: ICustomButtonProps) => {
    const { title, children, ...rest } = props;

    return(
        <Button title={title} {...rest} >
          {title} {children}
        </Button>
    );
};

export default CustomButton;