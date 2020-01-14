import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { WordService } from "../services/word.service";

@Component({
  selector: "app-graph",
  templateUrl: "./graph.component.html",
  styleUrls: ["./graph.component.scss"]
})
export class GraphComponent implements OnInit {
  subscription: Subscription;

  constructor(private wordService: WordService) {
    this.subscription = this.wordService.getSentence().subscribe(sentence => {
      if (sentence) {
        console.log(
          this.wordService.convertSentenceForGraph(sentence.sentence)
        );
      }
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
