import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './@shared/navbar/navbar.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TitleComponent } from './@shared/title/title.component';
import { ResumeBlocComponent } from './pages/resume/resume-bloc/resume-bloc.component';
import { StackComponent } from './@shared/stack/stack.component';
import { PortfolioBlocComponent } from './pages/portfolio/portfolio-bloc/portfolio-bloc.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioModalComponent } from './pages/portfolio/portfolio-modal/portfolio-modal.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SkillsComponent } from './pages/skills/skills.component';
import { SkillsBlocComponent } from './pages/Skills/skills-bloc/skills-bloc.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent,
    TitleComponent,
    ResumeBlocComponent,
    StackComponent,
    PortfolioBlocComponent,
    PortfolioModalComponent,
    SkillsComponent,
    SkillsBlocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    NgbModalModule,
    PerfectScrollbarModule,
    NgxSkeletonLoaderModule,
    NgbModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
