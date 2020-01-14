import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { WordService } from "../services/word.service";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"]
})
export class ChartComponent implements OnInit {
  graphData: any = {};
  totalWords: number = 0;
  subscription: Subscription;

  constructor(private wordService: WordService) {
    this.subscription = this.wordService.getSentence().subscribe(sentence => {
      if (sentence) {
        this.graphData = this.wordService.convertSentenceForGraph(
          sentence.sentence
        );
        this.totalWords = Object.keys(this.graphData).length;
      }
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  calculateBarPercentage(value: number): String {
    return `${(value / this.totalWords) * 100}%`;
  }
}
