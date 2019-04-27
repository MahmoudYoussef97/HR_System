import http from "./httpServices";
import {
  apiUrl
} from "../config.json";

function employeeUrl(mail) {
  return `${apiUrl}/${mail}`;
}

export function getEmployees() {
  return http.get(apiUrl);
}

export function getEmployee(employeeMail) {
  return http.get(employeeUrl(employeeMail));
}

export function updateEmployee(employee, mail) {
  let emp = {
    name: employee.name,
    email: mail,
    newMail: employee.email,
    password: employee.password,
    rePassword: employee.rePassword,
    phone: employee.phone
  };
  return http.put(apiUrl, emp);
}

export function addEmployee(emp) {
  console.log(emp);
  return http.post(apiUrl, emp);
}

export function deleteEmployee(employeeMail) {
  return http.delete(apiUrl, {
    data: {
      email: employeeMail
    }
  });
}