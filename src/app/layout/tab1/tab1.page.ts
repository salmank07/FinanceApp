import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { LoadingService } from '../../services/loading.service';
import { ApiService } from '../../services/api.service';
import { UserService } from 'src/app/services/user.service';
import { Factory, FiringOrRework, Size, TypeOfFormers, Defetcs, Shifts }
  from 'src/app/entities/topglove.domain.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  

  constructor(private toast: NotificationService,
    private loadingService: LoadingService,
    private apiService: ApiService,
    public userService: UserService) {

  }

  
}
