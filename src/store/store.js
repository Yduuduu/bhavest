import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, PERSIST } from "redux-persist";
import coinNameSlice from "./coinNameSlice";

const reducers = combineReducers({
  coinName: coinNameSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["coinName"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

export default store;
