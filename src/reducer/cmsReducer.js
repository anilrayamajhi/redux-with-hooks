export const cmsReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "INIT":
      return { ...state, isLoading: true, isError: false };
    case "GET_CMS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false
      };
    default:
      throw new Error();
  }
};
