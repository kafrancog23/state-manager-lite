export const combineReducers = (reducers) => (state, action) =>
    Object.keys(reducers).reduce(
      (nextState, key) => ({
        ...nextState,
        [key]: reducers[key](state[key], action),
      }),
      {}
    );
  