import { IProduit } from "./produit.interface";
import { IStore } from "./store.interface";

export interface IStock {
    id?: {
        magasinId?: number;
        produitId?: number;
    };
    produit?: IProduit;
    magasin?: IStore;
    quantite?: number;
}