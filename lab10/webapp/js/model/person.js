/**
 * person.js
 * @author Heran
 * @since 2022-03-10
 */

export class Person{
    constructor(name, dateOfBirth){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    getName(){return this.name;}
    getDateOfBirth(){return this.dateOfBirth;}
    setName(newName){
        this.name = newName;
    }
    setDateOfBirth(dateOfBirth){
        this.dateOfBirth = dateOfBirth;
    }
    toString(){
        
        return `{Name: ${this.name}, DateOfBirth:${this.dateOfBirth}}`;
    }

}
