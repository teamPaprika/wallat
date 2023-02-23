import React from 'react';

import { FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup } from '@mui/material';

const ArrowRight = () => (
  <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="30" height="32" rx="12" fill="#2670ff" />
    <path
      d="M12.5024 21.75L16.1144 15.562L12.5024 9.304L13.3424 8.898L17.3744 15.576L13.3424 22.156L12.5024 21.75Z"
      fill="#ffffff"
    />
  </svg>
);

const ArrowLeft = () => (
  <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="30" height="32" rx="12" fill="#2670ff" />
    <path
      d="M17.4024 21.75L16.5624 22.156L12.5304 15.576L16.5624 8.898L17.4024 9.304L13.7904 15.562L17.4024 21.75Z"
      fill="#ffffff"
    />
  </svg>
);

const questionArray = [
  {
    id: 'gender',
    question: 'What is your gender?',
    answers: [
      { answer: 'Male', value: 'Male' },
      { answer: 'Female', value: 'Female' },
    ],
  },
  {
    id: 'continent',
    question: 'What continent do you live in?',
    answers: [
      { answer: 'Africa', value: 'Africa' },
      { answer: 'Antarctica', value: 'Antarctica' },
      { answer: 'Asia', value: 'Asia' },
      { answer: 'Australia', value: 'Australia' },
      { answer: 'Europe', value: 'Europe' },
      { answer: 'North America', value: 'North America' },
      { answer: 'South America', value: 'South America' },
    ],
  },
  {
    id: 'age',
    question: 'What age group do you belong to?',
    answers: [
      { answer: 'Teens', value: 'Teens' },
      { answer: 'twenties', value: 'twenties' },
      { answer: 'thirties', value: 'thirties' },
      { answer: 'forties', value: 'forties' },
      { answer: 'fifties', value: 'fifties' },
      { answer: 'sixties', value: 'sixties' },
      { answer: 'seventies', value: 'seventies' },
      { answer: 'eighties', value: 'eighties' },
      { answer: 'nineties', value: 'nineties' },
      { answer: 'hundred and over', value: 'hundred and over' },
    ],
  },
];

const Question = ({ onChange, idx, answersState }) => {
  console.log(answersState);
  return (
    <FormControl
      style={{
        width: '100%',
      }}
    >
      <FormLabel
        style={{
          fontSize: '30px',
          fontWeight: 'normal',
          display: 'flex',
          justifyContent: 'center',
          padding: '7px 7px 7px 16px',
          marginBottom: '12px',
          borderRadius: 4,
          color: '#fff',
        }}
        id="demo-radio-buttons-group-label"
      >
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
            key={`${answer}_${idx}`}
            style={{
              margin: 0,
              width: `calc(100%) !important`,
              fontSize: '20px',
              fontWeight: 'normal',
              justifyContent: 'flex-start',
              padding: '7px 7px 7px 16px',
              marginBottom: '12px',
              borderRadius: 4,
              backgroundColor: '#d9d9d91f',
              color: '#fff',
            }}
            value={answer.value}
            control={
              <Radio
                checked={answersState[idx] === answer.value}
                inputProps={{ type: 'radio', value: answer.value }}
                icon={<UncheckedRadioButton />}
                checkedIcon={<RadioButton />}
              />
            }
            label={answer.answer}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

const UncheckedRadioButton = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#bfbfbfa9" />
    <circle cx="12" cy="12" r="4" fill="#fff" />
  </svg>
);

const RadioButton = ({ fill = '#2670ff' }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill={fill} />
    <circle cx="12" cy="12" r="4" fill="#fff" />
  </svg>
);

const Explore = () => {
  const [questionIdx, setQuestionIdx] = React.useState(0);
  const [answersState, setAnswersState] = React.useState({});

  const handleChange = e => {
    setAnswersState({
      ...answersState,
      [questionIdx]: e.target.value,
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div
        style={{
          width: '800px',
          height: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'column',
          border: '3px solid #eee',
          borderRadius: '10px',
          padding: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'flex-start',
          }}
        >
          <h1
            style={{
              fontSize: '5rem',
            }}
          >
            Explore
          </h1>
        </div>
        <div
          style={{
            width: '100%',
            flex: 1,
            backgroundColor: '#1A1B21',
            borderRadius: '10px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              height: '100%',
            }}
          >
            <div
              style={{
                width: '100%',
                flex: 1,
                overflow: 'scroll',
              }}
            >
              <Question onChange={handleChange} idx={questionIdx} answersState={answersState} />
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              {questionIdx === 0 ? null : (
                <IconButton
                  onClick={() => {
                    setQuestionIdx(questionIdx - 1);
                  }}
                >
                  <ArrowLeft />
                </IconButton>
              )}

              {questionIdx === questionArray.length - 1 ? (
                <button
                  onClick={() => {
                    console.log(answersState);
                  }}
                >
                  submit
                </button>
              ) : (
                <IconButton
                  onClick={() => {
                    if (questionIdx === questionArray.length - 1) return;
                    if (answersState[questionIdx] === undefined) return;
                    setQuestionIdx(questionIdx + 1);
                  }}
                >
                  <ArrowRight />
                </IconButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
