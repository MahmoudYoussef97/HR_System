<<<<<<< HEAD
import http from "./httpServices";
import { apiUrl } from "../config.json";

function employeeUrl(mail) {
  return `${apiUrl}/${mail}`;
}

export function getEmployees() {
  return http.get(apiUrl);
}

export function getEmployee(employeeMail) {
  return http.get(employeeUrl(employeeMail));
}

export function saveEmployee(employee) {
  if (employee._id) {
    const body = { ...employee };
    delete employee._id;
    return http.put(employeeUrl(employee._id), body);
  }

  return http.post(apiUrl, employee);
}

export function addEmployee(emp) {
  console.log(emp);
  return http.post(apiUrl, emp);
}

export function deleteEmployee(employeeMail) {
  return http.delete(apiUrl, { data: { email: employeeMail } });
}
||||||| merged common ancestors
=======
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
>>>>>>> cd8599dcb38db6b8823920709b439d3a936dddf5
