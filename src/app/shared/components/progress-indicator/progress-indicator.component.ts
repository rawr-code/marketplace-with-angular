import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ProgressIndicatorService } from '../../services/progress-indicator.service';

@Component({
  selector: 'mk-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss'],
})
export class ProgressIndicatorComponent implements OnInit {
  inProgress: Subject<boolean> = this.service.inProgress;
  constructor(private service: ProgressIndicatorService) {}
  ngOnInit() {}
}
