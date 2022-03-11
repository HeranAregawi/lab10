/**
 * employee.js
 * @author Heran
 * @since 2022-03-10
 */

import { Person } from "../person.js";
export class Employee extends Person {
    constructor(name, dateOfBirth, salary, hireDate){
        super(name, dateOfBirth);
        this.salary = salary;
        this.hireDate = hireDate;
    }
    doJob(jobTtitle){
        return `${this.name} is a ${jobTtitle} who earns ${this.salary}`;
    }
} 