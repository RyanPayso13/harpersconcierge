import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class WordService {
  private subject = new Subject<any>();
  private excludedWordsList = ["and", "the", "a", "an"];

  constructor() {}

  sendSentence(inputData): void {
    this.subject.next(inputData);
  }

  getSentence(): Observable<any> {
    return this.subject.asObservable();
  }

  convertSentenceForGraph(sentence: string): Object {
    let wordCount = sentence
      .trim()
      .split(" ")
      .filter(w => !this.excludedWordsList.includes(w.toLowerCase()))
      .reduce(function(acc, cur, idx, src) {
        acc[cur] = ++acc[cur] || 1;
        return acc;
      }, {});

    return wordCount;
  }
}
