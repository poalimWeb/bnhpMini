import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgForContext , NgForOf} from './common.directive';
@NgModule({
    imports:[],
    declarations: [
        NgForContext,
        NgForOf
    ],
    exports: [
        NgForContext,
        NgForOf
    ]
})
export class DirectiveModule {
}