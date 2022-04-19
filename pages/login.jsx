import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { AuthFormComponent, DescriptionComponent, PaperComponent, TitleComponent } from '../components';
import Template from '../template/Template';
const login = () => {
  const [status, setStatus] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setStatus(true);
    }, 3000);
  }, [status]);
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Template>
        <section className="mb-3 mt-3">
          <Container>
            <TitleComponent title="Sign In " />
            <Row>
              <Col md={6}>
                <DescriptionComponent desc="Sign In to unlock many feature and enjoy the cryptocurrency website with many feature to help you manage your crypto assets and analyze the market." />
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center mt-4 mb-4">
                <PaperComponent>
                  <TitleComponent title="Secure Login With Us" />
                  <DescriptionComponent desc="Your data is encrypted securely on server" />
                  <AuthFormComponent isRegisterForm={false} />
                  <Row className="mt-5">
                    <Col className="d-flex justify-content-center">{status ? <TitleComponent title="SERVER STATUS OK !" /> : <Spinner animation="grow" variant="danger" className="spinner" />}</Col>
                  </Row>
                </PaperComponent>
              </Col>
            </Row>
          </Container>
        </section>
      </Template>
    </div>
  );
};

export default login;
