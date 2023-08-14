export class Person {
    name: string;
    gender: string;
    age: number;
    country: string;
    savings: number;

    constructor(name: string, gender: string, age: number, country: string, savings: number){
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.country = country;
        this.savings = savings;
    }

    GetName(): string{
        return this.name;
    }
    
    SetName(name: string): void{
        this.name = name;
    }

    GetGender() :string {
        return this.gender;
    }

    SetGender(gender: string): void{
        this.gender = gender;
    }

    GetAge(): number{
        return this.age;
    }

    SetAge(age: number): void{
        this.age += age;
    }

    GetCountry(): string{
        return this.country;
    }

    SetCountry(country: string): void{
        this.country = country;
    }

    GetSavings(): number {
        return this.savings;
    }

    SetSavings(salary: number): void {
        this.savings += salary;
    }

    toString(): string{
        return `The name of the person is ${this.name} and gender is ${this.gender}. The person's age: ${this.age} years old and 
            is living in ${this.country}`;
    }
}