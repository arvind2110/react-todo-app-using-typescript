import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import Main from './Components/Main';

const App: React.FC = () => {
    return(
        <Container>
            <Header />
            <Main />
            <Footer />
        </Container>
    );
};

export default App;