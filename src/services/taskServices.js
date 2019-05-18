import http from "./httpServices";
import { taskUrl } from "../config.json";

export function getTasks(jwt) {
  return http.get(taskUrl, { headers: { "x-auth-token": jwt } });
}

export function addTask(task, jwt) {
  return http
    .post(taskUrl, task, { headers: { "x-auth-token": jwt } })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      alert(error.response.data);
      return error.response.data;
    });
}

export function updateEmployee(task, status, jwt) {
  return http
    .put(taskUrl, task, { headers: { "x-auth-token": jwt } })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      alert(error.response.data);
      return error.response.data;
    });
}
