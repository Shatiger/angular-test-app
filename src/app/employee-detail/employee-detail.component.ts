import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employeeId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.employeeId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.employeeId = id;
    });
  }

  goPrevious() {
    let previousId = this.employeeId - 1;
    this.router.navigate(['/employees', previousId]);
  }

  goNext() {
    let nextId = this.employeeId + 1;
    this.router.navigate(['/employees', nextId]);
  }

  goToEmployees() {
    let selectedId = this.employeeId ? this.employeeId : null;
    this.router.navigate(['/employees', {id: selectedId}]);
  }

}
