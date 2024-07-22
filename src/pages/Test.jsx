// // function debounce(fn, ms) {
// //   let timerId = null;
// //   return function (...args) {
// //     if (timerId) {
// //       clearTimeout(timerId);
// //     }
// //     timerId = setTimeout(fn, ms, ...args);
// //   };
// // }

// import { createSlice } from '@reduxjs/toolkit';
// import { createStore } from 'redux';

// const advertsInitialState = {
//   adverts: [],
// };

// const initialState = {
//   todos: [
//     { id: 12531267, text: 'Learn React', completed: true },
//     { id: 1566, text: 'Learn Redux', completed: false, color: 'purple' },
//     { id: 24377878, text: 'Build something fun!', completed: false, color: 'blue' },
//   ],
//   sum: 0,
//   filters: {
//     status: 'All',
//     colors: [],
//   },
//   adverts: advertsInitialState,
// };

// const advertSlice1 = createSlice({
//   name: 'adverts',
//   initialState: advertsInitialState,
// });

// const advertSlice = {
//   name: 'adverts',
//   reducer: (state = advertsInitialState, action) => {
//     switch (action.type) {
//       case 'adverts/advertAdded': {
//         return {
//           ...state,
//           adverts: [
//             ...state.adverts,
//             {
//               id: state.adverts.length,
//               text: action.payload,
//               completed: false,
//             },
//           ],
//         };
//       }
//       case 'adverts/advertToggled': {
//         return {
//           ...state,
//           adverts: state.adverts.map(advert => {
//             if (advert.id !== action.payload) {
//               return advert;
//             }
//             return {
//               ...advert,
//               completed: !advert.completed,
//             };
//           }),
//         };
//       }

//       case 'filters/statusFilterChanged': {
//         return {
//           // Copy the whole state
//           ...state,
//           // Overwrite the filters value
//           filters: {
//             // copy the other filter fields
//             ...state.filters,
//             // And replace the status field with the new value
//             status: action.payload,
//           },
//         };
//       }
//       case 'adverts/advertDelete': {
//         return {
//           ...state,
//           adverts: state.adverts
//             .filter(advert => advert.id !== action.payload)
//             .map((advert, index) => {
//               return { ...advert, id: index };
//             }),
//         };
//       }
//       case 'adverts/reverseOrder': {
//         const n = state.adverts.length - 1;
//         const adverts = state.adverts;
//         for (let i = 0; i <= n / 2; i++) {
//           const advert = adverts[i];
//           adverts[i] = adverts[n - i];
//           adverts[n - i] = advert;
//         }
//         return {
//           ...state,
//           adverts: [...adverts],
//         };
//       }
//     }
//   },
//   actions: {},
// };

// // Use the initialState as a default value
// function appReducer(state = initialState, action) {
//   switch (action.type) {
//     case action.type.startsWith('adverts'): {
//       return advertSlice.reducer(state.adverts, action);
//     }
//     case 'todos/todoAdded': {
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             id: state.todos.length,
//             text: action.payload,
//             completed: false,
//           },
//         ],
//       };
//     }
//     case 'todos/todoToggled': {
//       return {
//         ...state,
//         todos: state.todos.map(todo => {
//           if (todo.id !== action.payload) {
//             return todo;
//           }
//           return {
//             ...todo,
//             completed: !todo.completed,
//           };
//         }),
//       };
//     }

//     case 'filters/statusFilterChanged': {
//       return {
//         // Copy the whole state
//         ...state,
//         // Overwrite the filters value
//         filters: {
//           // copy the other filter fields
//           ...state.filters,
//           // And replace the status field with the new value
//           status: action.payload,
//         },
//       };
//     }
//     case 'todos/todoDelete': {
//       return {
//         ...state,
//         todos: state.todos
//           .filter(todo => todo.id !== action.payload)
//           .map((todo, index) => {
//             return { ...todo, id: index };
//           }),
//       };
//     }
//     case 'todos/reverseOrder': {
//       const n = state.todos.length - 1;
//       const todos = state.todos;
//       for (let i = 0; i <= n / 2; i++) {
//         const todo = todos[i];
//         todos[i] = todos[n - i];
//         todos[n - i] = todo;
//       }
//       return {
//         ...state,
//         todos: todos.reverse(),
//       };
//     }
//     case 'todos/sortByText': {
//       return {
//         ...state,
//         todos: [...state.todos].sort((a, b) => a.text.localeCompare(b.text)),
//       };
//     }
//     case 'todos/sortById': {
//       return {
//         ...state,
//         todos: [...state.todos].sort((a, b) => a.id - b.id),
//       };
//     }

//     case 'addAB': {
//       return {
//         ...state,
//         sum: action.payload.a + action.payload.b,
//       };
//     }

//     default:
//       return state;
//   }
// }
// const store = createStore(appReducer);

// // Log the initial state
// // console.log('Initial state: ', store.getState());
// // {todos: [....], filters: {status, colors}}

// // Every time the state changes, log it
// // Note that subscribe() returns a function for unregistering the listener
// const unsubscribe = store.subscribe(() => console.log('State after dispatch: ', store.getState()));

// // Now, dispatch some actions
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' });

// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers' });
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores' });

// store.dispatch({ type: 'todos/test', payload: 'Learn about stores' });

// store.dispatch({ type: 'todos/todoToggled', payload: 0 });

// store.dispatch({ type: 'todos/todoToggled', payload: 1 });

// store.dispatch({ type: 'filters/statusFilterChanged', payload: 'Active' });

// store.dispatch({ type: 'todos/todoDelete', payload: 1 });

// store.dispatch({ type: 'todos/todoDelete', payload: 2 });

// store.dispatch({ type: 'addAB', payload: { a: 2, b: 5 } });

// store.dispatch({ type: 'todos/reverseOrder' });

// store.dispatch({ type: 'todos/sortByText' });

// // store.dispatch({
// //   type: 'filters/colorFilterChanged',
// //   payload: { color: 'red', changeType: 'added' },
// // });

// // Stop listening to state updates
// unsubscribe();

// // Dispatch one more action to see what happens

// store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating a store' });

// export default function Test() {
//   return <></>;
// }
// //===================
