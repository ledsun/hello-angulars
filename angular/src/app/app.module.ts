import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppComponent } from './app.component';
import { downgradeComponent, getAngularJSGlobal } from '@angular/upgrade/static';

const angular = getAngularJSGlobal()
angular.module('angularjs',[])
  .directive(
    'echo',
    downgradeComponent({ component: AppComponent })
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
    this.upgrade.bootstrap(document.body, ['angularjs']);
  }
}

