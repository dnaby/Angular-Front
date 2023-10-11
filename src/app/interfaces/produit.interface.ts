export interface IProduit {
    id?: number;
    nom?: string;
    marqueId?: number;
    categorieId?: number;
    anneeModel?: number;
    prixDepart?: number;
    categorie?: {
        id?: number;
        nom?: string;
    };
    marque?: {
        id?: number;
        nom?: string;
    };
}