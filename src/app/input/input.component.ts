import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { WordService } from "../services/word.service";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"]
})
export class InputComponent implements OnInit {
  inputForm;

  constructor(
    private formBuilder: FormBuilder,
    private wordService: WordService
  ) {
    this.inputForm = this.formBuilder.group({
      sentence: ""
    });
  }

  ngOnInit() {}

  onSubmit(inputData): void {
    this.wordService.sendSentence(inputData);
  }
}
