export const surveyJson = {
  // title: "Customer Satisfaction Survey",
  showProgressBar: "top",
  pages: [
   
    {
      title: "Focus on outcomes",
      questions: [
        {
          type: "dropdown",
          name: "directorate",
          title: "What Directorate are you part of?",
          isRequired: true,
          choices: [
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
        },
        {
          type: "text",
          name: "teamCategory",
          title:
            "What team are you part of?",
          isRequired: true,
          value: "Yes",
        },
        {
          type: "radiogroup",
          name: "clearGoals",
          title:
            "I am clear on my goals, targets and performance expectations?",
          isRequired: true,
          choices: ["Yes", "No"],
          value: "Yes",
        },
        {
          type: "radiogroup",
          name: "targets",
          title: "I agree clear targets with my team?",
          isRequired: true,
          choices: ["Yes", "No"],
        },
        {
          type: "radiogroup",
          name: "challengingGoals",
          title: "I set challenging goals for the organisation?",
          isRequired: true,
          choices: ["Yes", "No"],
        },
        {
          type: "radiogroup",
          name: "communicateObjectives",
          title:
            "I define and communicate objective measures to quantify performance expectations?",
          isRequired: true,
          choices: ["Yes", "No"],
        },
        {
          type: "radiogroup",
          name: "conveyClarity",
          title:
            "I convey with clarity my expectations of the team’s performance?",
          isRequired: true,
          choices: ["Yes", "No"],
        },
        {
          type: "radiogroup",
          name: "definePerformance",
          title:
            " I help define the organisation’s critical performance targets?",
          isRequired: true,
          choices: ["Yes", "No"],
        },
        {
          type: "radiogroup",
          name: "prioritiseTime",
          title:
            " I prioritise my time and resources based on agreed outcomes?",
          isRequired: true,
          choices: ["Yes", "No"],
        },

        {
          type: "radiogroup",
          name: "prioritiseResources",
          title:
            "I have clarity on how and why to prioritise resources in different areas of the organisation?",
          isRequired: true,
          choices: ["Yes", "No"],
        },
        {
          type: "radiogroup",
          name: "mobiliseResourse",
          title: "I mobilise the resources need to meet the agreed outcomes?",
          isRequired: true,
          choices: ["Yes", "No"],
        },

        {
          type: "radiogroup",
          name: "useofTechnology",
          title: " I make use of technology solutions to streamline my work?",
          isRequired: true,
          choices: ["Yes", "No"],
        },
      ],
    },
    {
      title: "Implement Effective Process",
      questions: [
        {
          type: "radiogroup",
          name: "necessarySystems",
          title:
            "I use necessary systems and structures to ensure I operate effectively?",
          isRequired: true,
          choices: ["Yes", "No"],
        },
        {
          type: "radiogroup",
          name: "createProcedures",
          title:
            "I work with my team to create procedures that enable them to work effectively?",
          isRequired: true,
          choices: ["Yes", "No"],
        },
        {
          type: "radiogroup",
          name: "structureTeam",
          title:
            "I structure teamwork requirements into programmes, projects and initiatives?",
          isRequired: true,
          choices: ["Yes", "No"],
        },
      ],
    },
    {
      title: "Be accountable and take ownership",
      questions: [
        {
          type: "radiogroup",
          name: "personalResponsibility",
          title: "I accept personal responsibility for all my commitments?",
          isRequired: true,
          choices: ["Yes", "No"],
        },
        {
          type: "radiogroup",
          name: "collectiveAccountability",
          title: "I hold my team collectively accountable for their delivery?",
          isRequired: true,
          choices: ["Yes", "No"],
        },
        {
          type: "radiogroup",
          name: "creatureCulture",
          title:
            "I create a culture in which all staff accept personal accountability ?",
          isRequired: true,
          choices: ["Yes", "No"],
        },
      ],
    },
  ],
};


