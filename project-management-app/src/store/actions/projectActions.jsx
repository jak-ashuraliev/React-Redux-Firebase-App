export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "John",
        authorLastName: "Smith",
        authorId: 123,
        createdAt: new Date(),
      })
      .then(() => {
        // make async call to datebase
        dispatch({ type: "CREATE_PROJECT", project: project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
