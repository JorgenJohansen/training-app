import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() closeSidenav = new EventEmitter<void>();
  authSub!: Subscription;
  isAuth!: boolean;

  constructor(protected authService: AuthService) { }
  
  ngOnInit(): void {
    this.authSub = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }
  
  ngOnDestroy(): void {
    this.authSub.unsubscribe();
  }

  onClose(){
    this.closeSidenav.emit();
    this.authService.logout();
  }

}
