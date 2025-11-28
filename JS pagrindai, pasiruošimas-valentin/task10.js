const employees = [
    { name: "Jonas", department: "IT", salary: 2000 },
    { name: "Ona", department: "HR", salary: 1800 },
    { name: "Petras", department: "IT", salary: 2200 },
    { name: "Greta", department: "HR", salary: 2100 }
];

function sortByDepartment(employeesArray) {
    return employeesArray.slice().sort((a, b) => {
        const departmentA = a.department.toUpperCase();
        const departmentB = b.department.toUpperCase();
        if (departmentA < departmentB) {
            return -1;
        }
        if (departmentA > departmentB) {
            return 1;
        }
        return 0;
    });
}
function sortBySalaryDescending(employeesArray) {
    return employeesArray.slice().sort((a, b) => {
        return b.salary - a.salary;
    });
}
const employeesByDepartment = sortByDepartment(employees);
console.log("Sorted by Department (alphabetical):", employeesByDepartment);

const employeesBySalaryDesc = sortBySalaryDescending(employees);
console.log("Sorted by Salary (descending):", employeesBySalaryDesc);
