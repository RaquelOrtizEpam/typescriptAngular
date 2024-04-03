import { Employee } from './EuropeCompany';
const fs = require('fs');


interface ILocation {
    addPerson(employee: Employee): void;
    getPerson(index: number): Employee;
    getCount(): number;
}

export class CompanyLocationArray implements ILocation {
    private employees: Employee[] = [];

    addPerson(employee: Employee): void {
        this.employees.push(employee);
    }

    getPerson(index: number): Employee {
        return this.employees[index];
    }

    getCount(): number {
        return this.employees.length;
    }
}
export class CompanyLocationLocalStorage implements ILocation {
    private filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    addPerson(employee: Employee): void {
        let employees: Employee[] = [];
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            employees = JSON.parse(data);
        } catch (err) {

        }
        employees.push(employee);
        fs.writeFileSync(this.filePath, JSON.stringify(employees));
    }

    getPerson(index: number): Employee {
        let employees: Employee[] = [];
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            employees = JSON.parse(data).map((employeeData: any) => new Employee(employeeData.name, employeeData.currentProject));
        } catch (err) {
        }
        return employees[index];
    }


    getCount(): number {
        let employees: Employee[] = [];
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            employees = JSON.parse(data);
        } catch (err) {

        }
        return employees.length;
    }
}


export class Company {
    private location: ILocation;

    constructor(location: ILocation) {
        this.location = location;
    }

    addEmployee(employee: Employee): void {
        this.location.addPerson(employee);
    }

    getProjectList(): string[] {
        const employees: Employee[] = [];
        const count: number = this.location.getCount();
        for (let i = 0; i < count; i++) {
            employees.push(this.location.getPerson(i));
        }

      return employees.map(employee => employee.getCurrentProject());
    }

    getNameList(): string[] {
        const employees: Employee[] = [];
        const count: number = this.location.getCount();
        for (let i = 0; i < count; i++) {
            employees.push(this.location.getPerson(i));
        }

        return employees.map((employee: Employee) => employee.getName());
    }
}

const company1: Company = new Company(new CompanyLocationArray());
company1.addEmployee(new Employee("John", "Project A"));
company1.addEmployee(new Employee("Alice", "Project B"));

console.log("Company 1 Project List:", company1.getProjectList());
console.log("Company 1 Name List:", company1.getNameList());


const company2: Company = new Company(new CompanyLocationLocalStorage('company2Employees'));

company2.addEmployee(new Employee("Bob", "Project X"));
company2.addEmployee(new Employee("Eve", "Project Y"));

console.log("Company 2 Project List:", company2.getProjectList());
console.log("Company 2 Name List:", company2.getNameList());
