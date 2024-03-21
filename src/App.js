
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import GymEntryForm from './components/GymEntryForm';
import GymEntryList from './components/GymEntryList';

const App = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/weight-entries');
      setEntries(response.data);
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
  };

  const handleSave = async (entryData) => {
    try {
      const response = await axios.post('http://localhost:8080/api/weight-entries', entryData);
      setEntries([...entries, response.data]);
    } catch (error) {
      console.error('Error saving entry:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/weight-entries/${id}`);
      setEntries(entries.filter((entry) => entry.id !== id));
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Gym Journal</h1>
          <GymEntryForm onSave={handleSave} />
          <GymEntryList entries={entries} onDelete={handleDelete} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
