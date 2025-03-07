import React, { useState } from 'react';
import { Grid, Typography, Card, CardContent } from '@mui/material';
import MCQ from './../../ContentPageComponent/MCQ/MCQ';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 'Jupiter',
  },
  // Add more questions as needed
];

const MCQPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center" style={{ padding: '20px' }}>
      <Grid item xs={12} sm={8} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom>
              Quiz
            </Typography>
            <MCQ
              question={questions[currentQuestionIndex].question}
              options={questions[currentQuestionIndex].options}
              correctAnswer={questions[currentQuestionIndex].correctAnswer}
              onAnswer={handleAnswer}
            />
            <Typography variant="body1" gutterBottom>
              Score: {score}/{currentQuestionIndex + 1}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MCQPage;