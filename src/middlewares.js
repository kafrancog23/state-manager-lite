export const applyMiddleware = (reducer, ...middlewares) => {
    return (state, action) => {
      middlewares.forEach((middleware) => middleware(action, state));
      return reducer(state, action);
    };
  };
  