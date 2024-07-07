import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';

const GymEntryForm = ({onSave}) => {
    const [exercise, setExercise] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({exercise, sets, reps});
        setExercise('');
        setSets('');
        setReps('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formExercise">
                <Form.Label>Exercise</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter exercise"
                    value={exercise}
                    onChange={(e) => setExercise(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formSets">
                <Form.Label>Sets</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter sets"
                    value={sets}
                    onChange={(e) => setSets(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formReps">
                <Form.Label>Reps</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter reps"
                    value={reps}
                    onChange={(e) => setReps(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Add Entry
            </Button>
        </Form>
    );
};

export default GymEntryForm;
