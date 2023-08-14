interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    jobTitle: string;
    salary: number;
    race: string;
}

class HumanEmployee implements Employee {
    name: string;
    age: number;
    jobTitle: string;
    salary: number;
    race: string;
    gender: string;

    constructor(name: string, age: number, jobTitle: string, salary: number, race: string, gender: string) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
        this.salary = salary;
        this.race = race;
        this.gender = gender;
    }

    toString() {
        return `${ this.name } is a ${ this.age } year old ${ this.race } ${ this.gender } employee with job title ${ this.jobTitle } and salary ${ this.salary }.`;
    }
}

let human = new HumanEmployee("Leonardo Maximoff", 19, "Developer", 0, "Italian", "Male");
console.log(human.toString());