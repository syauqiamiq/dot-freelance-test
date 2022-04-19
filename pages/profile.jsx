import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { DescriptionComponent, TitleComponent } from '../components';
import { AuthSuccess } from '../redux/slices/authSlice';
import Template from '../template/Template';
const profile = () => {
  const { isAuth } = useSelector((state) => state.authReducers);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem('isAuth')) {
      dispatch(AuthSuccess());
    } else {
      router.push('/');
    }
  }, [isAuth]);

  return (
    <div>
      <Head>
        <title>My Profile</title>
        <meta name="description" content="Profile Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Template>
        <section className="mb-3 mt-3">
          <Container>
            <TitleComponent title="My Profile " />
            <Row>
              <Col md={6}>
                <DescriptionComponent desc="Costumize your profile without worry." />
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center mt-4 mb-4">
                <TitleComponent title="My Profile " />
              </Col>
            </Row>
          </Container>
        </section>
      </Template>
    </div>
  );
};

export default profile;
