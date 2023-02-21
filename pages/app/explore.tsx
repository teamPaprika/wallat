import React from "react";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const questionArray = [
  {
    question: "What is your gender?",
    answers: [
      { answer: "Male", value: "Male" },
      { answer: "Female", value: "Female" },
    ],
  },
  {
    question: "What continent do you live in?",
    answers: [
      { answer: "Africa", value: "Africa" },
      { answer: "Antarctica", value: "Antarctica" },
      { answer: "Asia", value: "Asia" },
      { answer: "Australia", value: "Australia" },
      { answer: "Europe", value: "Europe" },
      { answer: "North America", value: "North America" },
      { answer: "South America", value: "South America" },
    ],
  },
  {
    question: "What age group do you belong to?",
    answers: [
      { answer: "Teens", value: "Teens" },
      { answer: "twenties", value: "twenties" },
      { answer: "thirties", value: "thirties" },
      { answer: "forties", value: "forties" },
      { answer: "fifties", value: "fifties" },
      { answer: "sixties", value: "sixties" },
      { answer: "seventies", value: "seventies" },
      { answer: "eighties", value: "eighties" },
      { answer: "nineties", value: "nineties" },
      { answer: "hundred and over", value: "hundred and over" },
    ],
  },
];

const Question = ({ onChange, idx }) => (
  <FormControl>
    <FormLabel id="demo-radio-buttons-group-label">
      {questionArray[idx].question}
    </FormLabel>
    <RadioGroup
      onChange={onChange}
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="female"
      name="radio-buttons-group"
    >
      {questionArray[idx].answers.map((answer, idx) => (
        <FormControlLabel
          value={answer.value}
          control={<Radio />}
          label={answer.answer}
        />
      ))}
    </RadioGroup>
  </FormControl>
);

const Explore = () => {
  const [questionIdx, setQuestionIdx] = React.useState(0);

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "600px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
          border: "3px solid #eee",
          borderRadius: "10px",
        }}
      >
        <h1>Explore</h1>

        <Question onChange={handleChange} idx={questionIdx} />
        <button
          onClick={() => {
            if (questionIdx === questionArray.length - 1) return;
            setQuestionIdx(questionIdx + 1);
          }}
        >
          submit
        </button>

        <div>
          <p />
        </div>
      </div>
    </div>
  );
};

export default Explore;
