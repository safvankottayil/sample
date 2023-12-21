import { Iterable } from "immutable";

import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

import { Clientreducer } from "./Client";

const UserPersistStore = {
  key: "User",
  storage,
};

const UserpersistReducer = persistReducer(UserPersistStore, Clientreducer);
export const store = configureStore({
  reducer: { Client: UserpersistReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
