// src/components/GymEntryList.js

import React from 'react';
import { Table, Button } from 'react-bootstrap';

const GymEntryList = ({ entries, onDelete }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Exercise</th>
          <th>Sets</th>
          <th>Reps</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry) => (
          <tr key={entry.id}>
            <td>{entry.id}</td>
            <td>{entry.exercise}</td>
            <td>{entry.sets}</td>
            <td>{entry.reps}</td>
            <td>
              <Button variant="danger" onClick={() => onDelete(entry.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default GymEntryList;
