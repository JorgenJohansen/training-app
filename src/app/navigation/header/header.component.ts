import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  @Output() sideNavToggle = new EventEmitter<void>();
  authSub!: Subscription;
  isAuth!: boolean;

  constructor(protected authService: AuthService) { }

  ngOnInit(): void {
    this.authSub = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }
  onLogout(){
    this.authService.logout();
  }
  
  onToggleSidenav(){
    this.sideNavToggle.emit();
  }
  
  ngOnDestroy(): void {
    this.authSub.unsubscribe();
  }
}
