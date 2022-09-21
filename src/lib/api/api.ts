import { Api } from "./generated-api";

export const api = new Api({
  baseURL: "/api",
  headers: {
    ["x-frontend-hostname"]: window.location.host,
  },
});
