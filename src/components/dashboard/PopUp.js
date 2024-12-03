import ReactTooltip from 'react-tooltip';

const SurveyQuestion = ({ question, onAnswer }) => {
  return (
    <div className="question-card" data-tip={question.title}>
      <div className="question">
        {question.title}
      </div>
      <div className="buttons">
        <button onClick={() => onAnswer(question.name, 'Yes')}>Yes</button>
        <button onClick={() => onAnswer(question.name, 'No')}>No</button>
      </div>
      <ReactTooltip place="top" type="dark" effect="solid" />
    </div>
  );
};
