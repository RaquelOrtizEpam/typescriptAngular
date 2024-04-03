import { Company, CompanyLocationArray, CompanyLocationLocalStorage } from './BritishCompany';
import { Employee } from './EuropeCompany';


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
