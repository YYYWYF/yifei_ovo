import { init, RematchDispatch, RematchRootState } from "@rematch/core";
import { createBrowserHistory } from "history";
import { RootModel } from "../types/model";
import { models } from "./models";
import logger from "redux-logger";
import { connectRouter, routerMiddleware } from "connected-react-router";
import immerPlugin from "@rematch/immer";
import loadingPlugin, { ExtraModelsFromLoading } from "@rematch/loading";

export const history = createBrowserHistory();

type FullModel = ExtraModelsFromLoading<RootModel>;
const store = init<RootModel, FullModel>({
  models,
  redux: {
    reducers: {
      router: connectRouter(history),
    },
    middlewares: [logger, routerMiddleware(history)],
  },
  plugins: [immerPlugin(), loadingPlugin()],
});

export default store;

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
