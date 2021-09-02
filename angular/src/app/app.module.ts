import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HeroDetailComponent } from './hero-detail.component';
import { downgradeComponent, getAngularJSGlobal } from '@angular/upgrade/static';

const angular = getAngularJSGlobal()
angular.module('todoApp')
  .directive(
    'heroDetail',
    downgradeComponent({ component: HeroDetailComponent })
  );

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['todoApp']);
  }
}

