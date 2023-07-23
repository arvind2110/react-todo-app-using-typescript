import React from 'react';
import { Row, Col, Alert } from 'react-bootstrap';

const Footer: React.FC = () => {
    return(
        <Row className="text-center mt-2">
          <Col>
            <Alert variant="success">
                &copy; {new Date().getFullYear()} &nbsp;
                <Alert.Link href="https://github.com/arvind2110" rel="noreferrer">Arvind Singh</Alert.Link>
                &nbsp; | All rights reserved.
            </Alert>
          </Col>
      </Row>
    );
};

export default Footer;