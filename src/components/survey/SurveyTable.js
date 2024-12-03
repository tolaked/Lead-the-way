
import React, { useEffect, useState } from 'react';
import './survey.css'
import { getSurveryResults } from '../../api/fetchAPI';

// Sample data: an array of survey responses
// const surveyDataArray = [
//   {
//     _id: "6707ca3e533abb058c66d3a4",
//     isCompleted: false,
//     "Focus on outcomes": {
//       questions: [
//         {
//           name: "directorate",
//           title: "What Directorate are you part of?",
//           value: "Technology & Transformation"
//         },
//         {
//           name: "teamCategory",
//           title: "What team are you part of?",
//           value: "Development and Automation"
//         },
//         {
//           name: "clearGoals",
//           title: "I am clear on my goals, targets and performance expectations?",
//           value: "Yes"
//         }
//       ]
//     },
//     "Implement Effective Process": {
//       questions: [
//         {
//           name: "necessarySystems",
//           title: "I use necessary systems and structures to ensure I operate effectively?",
//           value: "Yes"
//         },
//         {
//           name: "createProcedures",
//           title: "I work with my team to create procedures that enable them to work effectively?",
//           value: "Yes"
//         },
//         {
//           name: "structureTeam",
//           title: "I structure teamwork requirements into programmes, projects and initiatives?",
//           value: "Yes"
//         }
//       ]
//     },
//     "Be accountable and take ownership": {
//       questions: [
//         {
//           name: "personalResponsibility",
//           title: "I accept personal responsibility for all my commitments?",
//           value: "No"
//         },
//         {
//           name: "collectiveAccountability",
//           title: "I hold my team collectively accountable for their delivery?",
//           value: "No"
//         },
//         {
//           name: "creatureCulture",
//           title: "I create a culture in which all staff accept personal accountability?",
//           value: "No"
//         }
//       ]
//     }
//   },
//   // Two more survey objects can go here with different data, similar to the one above
//   {
//     _id: "6707ca3e533abb058c66d3b7",
//     isCompleted: false,
//     "Focus on outcomes": {
//       questions: [
//         {
//           name: "directorate",
//           title: "What Directorate are you part of?",
//           value: "Customer Experience"
//         },
//         {
//           name: "teamCategory",
//           title: "What team are you part of?",
//           value: "Customer Support"
//         },
//         {
//           name: "clearGoals",
//           title: "I am clear on my goals, targets and performance expectations?",
//           value: "No"
//         }
//       ]
//     },
//     "Implement Effective Process": {
//       questions: [
//         {
//           name: "necessarySystems",
//           title: "I use necessary systems and structures to ensure I operate effectively?",
//           value: "No"
//         },
//         {
//           name: "createProcedures",
//           title: "I work with my team to create procedures that enable them to work effectively?",
//           value: "Yes"
//         },
//         {
//           name: "structureTeam",
//           title: "I structure teamwork requirements into programmes, projects and initiatives?",
//           value: "Yes"
//         }
//       ]
//     },
//     "Be accountable and take ownership": {
//       questions: [
//         {
//           name: "personalResponsibility",
//           title: "I accept personal responsibility for all my commitments?",
//           value: "Yes"
//         },
//         {
//           name: "collectiveAccountability",
//           title: "I hold my team collectively accountable for their delivery?",
//           value: "Yes"
//         },
//         {
//           name: "creatureCulture",
//           title: "I create a culture in which all staff accept personal accountability?",
//           value: "No"
//         }
//       ]
//     }
//   },
//   {
//     _id: "6707ca3e533abb058c66d3b8",
//     isCompleted: true,
//     "Focus on outcomes": {
//       questions: [
//         {
//           name: "directorate",
//           title: "What Directorate are you part of?",
//           value: "Finance and Business Services"
//         },
//         {
//           name: "teamCategory",
//           title: "What team are you part of?",
//           value: "Accounting"
//         },
//         {
//           name: "clearGoals",
//           title: "I am clear on my goals, targets and performance expectations?",
//           value: "Yes"
//         }
//       ]
//     },
//     "Implement Effective Process": {
//       questions: [
//         {
//           name: "necessarySystems",
//           title: "I use necessary systems and structures to ensure I operate effectively?",
//           value: "Yes"
//         },
//         {
//           name: "createProcedures",
//           title: "I work with my team to create procedures that enable them to work effectively?",
//           value: "No"
//         },
//         {
//           name: "structureTeam",
//           title: "I structure teamwork requirements into programmes, projects and initiatives?",
//           value: "Yes"
//         }
//       ]
//     },
//     "Be accountable and take ownership": {
//       questions: [
//         {
//           name: "personalResponsibility",
//           title: "I accept personal responsibility for all my commitments?",
//           value: "Yes"
//         },
//         {
//           name: "collectiveAccountability",
//           title: "I hold my team collectively accountable for their delivery?",
//           value: "No"
//         },
//         {
//           name: "creatureCulture",
//           title: "I create a culture in which all staff accept personal accountability?",
//           value: "Yes"
//         }
//       ]
//     }
//   }
// ];

const SurveyTable = () => {
    const [surveyDataArray, setSurveyDataArray] = useState([
        {
            "Focus on outcomes": {
                "questions": [
                    {
                        "choices": [
                            "Asset Strategy & Capital Delivery",
                            "Customer Delivery",
                            "Customer Experience ",
                            "Finance and Business Services",
                            "General Management",
                            "Health & Safety",
                            "Technology & Transformation",
                            "People",
                            "Regulation & Strategy"
                        ],
                        "_id": "6707ca3e533abb058c66d3a5",
                        "name": "directorate",
                        "title": "What Directorate are you part of?",
                        "isRequired": true,
                        "value": "Technology & Transformation"
                    },
                    {
                        "choices": [],
                        "_id": "6707ca3e533abb058c66d3a6",
                        "name": "teamCategory",
                        "title": "What team are you part of?",
                        "isRequired": true,
                        "value": "Development and Automation"
                    },
                    {
                        "choices": [
                            "Yes",
                            "No"
                        ],
                        "_id": "6707ca3e533abb058c66d3a7",
                        "name": "clearGoals",
                        "title": "I am clear on my goals, targets and performance expectations?",
                        "isRequired": true,
                        "value": "Yes"
                    },
                    {
                        "choices": [
                            "Yes",
                            "No"
                        ],
                        "_id": "6707ca3e533abb058c66d3a8",
                        "name": "targets",
                        "title": "I agree clear targets with my team?",
                        "isRequired": true,
                        "value": "Yes"
                    },
                    {
                        "choices": [
                            "Yes",
                            "No"
                        ],
                        "_id": "6707ca3e533abb058c66d3a9",
                        "name": "challengingGoals",
                        "title": "I set challenging goals for the organisation?",
                        "isRequired": true,
                        "value": "No"
                    },
                    {
                        "choices": [
                            "Yes",
                            "No"
                        ],
                        "_id": "6707ca3e533abb058c66d3aa",
                        "name": "communicateObjectives",
                        "title": "I define and communicate objective measures to quantify performance expectations?",
                        "isRequired": true,
                        "value": "Yes"
                    },
                    {
                        "choices": [
                            "Yes",
                            "No"
                        ],
                        "_id": "6707ca3e533abb058c66d3ab",
                        "name": "conveyClarity",
                        "title": "I convey with clarity my expectations of the team’s performance?",
                        "isRequired": true,
                        "value": "Yes"
                    },
                    {
                        "choices": [
                            "Yes",
                            "No"
                        ],
                        "_id": "6707ca3e533abb058c66d3ac",
                        "name": "definePerformance",
                        "title": " I help define the organisation’s critical performance targets?",
                        "isRequired": true,
                        "value": "No"
                    },
                    {
                        "choices": [
                            "Yes",
                            "No"
                        ],
                        "_id": "6707ca3e533abb058c66d3ad",
                        "name": "prioritiseTime",
                        "title": " I prioritise my time and resources based on agreed outcomes?",
                        "isRequired": true,
                        "value": "No"
                    },
                    {
                        "choices": [
                            "Yes",
                            "No"
                        ],
                        "_id": "6707ca3e533abb058c66d3ae",
                        "name": "prioritiseResources",
                        "title": "I have clarity on how and why to prioritise resources in different areas of the organisation?",
                        "isRequired": true,
                        "value": "Yes"
                    },
                    {
                        "choices": [
                            "Yes",
                            "No"
                        ],
                        "_id": "6707ca3e533abb058c66d3af",
                        "name": "mobiliseResourse",
                        "title": "I mobilise the resources need to meet the agreed outcomes?",
                        "isRequired": true,
                        "value": "Yes"
                    },
                    {
                        "choices": [
                            "Yes",
                            "No"
                        ],
                        "_id": "6707ca3e533abb058c66d3b0",
                        "name": "useofTechnology",
                        "title": " I make use of technology solutions to streamline my work?",
                        "isRequired": true,
                        "value": "Yes"
                    }
                ]
            },
            "Implement Effective Process": {
                "questions": [
                    {
                        "choices": [
                            "Yes",
                            "No"
                        ],
                        "_id": "6707ca3e533abb058c66d3b1",
                        "name": "necessarySystems",
                        "title": "I use necessary systems and structures to ensure I operate effectively?",
                        "isRequired": true,
                        "value": "Yes"
                    },
                    {
                        "choices": [
                            "Yes",
                            "No"
                        ],
                        "_id": "6707ca3e533abb058c66d3b2",
                        "name": "createProcedures",
                        "title": "I work with my team to create procedures that enable them to work effectively?",
                        "isRequired": true,
                        "value": "Yes"
                    },
                    {
                        "choices": [
                            "Yes",
                            "No"
                        ],
                        "_id": "6707ca3e533abb058c66d3b3",
                        "name": "structureTeam",
                        "title": "I structure teamwork requirements into programmes, projects and initiatives?",
                        "isRequired": true,
                        "value": "Yes"
                    }
                ]
            },
            "Be accountable and take ownership": {
                "questions": [
                    {
                        "choices": [
                            "Yes",
                            "No"
                        ],
                        "_id": "6707ca3e533abb058c66d3b4",
                        "name": "personalResponsibility",
                        "title": "I accept personal responsibility for all my commitments?",
                        "isRequired": true,
                        "value": "No"
                    },
                    {
                        "choices": [
                            "Yes",
                            "No"
                        ],
                        "_id": "6707ca3e533abb058c66d3b5",
                        "name": "collectiveAccountability",
                        "title": "I hold my team collectively accountable for their delivery?",
                        "isRequired": true,
                        "value": "No"
                    },
                    {
                        "choices": [
                            "Yes",
                            "No"
                        ],
                        "_id": "6707ca3e533abb058c66d3b6",
                        "name": "creatureCulture",
                        "title": "I create a culture in which all staff accept personal accountability ?",
                        "isRequired": true,
                        "value": "No"
                    }
                ]
            },
            // "isCompleted": false,
            // "_id": "6707ca3e533abb058c66d3a4",
            // "userId": "tola.akere@affinitywater.co.uk",
            // "createdAt": "2024-10-10T12:36:14.246Z",
            // "updatedAt": "2024-10-10T12:36:14.247Z",
            // "__v": 0
        }
    ])
    const [loading, setLoading] = useState(false)
    
  useEffect(() => {
    const fetchUserSurvey = async () => {
        setLoading(true)
      try {
        const { data } = await getSurveryResults();
        console.log(data)

        // const { createdAt, isCompleted, updatedAt, userId, __v, _id, ...rest } = data || {} ;

        setSurveyDataArray(data);
        setLoading(false)
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserSurvey();
  }, []);
  const renderTableHeader = () => {
    return (
        <>
     {!loading ? (
        <thead>
        <tr>
          {Object.keys(surveyDataArray[0]).map((category, index) => {
            if (category !== "_id" && category !== "isCompleted" && category !== "__v" && category !== "updatedAt" && category !== "createdAt" && category !=="userId") {
              return (
                <th key={index} colSpan={surveyDataArray[0][category]?.questions?.length}>
                  {category}
                </th>
              );
            }
            return null;
          })}
        </tr>
        <tr>
          {Object.keys(surveyDataArray[0]).map((category) => {
            if (category !== "_id" && category !== "isCompleted" && category !== "__v" && category !== "updatedAt" && category !== "createdAt" && category !=="userId") {
              return surveyDataArray[0][category].questions.map((question, index) => (
                <th key={index}>{question.title}</th>
              ));
            }
            return null;
          })}
        </tr>
      </thead>) : null}
      </>
    );
  };

  const renderTableBody = () => {
    return (
        <>
     {!loading ? <tbody>
        {surveyDataArray?.map((surveyData, surveyIndex) => (
          <tr key={surveyIndex}>
            {Object.keys(surveyData).map((category) => {
              if (category !== "_id" && category !== "isCompleted" && category !== "__v" && category !== "updatedAt" && category !== "createdAt" && category !=="userId") {
                return surveyData[category].questions.map((question, index) => (
                  <td key={index}>{question.value}</td>
                ));
              }
              return null;
            })}
          </tr>
        ))}
      </tbody> : null}
      </>
    );
  };

  return (
    <div className="survey-table">
    { !loading ?  <table border="1">
        {renderTableHeader()}
        {renderTableBody()}
      </table> : null}
    </div>
  );
};

export default SurveyTable;
