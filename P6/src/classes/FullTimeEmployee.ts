import { Employee } from "./Employee";

export class FullTimeEmployee extends Employee {
    salary: number = 8000;
    vacation: number = 0;
    IsGood: boolean;
    faults: number;

    constructor(name: string, gender: string, age: number, country: string, savings: number, company: string){
        super(name, gender, age, country, savings, company);
    }

    CalculateSalary(): number {
        const discount = this.faults * 200;
        this.salary -= discount;

        if(this.salary < 1){
            this.salary = 0;
        }

        if(this.GetIsGood()){
            this.salary += 500;
        }

        return this.salary;
    }

    NewMonth() :void {
        this.SetSavings(this.CalculateSalary());
    }

    RequestVacation(vacation: number): void {
        if(this.vacation > 15){
            console.log("Ya has solicitado todas las vaciones de este mes")
        }else{
            this.vacation += vacation;
            console.log("Se ha autorizado tus vacaciones");
        }
    }

    GetIsGood(): boolean {
        return this.IsGood;
    }

    SetIsGood(good: boolean): void {
        this.IsGood = good;
    }
}