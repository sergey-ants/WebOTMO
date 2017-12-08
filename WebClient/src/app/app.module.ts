import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FlowsComponent } from './flows/flows.component';
import { FlowComponent } from './flows/flow.component';
import { ChartLayoutComponent } from './core/chart/layout/chartLayout.component';
import { ChartSidebarComponent } from './core/chart/sidebar/chartSidebar.component';
import { ChartComponent } from './core/chart/chart/chart.component';

import { AuthGuard } from './guards/auth.guard';
import { AlertService } from './services/alert.service';
import { UserService } from './services/user.service';
import { FlowService } from './services/flow.service';
import { AuthenticationService } from './services/authentication.service';
import { AppConfig } from './app.config';

import { IterablePipe } from './pipes/iterable.pipe';
import { CompileDirective } from './derectives/compile.directive';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FlowsComponent,
    ChartLayoutComponent,
    ChartSidebarComponent,
    ChartComponent,
    IterablePipe,
    FlowsComponent,
    FlowComponent,
    CompileDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    TabsModule.forRoot(),
    ChartsModule
  ],
  providers: [
    AppConfig,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    FlowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
