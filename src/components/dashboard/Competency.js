
import React, { useEffect, useState } from "react";
import "./Dashboard.css"; // Import the CSS for the grid layout
import { createSurvey, getUserSurvey, updateSurvey } from "../../api/fetchAPI";

const Competency = () => {
    const initialCategories = {
        "Focus on Outcomes": [
          { question: "I am clear on my goals, targets and performance expectations", value: "" },
          { question: "I agree clear targets with my team", value: "" },
          { question: "I set challenging goals for the organisation", value: "" },
          { question: "I define and communicate objective measures to quantify performance expectations", value: "" },
          { question: "I convey with clarity my expectations of the team's performance", value: "" },
          { question: "I help define the organisation's critical performance targets", value: "" },
          { question: "I prioritise my time and resources based on agreed outcomes", value: "" },
          { question: "I assist the team in prioritising tasks and allocating resources", value: "" },
          { question: "I have clarity on how and why to prioritise resources in different areas of work", value: "" },
          { question: "I mobilise the resources need to meet the agreed outcomes", value: "" },
          { question: "I ensure the team has the resources they need to meet their targets", value: "" },
          { question: "I mobilise resources necessary for the organisation to meet our targets", value: "" }
        ],
        "Implement Effective Process": [
          { question: "I use necessary systems and structures to ensure I operate effectively", value: "" },
          { question: "I work with my team to create procedures that enable them to work effectively", value: "" },
          { question: "I structure teamwork requirements into programmes, projects and initiatives", value: "" },
          { question: "I design simple processes that maximise workflow", value: "" },
          { question: "I ensure my team’s processes are simple and easy to use", value: "" },
          { question: "I reduce complexity and simplify systems so they are easy to operate", value: "" },
          { question: "I seek continuous improvement in my work", value: "" },
          { question: "I review my team’s progress to see where improvements could be made", value: "" },
          { question: "I identify and rectify weaknesses in organisational structures and processes", value: "" },
          { question: "I make use of technology solutions to streamline my work", value: "" },
          { question: "I facilitate my team in selecting the most effective technology solution", value: "" },
          { question: "I source and implement technology to support organisational improvements", value: "" }
        ],
        "Be Proactive": [
          { question: "I recognise and respond to opportunities", value: "" },
          { question: "I encourage others to ‘go for it’ and follow up on opportunities without delay", value: "" },
          { question: "I ensure colleagues don’t waste time in taking advantage of opportunities", value: "" },
          { question: "I readily identify and draw on the resources I need to achieve a goal", value: "" },
          { question: "I make the necessary resources available to my team to ensure they maintain progress", value: "" },
          { question: "I quickly identify and mobilise resources to seize opportunities", value: "" },
          { question: "I keep moving forward readily work around obstacles", value: "" },
          { question: "I convey a sense of urgency to my team ensuring they understand timelines", value: "" },
          { question: "I inform organisation of the urgency and commit to deadlines", value: "" }
        ]
      };
      

// State to store the categories with dynamic answers
const [categories, setCategories] = useState(initialCategories);
// const [answers, setAnswers] = useState({})
// const [loading, setLoading] = useState(false)
// const [fetching, setFetching] = useState(loading)
const [surveyId, setSurveyId] = useState('')
 
const userId = localStorage.getItem('leadTheWayEmail')

const handleCardClick = (categoryName, questionIndex) => {
    setCategories((prevCategories) => {
      const updatedCategories = { ...prevCategories };
      const currentQuestion = updatedCategories[categoryName][questionIndex];
      if (currentQuestion.value === "") {
        currentQuestion.value = "Yes";
      } else if (currentQuestion.value === "Yes") {
        currentQuestion.value = "No";
      } 
      else if (currentQuestion.value === "No") {
        currentQuestion.value = "";
      }

      return updatedCategories;
    });
  };

  // Check if a question is answered "Yes"
  // const isAnsweredYes = (category, question) => {
  //   return answers[category + question] === 'Yes';
  // };
  const handleSubmit = async() => {
    // setLoading(true)
    
    try {
      if(surveyId){
        await updateSurvey({ ...categories, userId, _id: surveyId });
       
      }
      else{
       const res = await createSurvey({ ...categories, userId });
       console.log({res})
       setSurveyId(res.data.survey._id)
      }
      // setLoading(false)
      
    } catch (err) {
      console.error({ err });
      // setLoading(false)
    }
  };

  useEffect(() => {
    const fetchUserSurvey = async () => {
      if(!userId) return
      try {
        const res = await getUserSurvey(userId);
        if(res.status === 200){
          const userSurvey = res.data
          const {createdAt,
            isCompleted,
            updatedAt,
            userId,
            __v,
            _id,...rest
            } = userSurvey
            setSurveyId(_id)
        setCategories(rest)
        }
        
        
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserSurvey();
  }, [userId]);
  return (
    <>
    <div className="submit"><button onClick={handleSubmit}>Submit</button></div>
    <div className="grid-container">
      {Object.keys(categories).map((categoryName, index) => (
        <div key={index} className="category">
          <h2>{categoryName}</h2>
          <div className="questions-grid">
            {categories[categoryName].map((item, qIndex) => (
              <div key={qIndex} className={item?.value === 'Yes' ? "answered-yes question" : item?.value === 'No' ? 'answered-no question' : "question"} data-tooltip-id="my-tooltip"
              data-tooltip-content={`${item?.question}${index}`} onClick={()=>handleCardClick(categoryName,qIndex)}>
                {item?.question}
              </div>
            ))}
          </div>
        </div>
      ))}
       {/* <Tooltip place="top" type="dark" effect="solid" id={"my-tooltip"} /> */}
    </div>
    </>
  );
};

export default Competency;
