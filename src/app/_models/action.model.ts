import { EventEmitter } from 'events';

export interface Action {
    text?: string;
    icon?: string; // icon in material
    event(...params: any): any;
}
