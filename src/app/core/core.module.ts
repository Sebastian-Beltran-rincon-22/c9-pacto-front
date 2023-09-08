import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { LoaderComponent } from './common/loader/loader.component';
import { SkeletonComponent } from './common/skeleton/skeleton.component';
import { ModalComponent } from './libs/modal.component';
import { Aside2Component } from './layout/aside2/aside2.component';
import { AsideComponent } from './layout/aside/aside.component';
import { HeaderComponent } from './layout/header/header.component';




@NgModule({
  declarations: [
    FooterComponent,
    LoaderComponent,
    SkeletonComponent,
    ModalComponent,
    Aside2Component,
    AsideComponent,
    HeaderComponent,
    HeaderComponent,

  ],
  imports: [
    CommonModule
  ],
  exports:[
    FooterComponent,
    LoaderComponent,
    SkeletonComponent,
    ModalComponent,
    HeaderComponent,
    
  ]
})

export class CoreModule { }
