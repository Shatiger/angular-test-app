import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public selectedId;
  public employees = [
    {id: 1, name: "Andrew", age: 22},
    {id: 2, name: "Steve", age: 25},
    {id: 3, name: "Leroy", age: 30},
    {id: 4, name: "David", age: 35}
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(employee) {
    this.router.navigate(['/employees', employee.id]);
  }

}
