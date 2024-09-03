import React, { useEffect, useRef, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Content.css';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const ContentOne = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const chartData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="content-container">
      <Container>
      <Row>
      <h1 style={{ color: '#6A5ACD' }} >Component One</h1>
      </Row>
      <Row>
      <div className="chart-container">
        {/* Reference to the canvas element for rendering the chart */}
        <Pie data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      
      <div className="text-container">
        <div className="scrollable-text">
          <h2>Post Title</h2>
          <p>{data.title}</p>
          <h2>Post Content</h2>
          <p>{data.body}</p>
        </div>
      </div>
      </Row>
      </Container>
    </div>
  );
};

export default ContentOne;
