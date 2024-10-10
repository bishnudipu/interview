import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions/dataActions';
import { Table, Container, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { projectName, outputName, lastRun, tableHeaders, tableData } = useSelector(state => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Container>
      <Row className="my-3">
        <Col>
          <h2>Project: {projectName}</h2>
          <p>Output: {outputName}</p>
          <p>Last Run: {lastRun}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                {tableHeaders.map((header, index) => (
                  <th key={index}>{header.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
