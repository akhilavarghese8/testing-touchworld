// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { EmployeeservicesService } from 'src/app/services/employeeservices.service';

// @Component({
//   selector: 'app-employee-list',
//   templateUrl: './employee-list.component.html',
//   styleUrls: ['./employee-list.component.scss']
// })
// export class EmployeeListComponent implements OnInit {
//   employees: any[] = [];
//   filteredEmployees: any[] = [];
//   paginatedEmployees: any[] = [];
//   rowsPerPage: number = 10; // Rows per page for pagination (except the first page)
//   currentPage: number = 0; // Current page index
//   totalEmployees: number = 0; // Total number of employees

//   constructor(private employeeService: EmployeeservicesService, private router: Router) {}


//   ngOnInit(): void {
//     try {
//       // Fetch employees from the service
//       this.employees = this.employeeService.getEmployees();
//       this.filteredEmployees = [...this.employees];
//       this.totalEmployees = this.filteredEmployees.length;

//       // Load the first 15 employees initially (considering 0-based indexing)
//       this.paginatedEmployees = this.filteredEmployees.slice(0, 15);
//     } catch (error) {
//       console.error('Error fetching employees:', error);
//     }
//   }

//   onPageChange(event: any): void {
//     const pageIndex = event.page;
//     const startIndex = pageIndex * this.rowsPerPage;
//     const endIndex = startIndex + this.rowsPerPage;

//     this.paginatedEmployees = this.filteredEmployees.slice(startIndex, endIndex);
//     this.currentPage = pageIndex;
//   }
//   addEmployee(): void {
//     this.router.navigate(['employee/add']);
//   }

//   deleteEmployee(index: number): void {
//     try {
//       const employeeToDelete = this.paginatedEmployees[index];
//       const globalIndex = this.filteredEmployees.findIndex(emp => emp === employeeToDelete);

//       if (globalIndex > -1) {
//         this.employeeService.deleteEmployee(globalIndex); // Delete employee in service
//         this.employees = this.employeeService.getEmployees(); // Refresh all employees
//         this.filteredEmployees = [...this.employees]; // Update filtered list
//         this.totalEmployees = this.filteredEmployees.length;

//         // Reset pagination
//         this.onPageChange({ page: this.currentPage });
//       }
//     } catch (error) {
//       console.error('Error deleting employee:', error);
//     }
//   }

//   filterEmployees(event: any): void {
//     const searchValue = event.target.value.toLowerCase().trim();

//     if (searchValue.length >= 3) {
//       this.filteredEmployees = this.employees.filter(employee =>
//         Object.values(employee).some(value =>
//           String(value).toLowerCase().includes(searchValue)
//         )
//       );
//     } else {
//       this.filteredEmployees = [...this.employees];
//     }

//     this.totalEmployees = this.filteredEmployees.length;

//     // Reset pagination to the first page
//     this.onPageChange({ page: 0 });
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { EmployeeservicesService } from 'src/app/services/employeeservices.service';

// @Component({
//   selector: 'app-employee-list',
//   templateUrl: './employee-list.component.html',
//   styleUrls: ['./employee-list.component.scss']
// })


// export class EmployeeListComponent implements OnInit {
//   employees: any[] = []; // All employees fetched from the service
//   paginatedEmployees: any[] = []; // Employees currently displayed on the page
//   rowsPerPage: number = 10; // Rows per page for subsequent pages
//   initialLoadCount: number = 15; // Rows for the first page
//   currentPage: number = 0; // Current page index
//   totalEmployees: number = 0; // Total number of employees

//   constructor(private employeeService: EmployeeservicesService, private router: Router) {}

//   ngOnInit(): void {
//     this.loadEmployees();
//   }

//   loadEmployees(): void {
//     try {
//       // Fetch employees from the service
//       this.employees = this.employeeService.getEmployees();
//       this.totalEmployees = this.employees.length;

//       // Load initial data for the first page
//       this.paginatedEmployees = this.employees.slice(0, this.initialLoadCount);
//     } catch (error) {
//       console.error('Error loading employees:', error);
//     }
//   }

//   onPageChange(event: any): void {
//     const pageIndex = event.page;

//     if (pageIndex === 0) {
//       // First page: Display first 15 employees
//       this.paginatedEmployees = this.employees.slice(0, this.initialLoadCount);
//     } else {
//       // Subsequent pages: Show 10 employees per page
//       const startIndex = this.initialLoadCount + (pageIndex - 1) * this.rowsPerPage;
//       const endIndex = startIndex + this.rowsPerPage;

//       this.paginatedEmployees = this.employees.slice(startIndex, endIndex);
//     }

//     this.currentPage = pageIndex;
//   }

//   addEmployee(): void {
//     this.router.navigate(['employee/add']);
//   }

//   deleteEmployee(index: number): void {
//     const globalIndex =
//       this.currentPage === 0
//         ? index
//         : this.initialLoadCount + (this.currentPage - 1) * this.rowsPerPage + index;

//     if (globalIndex > -1) {
//       this.employeeService.deleteEmployee(globalIndex); // Delete the employee from the service
//       this.loadEmployees(); // Reload the employees
//       this.onPageChange({ page: this.currentPage }); // Refresh current page
//     }
//   }

//   filterEmployees(event: any): void {
//     const searchValue = event.target.value.toLowerCase().trim();

//     if (searchValue.length >= 3) {
//       this.employees = this.employeeService.getEmployees().filter(employee =>
//         Object.values(employee).some(value =>
//           String(value).toLowerCase().includes(searchValue)
//         )
//       );
//     } else {
//       this.employees = this.employeeService.getEmployees();
//     }

//     this.totalEmployees = this.employees.length;

//     // Reset pagination to the first page after filtering
//     this.onPageChange({ page: 0 });
//   }
// }



// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { EmployeeservicesService } from 'src/app/services/employeeservices.service';

// @Component({
//   selector: 'app-employee-list',
//   templateUrl: './employee-list.component.html',
//   styleUrls: ['./employee-list.component.scss']
// })
// export class EmployeeListComponent implements OnInit {
//   employees: any[] = []; // All employees fetched from the service
//   paginatedEmployees: any[] = []; // Employees currently displayed on the page
//   rowsPerPage: number = 10; // Rows per page for subsequent pages
//   initialLoadCount: number = 15; // Rows for the first page
//   currentPage: number = 0; // Current page index
//   totalEmployees: number = 0; // Total number of employees

//   constructor(private employeeService: EmployeeservicesService, private router: Router) {}

//   ngOnInit(): void {
//     this.loadEmployees();
//   }

//   loadEmployees(): void {
//     try {
//       // Fetch employees from the service
//       this.employees = this.employeeService.getEmployees();
//       this.totalEmployees = this.employees.length;

//       // Load initial data for the first page
//       this.paginatedEmployees = this.employees.slice(0, this.initialLoadCount);
//       console.log(this.paginatedEmployees,'this.paginatedEmployees ');
//     } catch (error) {
//       console.error('Error loading employees:', error);
//     }
//   }

//   // onPageChange(event: any): void {
//   //   console.log('Page change triggered', event); // Test log
//   //   debugger;

//   //   const pageIndex = event.page;

//   //   if (pageIndex === 0) {
//   //     // First page: Display first 15 employees
//   //     this.paginatedEmployees = this.employees.slice(0, this.initialLoadCount);
//   //     console.log(this.paginatedEmployees,'this.paginatedEmployeesinside ');
//   //   } else {
//   //     // Subsequent pages: Show 10 employees per page
//   //     const startIndex = this.initialLoadCount + (pageIndex - 1) * this.rowsPerPage;
//   //     const endIndex = startIndex + this.rowsPerPage;

//   //     this.paginatedEmployees = this.employees.slice(startIndex, endIndex);
//   //   }

//   //   this.currentPage = pageIndex;
//   //   console.log( this.currentPage,' this.currentPage ');
//   // }


//   onPageChange(event: any): void {
//     console.log('Page change event:', event); // Log the event structure
//     debugger;

//     if (event && event.page !== undefined) {
//       const pageIndex = event.page;

//       if (pageIndex === 0) {
//         this.paginatedEmployees = this.employees.slice(0, this.initialLoadCount);
//       } else {
//         const startIndex = this.initialLoadCount + (pageIndex - 1) * this.rowsPerPage;
//         const endIndex = startIndex + this.rowsPerPage;
//         this.paginatedEmployees = this.employees.slice(startIndex, endIndex);
//       }

//       this.currentPage = pageIndex;
//     } else {
//       console.error('Event structure is not as expected');
//     }
//   }


//   addEmployee(): void {
//     this.router.navigate(['employee/add']);
//   }

//   deleteEmployee(index: number): void {
//     const globalIndex = this.currentPage === 0
//       ? index
//       : this.initialLoadCount + (this.currentPage - 1) * this.rowsPerPage + index;

//     if (globalIndex > -1) {
//       this.employeeService.deleteEmployee(globalIndex); // Delete the employee from the service
//       this.loadEmployees(); // Reload the employees
//       this.onPageChange({ page: this.currentPage }); // Refresh current page
//     }
//   }

//   filterEmployees(event: any): void {
//     const searchValue = event.target.value.toLowerCase().trim();

//     if (searchValue.length >= 3) {
//       this.employees = this.employeeService.getEmployees().filter(employee =>
//         Object.values(employee).some(value =>
//           String(value).toLowerCase().includes(searchValue)
//         )
//       );
//     } else {
//       this.employees = this.employeeService.getEmployees();
//     }

//     this.totalEmployees = this.employees.length;

//     // Reset pagination to the first page after filtering
//     this.onPageChange({ page: 0 });
//   }
// }



// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { EmployeeservicesService } from 'src/app/services/employeeservices.service';

// @Component({
//   selector: 'app-employee-list',
//   templateUrl: './employee-list.component.html',
//   styleUrls: ['./employee-list.component.scss']
// })
// export class EmployeeListComponent implements OnInit {
//   employees: any[] = []; // All employees fetched from the service
//   paginatedEmployees: any[] = []; // Employees currently displayed on the page
//   rowsPerPage: number = 10; // Rows per page for subsequent pages
//   initialLoadCount: number = 15; // Rows for the first page
//   currentPage: number = 0; // Current page index
//   totalEmployees: number = 0; // Total number of employees

//   constructor(private employeeService: EmployeeservicesService, private router: Router) {}

//   ngOnInit(): void {
//     this.loadEmployees();
//   }

//   loadEmployees(): void {
//     try {
//       // Fetch employees from the service
//       this.employees = this.employeeService.getEmployees();
//       console.log('Fetched employees:', this.employees);  // Log to verify data
//       this.totalEmployees = this.employees.length;

//       // Initial page load
//       this.onPageChange({ page: 0 }); // Load the first page on initialization
//     } catch (error) {
//       console.error('Error loading employees:', error);
//     }
//   }

//   onPageChange(event: any): void {
//     console.log('Page change event:', event); // Log the event structure

//     const pageIndex = event.page;

//     // Calculate the start and end index for pagination
//     const startIndex = pageIndex * this.rowsPerPage;
//     const endIndex = startIndex + this.rowsPerPage;

//     // Load the required slice of employees based on pagination
//     this.paginatedEmployees = this.employees.slice(startIndex, endIndex);
//     this.currentPage = pageIndex;
//     console.log('Paginated employees:', this.paginatedEmployees); // Log paginated data
//   }

//   addEmployee(): void {
//     this.router.navigate(['employee/add']);
//   }

//   deleteEmployee(index: number): void {
//     const globalIndex = this.currentPage === 0
//       ? index
//       : this.initialLoadCount + (this.currentPage - 1) * this.rowsPerPage + index;

//     if (globalIndex > -1) {
//       this.employeeService.deleteEmployee(globalIndex); // Delete the employee from the service
//       this.loadEmployees(); // Reload the employees
//       this.onPageChange({ page: this.currentPage }); // Refresh current page
//     }
//   }

//   filterEmployees(event: any): void {
//     const searchValue = event.target.value.toLowerCase().trim();

//     if (searchValue.length >= 3) {
//       this.employees = this.employeeService.getEmployees().filter(employee =>
//         Object.values(employee).some(value =>
//           String(value).toLowerCase().includes(searchValue)
//         )
//       );
//     } else {
//       this.employees = this.employeeService.getEmployees();
//     }

//     this.totalEmployees = this.employees.length;

//     // Reset pagination to the first page after filtering
//     this.onPageChange({ page: 0 });
//   }
// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeservicesService } from 'src/app/services/employeeservices.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = []; // All employees fetched from the service
  paginatedEmployees: any[] = []; // Employees currently displayed on the page
  rowsPerPage: number = 10; // Rows per page for subsequent pages
  initialLoadCount: number = 15; // Rows for the first page
  currentPage: number = 0; // Current page index
  totalEmployees: number = 0; // Total number of employees

  constructor(private employeeService: EmployeeservicesService, private router: Router) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    try {
      // Fetch employees from the service
      this.employees = this.employeeService.getEmployees();
      console.log('Fetched employees:', this.employees);  // Log to verify data
      this.totalEmployees = this.employees.length;

      // Load the first 15 employees for the initial page
      if (this.employees.length > 0) {
        this.paginatedEmployees = this.employees.slice(0, this.initialLoadCount);
      }
    } catch (error) {
      console.error('Error loading employees:', error);
    }
  }

  onPageChange(event: any): void {
    console.log('Page change event:', event); // Log the event structure

    const pageIndex = event.page;

    // Check if we're on the first page and display the first 15 employees
    if (pageIndex === 0) {
      this.paginatedEmployees = this.employees.slice(0, this.initialLoadCount);
    } else {
      // Calculate the start and end index for pagination for subsequent pages
      const startIndex = this.initialLoadCount + (pageIndex - 1) * this.rowsPerPage;
      const endIndex = startIndex + this.rowsPerPage;

      // Load the required slice of employees based on pagination
      this.paginatedEmployees = this.employees.slice(startIndex, endIndex);
    }

    this.currentPage = pageIndex;
    console.log('Paginated employees:', this.paginatedEmployees); // Log paginated data
  }

  addEmployee(): void {
    this.router.navigate(['employee/add']);
  }

  deleteEmployee(index: number): void {
    const globalIndex = this.currentPage === 0
      ? index
      : this.initialLoadCount + (this.currentPage - 1) * this.rowsPerPage + index;

    if (globalIndex > -1) {
      this.employeeService.deleteEmployee(globalIndex); // Delete the employee from the service
      this.loadEmployees(); // Reload the employees
      this.onPageChange({ page: this.currentPage }); // Refresh current page
    }
  }

  filterEmployees(event: any): void {
    const searchValue = event.target.value.toLowerCase().trim();

    if (searchValue.length >= 3) {
      this.employees = this.employeeService.getEmployees().filter(employee =>
        Object.values(employee).some(value =>
          String(value).toLowerCase().includes(searchValue)
        )
      );
    } else {
      this.employees = this.employeeService.getEmployees();
    }

    this.totalEmployees = this.employees.length;

    // Reset pagination to the first page after filtering
    this.onPageChange({ page: 0 });
  }
}

