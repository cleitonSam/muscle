import { Routes } from '@angular/router';
import { MuscleComponent } from './components/muscle/muscle.component';
import { AbdomenComponent } from './components/abdomen/abdomen.component';
import { AbdomenDetailsComponent } from './components/abdomen/abdomen-details/abdomen-details.component';
import { BicepsComponent } from './components/biceps/biceps.component';
import { PanturrilhasComponent } from './components/panturrilhas/panturrilhas.component';
import { PeitoComponent } from './components/peito/peito.component';
import { OmbrosFrontaisComponent } from './components/ombros-frontais/ombros-frontais.component';
import { AntebracosComponent } from './components/antebracos/antebracos.component';
import { PosteriorCoxaComponent } from './components/posterior-coxa/posterior-coxa.component';
import { MaosComponent } from './components/maos/maos.component';
import { DorsaisComponent } from './components/dorsais/dorsais.component';
import { InferiorCostasComponent } from './components/inferior-costas/inferior-costas.component';
import { ObliqueComponent } from './components/oblique/oblique.component';
import { QuadricepsComponent } from './components/quadriceps/quadriceps.component';
import { OmbroTraseiroComponent } from './components/ombro-traseiro/ombro-traseiro.component';
import { TrapezioMedioComponent } from './components/trapezio-medio/trapezio-medio.component';
import { TrapezioComponent } from './components/trapezio/trapezio.component';
import { TricepsComponent } from './components/triceps/triceps.component';
import { GluteosComponent } from './components/gluteos/gluteos.component';
import { AntebracosDetailsComponent } from './components/antebracos/antebracos-details/antebracos-details.component';
import { BicepsDetailsComponent } from './components/biceps/biceps-details/biceps-details.component';
import { DorsaisDetailsComponent } from './components/dorsais/dorsais-details/dorsais-details.component';
import { GluteosDetailsComponent } from './components/gluteos/gluteos-details/gluteos-details.component';
import { InferiorCostasDetailsComponent } from './components/inferior-costas/inferior-costas-details/inferior-costas-details.component';
import { MaosDetailsComponent } from './components/maos/maos-details/maos-details.component';
import { ObliqueDetailsComponent } from './components/oblique/oblique-details/oblique-details.component';
import { OmbroTraseiroDetailsComponent } from './components/ombro-traseiro/ombro-traseiro-details/ombro-traseiro-details.component';
import { PeitoDetailsComponent } from './components/peito/peito-details/peito-details.component';
import { PanturrilhasDetailsComponent } from './components/panturrilhas/panturrilhas-details/panturrilhas-details.component';
import { OmbrosFrontaisDetailsComponent } from './components/ombros-frontais/ombros-frontais-details/ombros-frontais-details.component';
import { PosteriorCoxaDetailsComponent } from './components/posterior-coxa/posterior-coxa-details/posterior-coxa-details.component';




export const routes: Routes = [
    { path: '', component: MuscleComponent },
    { path: 'Abdômen', component: AbdomenComponent },
    { path: 'Bíceps', component: BicepsComponent },
    { path: 'Panturrilhas', component: PanturrilhasComponent },
    { path: 'Peito', component: PeitoComponent },
    { path: 'Antebraços', component: AntebracosComponent },
    { path: 'Ombros Frontais', component: OmbrosFrontaisComponent },
    { path: 'Posterior da Coxa', component: PosteriorCoxaComponent },
    { path: 'Maos', component: MaosComponent },
    { path: 'Dorsais', component: DorsaisComponent },
    { path: 'Parte Inferior Das Costas', component: InferiorCostasComponent },
    { path: 'Oblíque', component: ObliqueComponent },
    { path: 'Quadríceps', component: QuadricepsComponent },
    { path: 'Ombros Traseiros', component: OmbroTraseiroComponent },
    { path: 'Trapézios Médios', component: TrapezioMedioComponent },
    { path: 'Trapézios', component: TrapezioComponent },
    { path: 'Tríceps', component: TricepsComponent },
    { path: 'Glúteos', component: GluteosComponent },
    { path: 'exercise/:id', component: AbdomenDetailsComponent },
    { path: 'Antebraços/:id', component: AntebracosDetailsComponent },
    { path: 'Bíceps/:id', component: BicepsDetailsComponent },
    { path: 'Dorsais/:id', component: DorsaisDetailsComponent },
    { path: 'Glúteos/:id', component: GluteosDetailsComponent },
    { path: 'Parte Inferior Das Costas/:id', component: InferiorCostasDetailsComponent },
    { path: 'Maos/:id', component: MaosDetailsComponent },
    { path: 'Oblíque/:id', component: ObliqueDetailsComponent },
    { path: 'Ombros Traseiros/:id', component: OmbroTraseiroDetailsComponent },
    { path: 'Ombros Frontais/:id', component: OmbrosFrontaisDetailsComponent },
    { path: 'Panturrilhas/:id', component: PanturrilhasDetailsComponent },
    { path: 'Peito/:id', component: PeitoDetailsComponent },
    { path: 'Posterior da Coxa/:id', component: PosteriorCoxaDetailsComponent }

];
