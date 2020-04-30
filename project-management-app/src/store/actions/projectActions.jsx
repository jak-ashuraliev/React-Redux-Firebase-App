export const createProject = (project) => {
  return (dispatch, getState) => {
    // make async call to datebase
    dispatch({ type: "CREATE_PROJECT", project: project });
  };
};
