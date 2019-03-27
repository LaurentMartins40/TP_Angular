import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormationComponent } from './formation/formation.component';
import { InterpolateComponent } from './interpolate/interpolate.component';
import { InterpolateExtendComponent } from './interpolate-extends/interpolate-extend.component';
import { InterpolateOptionalComponent } from './interpolate-optional/interpolate-optional.component';
import { BindingComponent } from './binding/binding.component';
import { EvenementComponent } from './evenement/evenement.component';
import { VariableComponent } from './variable/variable.component';
import { DirectivesComponent } from './directives/directives.component';
import { StyleComponent } from './style/style.component';
import { FormationItemComponent } from './formation-item/formation-item.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LifecycleOnchangeComponent } from './lifecycle-onchange/lifecycle-onchange.component';

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    InterpolateComponent,
    InterpolateExtendComponent,
    InterpolateOptionalComponent,
    BindingComponent,
    EvenementComponent,
    VariableComponent,
    DirectivesComponent,
    StyleComponent,
    FormationItemComponent,
    LifecycleComponent,
    LifecycleOnchangeComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
