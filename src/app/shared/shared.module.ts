import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { ProgressIndicatorComponent } from './components/progress-indicator/progress-indicator.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    LoginComponent,
    ToolbarComponent,
    ProgressIndicatorComponent,
    ConfirmDialogComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, RouterModule],
  exports: [
    ToolbarComponent,
    ConfirmDialogComponent,
    ProgressIndicatorComponent,
  ],
  entryComponents: [ConfirmDialogComponent],
})
export class SharedModule {}
