import React from 'react';
import { Alert } from 'react-bootstrap';

interface IMessageProps {
    variant: string,
    message: string
}

const Message: React.FC<IMessageProps> = (props: IMessageProps) => {
    const {variant, message} = props;
    return(
        <Alert variant={variant}>
            {message}
        </Alert>
    );
};

export default Message;