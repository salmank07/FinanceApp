import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { LoadingService } from '../../services/loading.service';
import { ApiService } from '../../services/api.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {


  productDetails: any;
  constructor(private toast: NotificationService,
    private loadingService: LoadingService, private router: Router,
    private apiService: ApiService,
    public userService: UserService) {

  }
  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    this.apiService.getProductDetails().subscribe(data => {
      this.productDetails = data;
      console.log(this.productDetails, 'data')
    })
  }
  onClickAdd() {
    this.router.navigate(['/tabs/tab4']);
  }

}
