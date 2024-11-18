export type State = Record<string, any>;
export type Action = { type: string; payload?: any };
export type Reducer = (state: State, action: Action) => State;

export function createReducer(actionHandlers: Record<string, (state: State, payload?: any) => State>): Reducer;

export function applyMiddleware(reducer: Reducer, ...middlewares: Array<(action: Action, state: State) => void>): Reducer;

export function combineReducers(reducers: Record<string, Reducer>): Reducer;
