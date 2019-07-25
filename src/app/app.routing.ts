import { Routes, RouterModule } from '@angular/router';
import { DemandesComponent } from './components/demandes/demandes.component';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
    { path: '', redirectTo: '/demandes', pathMatch: 'full'},
    { path: 'demandes', component: DemandesComponent }
    // { path: 'login', component: LoginComponent },
    // {path: 'principal', component: PrincipalComponent, children: [
    //     { path: 'fournisseurs', component: FournisseursComponent, outlet: 'child1' },
    //     { path: 'employees', component: EmployeesComponent, outlet: 'child1' },
    //     { path: 'stock', component: StockComponent, outlet: 'child1' },
    //     { path: 'conges', component: CongesComponent, outlet: 'child1' },
    //     { path: 'comptabilite', component: ComptabiliteComponent, outlet: 'child1' },
    //     { path: 'rapports', component: RapportsComponent, outlet: 'child1' },
    //     { path: 'caisse', component: CaisseComponent, outlet: 'child1'},
    //     { path: 'conf', component: ConfigurationsComponent, outlet: 'child1'},
    //     { path: 'categories', component: CategoriesComponent, outlet: 'child1'},
    //     { path: 'profil', component: MonProfilComponent, outlet: 'child1'},
    //     { path: 'calender', component: CalenderComponent, outlet: 'child1'}
    // ]}
    ] ;

    export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
