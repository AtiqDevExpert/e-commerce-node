// import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
// import thunk from "redux-thunk";
// import reducer from "./reducers/reducer";
// import { persistStore, persistReducer } from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
//     // Add blacklist/whitelist if needed
//     // blacklist: ['navigation'], // Example
//   };
//   const persistedReducer = persistReducer(persistConfig, reducer);
//   export const store = createStore(persistedReducer);
// export const persistor = persistStore(store);
// // const store = createStore(reducer, applyMiddleware(thunk, logger));

// export default store;
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./reducers/reducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk, logger));
  let persistor = persistStore(store);
  return { store, persistor };
};
