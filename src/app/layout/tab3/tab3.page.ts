import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NotificationService } from '../../services/notification.service';
import { LoadingService } from '../../services/loading.service';
import { ApiService } from '../../services/api.service';
import { UserService } from 'src/app/services/user.service';
import { Factory, WorkStations } from 'src/app/entities/topglove.domain.model';
import { saveAs } from 'file-saver';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Size, TypeOfFormers } from '../../entities/topglove.domain.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  

  constructor(private toast: NotificationService,
    private loadingService: LoadingService,
    private apiService: ApiService,
    public userService: UserService) {
  }

  
}
