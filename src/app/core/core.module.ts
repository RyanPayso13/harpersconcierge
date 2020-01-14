import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { InputComponent } from "../input/input.component";
import { GraphComponent } from "../graph/graph.component";

@NgModule({
  declarations: [InputComponent, GraphComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [InputComponent, GraphComponent]
})
export class CoreModule {}
