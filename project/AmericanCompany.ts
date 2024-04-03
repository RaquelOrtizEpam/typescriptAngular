interface IEmployee {
    getCurrentProject(): string;
    getName(): string;
}


class Frontend implements IEmployee {
    constructor(private name: string, private currentProject: string) {}

    getCurrentProject(): string {
        return this.currentProject;
    }

    getName(): string {
        return this.name;
    }
}

class Backend implements IEmployee {
    constructor(private name: string, private currentProject: string) {}

    getCurrentProject(): string {
        return this.currentProject;
    }

    getName(): string {
        return this.name;
    }
}


class Company {
    private employees: IEmployee[] = [];

    add(employee: IEmployee): void {
        this.employees.push(employee);
    }

    getProjectList(): string[] {
        return this.employees.map(employee => employee.getCurrentProject());
    }

    getNameList(): string[] {
        return this.employees.map(employee => employee.getName());
    }
}


const frontendEmployee1: IEmployee = new Frontend("Hanna", "Project A");
const frontendEmployee2: IEmployee = new Frontend("Helen", "Project B");
const backendEmployee1: IEmployee = new Backend("Patrick", "Project A");
const backendEmployee2: IEmployee = new Backend("Eve", "Project C");


const americanCompany: Company = new Company();


americanCompany.add(frontendEmployee1);
americanCompany.add(frontendEmployee2);
americanCompany.add(backendEmployee1);
americanCompany.add(backendEmployee2);


console.log("Project List:", americanCompany.getProjectList());
console.log("Name List:", americanCompany.getNameList());
