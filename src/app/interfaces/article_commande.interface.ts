import { ICommande } from "./commande.interface";
import { IProduit } from "./produit.interface";

export interface IArticleCommande {
    id?: {
        ligne?: number;
        numero_commande?: number;
    };
    produitId?: number;
    quantite?: number;
    prixDepart?: number;
    remise?: number;
    produit?: IProduit;
    commande?: ICommande;
}