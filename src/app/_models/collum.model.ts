import { Action } from './action.model';
export interface Collum {
    title?: string;
    name: string;
    sort?: boolean;
    actions?: Action[];
    render?: any;
}
