import { createStore } from "redux";

import { reducers } from "./reducers/index";

//Not use middleware
const store = createStore(reducers, {});

export default store;
