/**
 * main.js
 */

import {Person} from "./model/person.js";
import { Employee } from "./model/model/employee.js";

const person = [
    //new Intl.DateTimeFormat('en-US').format(date)
    new Person("Ana Smith", new Intl.DateTimeFormat('en-US').format(1998-12-15)),
    new Person("Bob Jone", new Intl.DateTimeFormat('en-US').format(1945-11-16)),
    new Person("Carlos Slim Helu", new Intl.DateTimeFormat('en-US').format(1976-9-24))
];

person.forEach(a => console.log(a.toString()));


const employee = new Employee("Jim Hanson", null, 245.990, null );
console.log(employee);
let data=employee.doJob("Software Engineer");
console.log(data);

