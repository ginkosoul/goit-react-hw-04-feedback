import { useState } from 'react';

const useBtn = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return [
    [good, neutral, bad],
    { good: setGood, neutral: setNeutral, bad: setBad },
  ];
};

export default useBtn;
