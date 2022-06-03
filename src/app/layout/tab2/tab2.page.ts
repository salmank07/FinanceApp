import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { NotificationService } from '../../services/notification.service';
import { LoadingService } from '../../services/loading.service';
import { UserService } from 'src/app/services/user.service';
import { TopGlovEntity } from 'src/app/entities/topglove.model';
import * as moment from 'moment';
import { saveAs } from 'file-saver';
import { Factory, WorkStations } from 'src/app/entities/topglove.domain.model';
import { Size, TypeOfFormers } from '../../entities/topglove.domain.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  constructor(public modalController: ModalController,
    private router: Router,
    private apiService: ApiService,
    private toast: NotificationService,
    private loadingService: LoadingService,
    private userService: UserService) {
  }


}
