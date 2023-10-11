import { IStore } from "./store.interface";

export interface IEmploye {
    id?: number;
    prenom?: string;
    nom?: string;
    email?: string;
    telephone?: string;
    actif?: number;
    magasinId?: number;
    managerId?: number;
    magasin?: IStore;
    manager?: IEmploye;
}