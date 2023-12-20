import {configureStore} from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { Clientreducer } from "./Client";

const UserPersistStore = {
    key: "User",
    storage,
  };

  const UserpersistReducer = persistReducer(UserPersistStore, Clientreducer);
  export const store = configureStore({
    reducer: { Client: UserpersistReducer },
    // middleware: ()
  });
  export const persistor=persistStore(store);