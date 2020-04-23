import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const modules = [
    NgZorroAntdModule,
    BrowserAnimationsModule,
];

@NgModule({
    imports: [
       ...modules,
    ],
    declarations: [],
    exports: [
        ...modules,
    ],
    providers: [],
})
export class SharedModule {
    
}