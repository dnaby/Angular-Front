import { IClient } from "./client.interface";
import { IEmploye } from "./employe.interface";
import { IStore } from "./store.interface";

export interface ICommande {
    id?: number;
    clientId?: number;
    statut?: number;
    dateCommande?: string;
    dateLivraison?: string;
    dateLivraisonVoulue?: string;
    magasinId?: number;
    vendeurId?: number;
    client?: IClient;
    magasin?: IStore;
    vendeur?: IEmploye;
}