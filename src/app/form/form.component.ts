import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-form',
  standalone: false,

  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  formActionUrl?: string;

  ngOnInit(): void {
    
  }
}
