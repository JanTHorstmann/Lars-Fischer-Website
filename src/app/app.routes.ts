import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Imprint } from './shared/components/imprint/imprint';
import { PrivacyPolicy } from './shared/components/privacy-policy/privacy-policy';


export const routes: Routes = [
    { path: '', component: Dashboard },
    { path: 'imprint', component: Imprint },
    { path: 'privacy-policy', component: PrivacyPolicy },
    { path: '**', redirectTo: '' },
];
