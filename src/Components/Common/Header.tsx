import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Message from './Message';

const Header: React.FC = () => {
    return(
        <Row className="text-center mt-2">
            <Col>
                <Message message="TODO Application" variant="success" />
            </Col>
        </Row>
    );
};

export default Header;