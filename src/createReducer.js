export const createReducer = (actionHandlers) => (state, action) => {
    const handler = actionHandlers[action.type];
    if (!handler) {
      console.warn(`Unhandled action type: ${action.type}`);
      return state;
    }
    return handler(state, action.payload || {});
  };
  