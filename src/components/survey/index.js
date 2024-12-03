import React, { useCallback, useEffect, useState } from 'react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';
import { surveyJson } from './SurveyQuestions';
import { createSurvey, getUserSurvery } from '../../api/fetchAPI';
import auth from '../../lib/auth';

const SurveyForm = () => {
  const [questions, setQuestions] = useState(surveyJson);
  const surveyModel = new Model(surveyJson);
  const [surveyData, setSurveyData] = useState(false);

  const onComplete = async (survey) => {
    const getTopLevelKeys = (results) => {
      const groupedResults = {};
      

      survey.pages.forEach((page) => {
        const title = page.title; // The top-level key (e.g., "Focus on outcomes")
        groupedResults[title] = { questions: [] };
        
        page.questions.forEach((question) => {
          let choices = []
          console.log(question.getType())
          let qstnType = question.getType()
          if(qstnType !== 'text'){
           choices = question.choices.map(choice => choice.value || choice); // If no value, fallback to choice itself
         
          }
          const name = question.name;
          // Push the question details along with the corresponding answer
          groupedResults[title].questions.push({
            name: name,
            title: question.title,
            isRequired: question.isRequired,
             ...(qstnType !== 'text' && {choices}),
            value: results[name] || null, // Get answer from results
          });
        });
      });

      return groupedResults;
    };

    // Get the structured results
    const formattedResults = getTopLevelKeys(survey.data);
    console.log({formattedResults})

    try {
      await createSurvey({ ...formattedResults, userId: 'tola.akere@affinitywater.co.uk' });
      setSurveyData(true);
    } catch (err) {
      setSurveyData(false);
      console.error({ err });
    }
  };

  const extractAnswers = useCallback((surveyData) => {
    const answers = {};
    if (!questions || !questions.pages) return answers; // Return an empty object if there's an issue

    questions.pages.forEach((page) => {
      Object.keys(page).forEach((key) => {
        const questions = page[key]?.questions; // Use optional chaining

        if (questions) {
          questions.forEach((question) => {
            answers[question.name] = question.value; // Using name as key and value as the answer
          });
        }
      });
    });
    return answers;
  },[questions]);

  const initialData = extractAnswers();

  return (
    <div className="survey-container">
      {surveyData ? (
        <div>
          <h2>Thank you for completing the survey!</h2>
        </div>
      ) : questions.pages ? (
        <Survey
          model={surveyModel}
          json={surveyJson}
          data={initialData}
          onComplete={onComplete}
        />
      ) : null}
    </div>
  );
};

export default SurveyForm;
