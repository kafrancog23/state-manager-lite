"use client";

import React, { createContext, useContext, useReducer } from 'react';

// Create context
const StateContext = createContext();

// Global state provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Hook to use the global state
export const useStateValue = () => useContext(StateContext);

// Reducer based on actionHandlers
export const createReducer = (actionHandlers) => (state, action) =>
  actionHandlers[action.type] ? actionHandlers[action.type](state) : state;

// Export additional functionalities if implemented
export { applyMiddleware } from './middlewares';
export { combineReducers } from './combineReducers';