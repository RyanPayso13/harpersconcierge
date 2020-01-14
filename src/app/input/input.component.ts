import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"]
})
export class InputComponent implements OnInit {
  inputForm;

  constructor(private formBuilder: FormBuilder) {
    this.inputForm = this.formBuilder.group({
      sentence: ""
    });
  }

  ngOnInit() {}

  onSubmit(sentenceData: string) {}
}
