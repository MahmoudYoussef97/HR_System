import http from "./httpServices";
import { reportUrl } from "../config.json";

export function sendReport(report, jwt) {
  return http
    .post(reportUrl, report, { headers: { "x-auth-token": jwt } })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      alert(error.response.data);
      return error.response.data;
    });
}
