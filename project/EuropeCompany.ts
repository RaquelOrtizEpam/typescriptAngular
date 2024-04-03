export class Employee {
    constructor(private name: string, private currentProject: string) {}

    getCurrentProject(): string {
        return this.currentProject;
    }

    getName(): string {
        return this.name;
    }
}

export class Company {
    private employees: Employee[] = [];

    add(employee: Employee): void {
        this.employees.push(employee);
    }

    getProjectList(): string[] {
        return this.employees.map(employee => employee.getCurrentProject());
    }

    getNameList(): string[] {
        return this.employees.map(employee => employee.getName());
    }
}

class Frontend extends Employee {
    constructor(name: string, currentProject: string) {
        super(name, currentProject);
    }
}

class Backend extends Employee {
    constructor(name: string, currentProject: string) {
        super(name, currentProject);
    }
}


const frontendEmployee1 = new Frontend("John", "Project A");
const frontendEmployee2 = new Frontend("Alice", "Project B");
const backendEmployee1 = new Backend("Bob", "Project A");
const backendEmployee2 = new Backend("Eve", "Project C");


const europeCompany = new Company();


europeCompany.add(frontendEmployee1);
europeCompany.add(frontendEmployee2);
europeCompany.add(backendEmployee1);
europeCompany.add(backendEmployee2);


console.log("Project List:", europeCompany.getProjectList());
console.log("Name List:", europeCompany.getNameList());
