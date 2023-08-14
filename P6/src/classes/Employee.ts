import { Person } from "./Person";

export class Employee extends Person {

    company: string;

    constructor(name: string, gender: string, age: number, country: string, savings: number, company: string){
        super(name, gender, age, country, savings);
        this.company = company;

    }

    GetCompany() :string{
        return this.company;
    }

    SetCompany(company: string): void{
        this.company = company;
    }

    override toString(): string {
        return `This employee works in ${this.company}`;
    }
}