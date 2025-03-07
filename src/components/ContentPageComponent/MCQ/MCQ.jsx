import React, { useState } from 'react';
import { Grid, Typography, RadioGroup, FormControlLabel, Radio, Card, CardContent, Button } from '@mui/material';

const MCQ = ({ question, options, correctAnswer, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
    onAnswer(event.target.value === correctAnswer);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {question}
        </Typography>
        <RadioGroup
          aria-label="quiz"
          name="quiz"
          value={selectedAnswer}
          onChange={handleAnswerChange}
        >
          {options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
        <Button variant="contained" color="primary" onClick={() => onAnswer(selectedAnswer === correctAnswer)}>
          Submit
        </Button>
      </CardContent>
    </Card>
  );
};

export default MCQ;