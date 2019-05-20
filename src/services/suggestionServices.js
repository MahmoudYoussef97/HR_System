import http from "./httpServices";
import { suggestionUrl } from "../config.json";

export function sendSuggestion(suggestion, jwt) {
  return http
    .post(suggestionUrl, suggestion, { headers: { "x-auth-token": jwt } })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      alert(error.response.data);
      return error.response.data;
    });
}
