import Options from './components/Options';
import Feedback from './components/Feedback';
import Description from './components/Description';
import Notification from './components/Notification';
import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem('saved-feedback');
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((f) => ({ ...f, [feedbackType]: f[feedbackType] + 1 }))
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const handleReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem('saved-feedback', JSON.stringify(feedback));
  }, [feedback]);


  return (
    <>
      <div>
        <Description />
        <Options
          updateFeedback={updateFeedback}
          handleReset={handleReset}
          totalFeedback={totalFeedback} />
        {feedback.good || feedback.neutral || feedback.bad > 0 ? <Feedback feedback={feedback} totalFeedback={totalFeedback}/> : <Notification />}
      </div>
    </>
  );
}

export default App