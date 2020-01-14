import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { WordService } from "../services/word.service";
import { InputComponent } from "../input/input.component";
import { ChartComponent } from "../chart/chart.component";

@NgModule({
  declarations: [InputComponent, ChartComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [InputComponent, ChartComponent],
  providers: [WordService]
})
export class CoreModule {}
