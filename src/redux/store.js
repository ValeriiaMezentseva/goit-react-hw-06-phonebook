import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import { persistedContactsReducer } from "./persistReducer";
 import { filterReducer } from "./slice/sliceFilter";


export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterReducer,
    },
     middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);