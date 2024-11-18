# State Manager Lite

**State Manager Lite** is a simple and lightweight state management library for React applications. Built with React's Context API and hooks, it simplifies global state management without the need for complex setups.

---

## ✨ Features

- 🪶 **Lightweight**: Minimal setup with no external dependencies.
- ⚛️ **React-Friendly**: Built using React Context API and hooks.
- 🔄 **Custom Reducers**: Easily define and combine state reducers.
- 🚀 **Extensible**: Perfect for small to medium-sized applications.

---

## 📦 Installation

Install the package via npm:

```bash
npm install state-manager-lite


  ## 🚀 Quick Start

### 1. Define Your Actions

Create an `actionHandlers.js` file:

export const actionHandlers = {
  increment: (state) => ({ ...state, count: state.count + 1 }),
  decrement: (state) => ({ ...state, count: state.count - 1 }),
};


### 2. Create a Reducer

Use `createReducer` to generate a reusable reducer:

import { createReducer } from 'state-manager-lite';
import { actionHandlers } from './actionHandlers';

const reducer = createReducer(actionHandlers);

### 3. Wrap Your App with `StateProvider`

Provide global state to your application:

import React from 'react';
import { StateProvider } from 'state-manager-lite';

const initialState = { count: 0 };

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Counter />
    </StateProvider>
  );
}

export default App;


### 4. Access State in Components

Use `useStateValue` to read and modify global state:

import React from 'react';
import { useStateValue } from 'state-manager-lite';

function Counter() {
  const [{ count }, dispatch] = useStateValue();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default Counter;

