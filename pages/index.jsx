import Head from 'next/head';
import { Col, Container, Row } from 'react-bootstrap';
import { FormComponent } from '../components';
import Template from '../template/Template';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Template>
        <Row>
          <Col>
            <Container>
              <FormComponent />
            </Container>
          </Col>
          <Col>Kanan</Col>
        </Row>
      </Template>
    </div>
  );
}
