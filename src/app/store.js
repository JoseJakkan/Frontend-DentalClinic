// @redux
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import storage from "redux-persist/lib/storage";

// reducers
import authReducer from "../features/login/authSlice";
import appointmentReducer from "../features/appointment/appoSlice";
import doctorReducer from "../features/doctors/doctorSlice";

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["auth", "appointment"],
};

const authPersistConfig = {
  key: "auth",
  storage: sessionStorage,
};

const appoPersistConfig = {
  key: "appointment",
  storage: sessionStorage,
};

const docPersistConfig = {
  key: "doctor",
  storage: sessionStorage,
};

// ----------------------------------------------------------------------

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  appointment: persistReducer(appoPersistConfig, appointmentReducer),
  doctor: persistReducer(docPersistConfig, doctorReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [],
});

export const persistor = persistStore(store);
