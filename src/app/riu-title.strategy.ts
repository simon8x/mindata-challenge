import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable()
export class RiuTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(state: RouterStateSnapshot): void {
    const page = this.buildTitle(state);
    this.title.setTitle(page == null ? 'RIU' : `RIU — ${page}`);
  }
}