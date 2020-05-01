const initState = {
  projects: [
    {
      id: "1",
      title: "First Title",
      content: "Some content goes here.",
    },
    {
      id: "2",
      title: "Second Title",
      content: "Some content goes here.",
    },
    {
      id: "3",
      title: "Third Title",
      content: "Some content goes here.",
    },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("Created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("Create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
