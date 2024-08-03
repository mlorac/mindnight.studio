import { HostListener, inject, Injectable } from '@angular/core';
import { WINDOW } from '../models';



@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  private _innerWidth = 0;
  private _isMobile = false;
  private _isTablet = false;
  private _window = inject(WINDOW);


  @HostListener('window:resize', ['$event'])
  onResize() {
    this._innerWidth = this._window.innerWidth;
    if (this._innerWidth < 576) {
      this._isMobile = true;
      this._isTablet = false;
    } else if (this._innerWidth >= 576 && this._innerWidth <= 991) {
      this._isTablet = true;
      this._isMobile = false;
    } else {
      this._isMobile = false;
      this._isTablet = false;
    }
  }

  get isMobile(): boolean {
    return this._isMobile;
  }

  get innerWidth(): number {
    return this._innerWidth;
  }

  get isTablet(): boolean {
    return this._isTablet;
  }
}
