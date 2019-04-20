import http from "./httpServices";
import { apiUrl } from "../config.json";

function employeeUrl(id) {
  return `${apiUrl}/${id}`;
}

export function getEmployees() {
  return http.get(apiUrl);
}

export function getEmployee(employeeId) {
  return http.get(employeeUrl(employeeId));
}

export function saveEmployee(employee) {
  if (employee._id) {
    const body = { ...employee };
    delete employee._id;
    return http.put(employeeUrl(employee._id), body);
  }

  return http.post(apiUrl, employee);
}

export function deleteEmployee(employeeId) {
  return http.delete(employeeUrl(employeeId));
}
