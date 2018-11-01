import {InjectionToken} from '@angular/core';


export interface AppConfig {
    apiUrl:string;
    courseCacheSize:number;
}


export const APP_CONFIG:AppConfig = {
    apiUrl: 'http://localhost:9000',
    courseCacheSize: 10
}


export const CONFIG_TOKEN =
    new InjectionToken<AppConfig>('CONFIG_TOKEN',
        {
            providedIn: 'root',
            factory: () => APP_CONFIG
        });