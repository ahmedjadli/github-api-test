import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reposReducer from "./repos/reducer";
import userReducer from "./user/reducer";

const persistConfig = {
  key: "root",
  storage,
};

const createStoreWithMiddlware = applyMiddleware(thunk)(createStore);

const reducer = combineReducers({
  repos: reposReducer,
  user: userReducer,
});

const store = createStoreWithMiddlware(
  persistReducer(persistConfig, reducer),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
