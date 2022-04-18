import Head from 'next/head';
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import { CarouselComponent, DescriptionComponent, ListCategoryComponent, TitleComponent } from '../components';

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
        <CarouselComponent />
        <section className="mb-3 mt-3">
          <Container>
            <TitleComponent title="Top 10 Cryptocurrency Categories By Market Capitalization Based on CoinGecko" />
            <DescriptionComponent desc="The cryptocurrency category ranking is based on market capitalization." />
            <DescriptionComponent desc="Note: Some cryptocurrencies may overlap across several categories" />
          </Container>
        </section>
        <Row>
          <Col>
            <Container>
              <ListCategoryComponent />
            </Container>
          </Col>
        </Row>
      </Template>
    </div>
  );
}
