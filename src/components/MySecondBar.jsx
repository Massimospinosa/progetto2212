import React from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';

const GenresDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="genres-dropdown" className="btn-dark border border-light">
        GENRES
      </Dropdown.Toggle>
      <Dropdown.Menu className="text-white bg-black border border-light">
        <Dropdown.Item href="#" className="text-white bg-black border border-0">Action</Dropdown.Item>
        <Dropdown.Item href="#" className="text-white bg-black border border-0">Comedy</Dropdown.Item>
        <Dropdown.Item href="#" className="text-white bg-black border border-0">Drama</Dropdown.Item>
        <Dropdown.Item href="#" className="text-white bg-black border border-0">Horror</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const TVShowsSection = () => {
  return (
    <section>
      <Container class="mx-5">
        <Row className="d-flex justify-content-start align-items-center">
          <Col className="col-2 p-4">
            <h1 className="text-white">TV Shows</h1>
          </Col>
          <Col className="col-4">
            <GenresDropdown />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TVShowsSection;
