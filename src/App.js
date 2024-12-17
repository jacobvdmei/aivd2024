import logo from './logo.svg';
import './App.css';
import TextAnalyzer from './components/TextAnalyzer.js';
import Doorloper from './components/Doorloper.js';
import Opgave8 from './components/Opgave8.js';
import Opgave13 from './components/Opgave13.js';
import Opgave25 from './components/Opgave25.js';
import RandomStuff from './components/RandomStuff.js';


import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Tabs defaultActiveKey="opgave8">
            <Tab eventKey="opgave8" title="Opgave 8">
              <Opgave8 />
            </Tab>
            <Tab eventKey="opgave13" title="Opgave 13">
              <Opgave13 />
            </Tab>
            <Tab eventKey="opgave25" title="Opgave 25">
              <Opgave25 />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
