
function Feedback({ feedback, totalFeedback }) {

    const positivePercent = Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100)

  return (
    <div>
        <p>Good: {feedback.good}</p>
        <p>Neutral: {feedback.neutral}</p>
        <p>Bad: {feedback.bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {positivePercent}%</p>
    </div>
  );
}

export default Feedback;
