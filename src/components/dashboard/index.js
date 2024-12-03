
// export default Dashboard;
import React, { useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import { Tooltip } from 'react-tooltip';
import './dash.css';
import { createSurvey, getSurveryResults, updateSurvey } from '../../api/fetchAPI';

const Dashboard = () => {
  // Sample survey questions data
  const initialCategories = {
        "Focus on Outcomes": [
          { question: "I am clear on my goals, targets and performance expectations?", value: '' },
          { question: "I agree clear targets with my team?", value: '' },
          { question: "I set challenging goals for the organisation?", value: '' },
          { question: "I define and communicate objective measures to quantify performance expectations?", value: '' },
          { question: "I convey with clarity my expectations of the team’s performance?", value: '' },
          { question: "I help define the organisation’s critical performance targets?", value: '' },
          { question: "I prioritise my time and resources based on agreed outcomes?", value: '' },
          { question: "I assist the team in prioritising tasks and allocating resources?", value: '' },
          { question: "I have clarity on how and why to prioritise resources in different areas of the organisation?", value: '' },
          { question: "I mobilise the resources need to meet the agreed outcomes?", value: '' },
          { question: "I ensure the team has the resources they need to meet their targets?", value: '' },
          { question: "I mobilise resources necessary for the organisation to meet our targets?", value: '' },
          { question: "I create and work to a scheduled plan?", value: '' },
          { question: "I regularly review team’s plans and follow up on actions?", value: '' },
          { question: "I assist in the creation of outcome focussed plans that have clear actions and responsibilities?", value: '' }
        ],
        "Implement Effective Process": [
          { question: "I use necessary systems and structures to ensure I operate effectively?", value: '' },
          { question: "I work with my team to create procedures that enable them to work effectively?", value: '' },
          { question: "I structure teamwork requirements into programmes, projects and initiatives?", value: '' },
          { question: "I design simple processes that maximise my workflow?", value: '' },
          { question: "I ensure my team's processes are simple and easy to operate?", value: '' },
          { question: "I reduce complexity and systems so they are easy to operate?", value: '' },
          { question: "I seek continuous improvement in my work?", value: '' },
          { question: "I structure teamwork requirements into programmes, projects and initiatives?", value: '' },
          { question: "I design simple processes that maximise my workflow?", value: '' },
          { question: "I ensure my team's processes are simple and easy to operate?", value: '' },
          { question: "I set challenging goals for the organisation?", value: '' },
          { question: "I source and implement technology to support organisational improvements?", value: '' },
          { question: "I monitor the effectiveness of my work and make adjustment where necessary?", value: '' },
          { question: "I request feedback from the team on the effectiveness of our processes?", value: '' },
          { question: "I test and follow up new organisational processes to ensure they are implemented effectively?", value: '' }
        ],
        "Be accountable and take ownership": [
          { question: "I am clear on my goals, targets and performance expectations?", value: '' },
          { question: "I agree clear targets with my team?", value: '' },
          { question: "I set challenging goals for the organisation?", value: '' },
          { question: "I define and communicate objective measures to quantify performance expectations?", value: '' },
          { question: "I convey with clarity my expectations of the team’s performance?", value: '' },
          { question: "I set challenging goals for the organisation?", value: '' },
          { question: "I define and communicate objective measures to quantify performance expectations?", value: '' },
          { question: "I convey with clarity my expectations of the team’s performance?", value: '' },
          { question: "I define and communicate objective measures to quantify performance expectations?", value: '' },
          { question: "I convey with clarity my expectations of the team’s performance?", value: '' },
          { question: "I set challenging goals for the organisation?", value: '' },
          { question: "I define and communicate objective measures to quantify performance expectations?", value: '' },
          { question: "I convey with clarity my expectations of the team’s performance?", value: '' },
          { question: "I define and communicate objective measures to quantify performance expectations?", value: '' },
          { question: "I convey with clarity my expectations of the team’s performance?", value: '' }
        ],
        "Be proactive": [
          { question: "I use necessary systems and structures to ensure I operate effectively?", value: '' },
          { question: "I work with my team to create procedures that enable them to work effectively?", value: '' },
          { question: "I structure teamwork requirements into programmes, projects and initiatives?", value: '' },
          { question: "I design simple processes that maximise my workflow?", value: '' },
          { question: "I ensure my team's processes are simple and easy to operate?", value: '' },
          { question: "I use necessary systems and structures to ensure I operate effectively?", value: '' },
          { question: "I work with my team to create procedures that enable them to work effectively?", value: '' },
          { question: "I structure teamwork requirements into programmes, projects and initiatives?", value: '' },
          { question: "I design simple processes that maximise my workflow?", value: '' },
          { question: "I ensure my team's processes are simple and easy to operate?", value: '' },
          { question: "I design simple processes that maximise my workflow?", value: '' },
          { question: "I ensure my team's processes are simple and easy to operate?", value: '' },
          { question: "I design simple processes that maximise my workflow?", value: '' },
          { question: "I ensure my team's processes are simple and easy to operate?", value: '' },
          { question: "I design simple processes that maximise my workflow?", value: '' }
        ],
        "Exceed Customer expectations": [
          { question: "I use necessary systems and structures to ensure I operate effectively?", value: '' },
          { question: "I work with my team to create procedures that enable them to work effectively?", value: '' },
          { question: "I structure teamwork requirements into programmes, projects and initiatives?", value: '' },
          { question: "I design simple processes that maximise my workflow?", value: '' },
          { question: "I ensure my team's processes are simple and easy to operate?", value: '' },
          { question: "I use necessary systems and structures to ensure I operate effectively?", value: '' },
          { question: "I work with my team to create procedures that enable them to work effectively?", value: '' },
          { question: "I structure teamwork requirements into programmes, projects and initiatives?", value: '' },
          { question: "I design simple processes that maximise my workflow?", value: '' },
          { question: "I ensure my team's processes are simple and easy to operate?", value: '' },
          { question: "I set challenging goals for the organisation?", value: '' },
          { question: "I define and communicate objective measures to quantify performance expectations?", value: '' },
          { question: "I convey with clarity my expectations of the team’s performance?", value: '' },
          { question: "I define and communicate objective measures to quantify performance expectations?", value: '' },
          { question: "I convey with clarity my expectations of the team’s performance?", value: '' }
        ]
      };
  // State to store the categories with dynamic answers
  const [categories, setCategories] = useState(initialCategories);
  const [answers, setAnswers] = useState({})
  // const [loading, setLoading] = useState(false)
  // const [fetching, setFetching] = useState(loading)
  const [surveyId, setSurveyId] = useState('')

  // Handle answer selection
  // const handleAnswer = (category, index, answer, question) => {
  //   setCategories((prevCategories) => {
  //     const updatedCategory = [...prevCategories[category]]; // Create a copy of the category array
  //     updatedCategory[index].value = answer; // Update the value of the specific question
  //     return {
  //       ...prevCategories,
  //       [category]: updatedCategory
  //     };
  //   });
  //   setAnswers((prev) => ({
  //     ...prev,
  //     [category + question]: answer
  //   }));
  // };


  // Check if a question is answered "Yes"
  const isAnsweredYes = (category, question) => {
    return answers[category + question] === 'Yes';
  };
  const handleSubmit = async() => {
    console.log("Submitted answers:", answers);
    try {
      if(surveyId){
        await updateSurvey({ ...categories, userId: 'tola.akere@affinitywater.co.uk', _id: surveyId });
       
      }
      else{
       const res = await createSurvey({ ...categories, userId: 'tola.akere@affinitywater.co.uk' });
       console.log({res})
       setSurveyId(res.data.survey._id)
      }
      
    } catch (err) {
      console.error({ err });
    }
  };

  useEffect(() => {
    const fetchUserSurvey = async () => {
      try {
        const { data } = await getSurveryResults();
        console.log(data)
        if(data?.length){
          const userSurvey = data[0]
          const {createdAt,
            isCompleted,
            updatedAt,
            userId,
            __v,
            _id,...rest
            } = userSurvey
            console.log(rest)
            setSurveyId(_id)
        setCategories(rest)
        }
        
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserSurvey();
  }, []);
  return (
    <div className="grid-container">
    <div><button>Submit</button></div>
    {categories.map((category, index) => (
      <div key={index} className="category">
        <h2>{category.title}</h2>
        <div className="questions-grid">
          {category.map((question, qIndex) => (
            <div key={qIndex} className="question" data-tooltip-id="my-tooltip"
            data-tooltip-content={`${question}${index}`}>
              {question}
            </div>
          ))}
        </div>
      </div>
    ))}
     <Tooltip place="top" type="dark" effect="solid" id={"my-tooltip"} />
  </div>
  );
};

export default Dashboard

