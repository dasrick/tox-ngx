import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[toxNavDropdown]',

  // host: {
  //   '[class.open]': '_open',
  // }
})
export class NavDropdownDirective {

  @HostBinding('class.open') open = true;

  private _open = false;

  /**
  * Checks if the dropdown menu is open or not.
  */
  isOpen() { return this._open; }

  /**
  * Opens the dropdown menu.
  */
  doOpen() {
    this._open = true;
  }

  /**
  * Closes the dropdown menu .
  */
  close() {
    this._open = false;
  }

  /**
  * Toggles the dropdown menu.
  */
  toggle() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.doOpen();
    }
  }
}

/**
* Allows the dropdown to be toggled via click.
*/
@Directive({
  selector: '[toxNavDropdownToggle]',
})
export class NavDropdownToggleDirective {
  constructor(private dropdown: NavDropdownDirective) {}

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    this.dropdown.toggle();
  }
}

export const NAV_DROPDOWN_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];
// export const NGB_DROPDOWN_DIRECTIVES = [NgbDropdownToggle, NgbDropdown];
