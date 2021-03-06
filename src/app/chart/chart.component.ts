import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription, from } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";
import { WordService } from "../services/word.service";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"]
})
export class ChartComponent implements OnInit, OnDestroy {
  chartData: any = {};
  totalWords: number = 0;
  subscription: Subscription;

  constructor(private wordService: WordService) {
    this.subscription = this.wordService
      .getSentence()
      .pipe(distinctUntilChanged())
      .subscribe(sentence => {
        if (sentence) {
          this.chartData = this.wordService.convertSentenceForChart(
            sentence.sentence
          );
          this.totalWords = Object.keys(this.chartData).length;
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
