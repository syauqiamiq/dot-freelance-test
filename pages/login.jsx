import Head from 'next/head';
import { Col, Container, Row } from 'react-bootstrap';
import { DescriptionComponent, TitleComponent } from '../components';
import Template from '../template/Template';
const login = () => {
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
          </Container>
        </section>
      </Template>
    </div>
  );
};

export default login;
