export interface ProductsEntreprise {
    id: number;
    title: string;
    description: string;
    price: number;
    qtite: number;
    imageUrl: string;
}

export const productsEntreprises = [
    {
        id: 1,
        title: "Cart Entreprise",
        description: " Ne vous contentez pas de vous fondre dans le réseau, de vousdémarquer et de faire une bonne première impression.Convertissez d’autres demandes de renseignements en sauvegardant vos renseignements dans un endroit où les gens passent la plupart de leur temps... leur téléphone!",
        price: 5000,
        qtite: 4,
        imageUrl: "https://cdn.shopify.com/s/files/1/0263/6156/1168/products/Hybrid-Card-metal_one_343x.gif?v=1634592363",
    },
    {
        id: 2,
        title: "Cart Particulier",
        description: " Ne vous contentez pas de vous fondre dans le réseau, de vousdémarquer et de faire une bonne première impression.Convertissez d’autres demandes de renseignements en sauvegardant vos renseignements dans un endroit où les gens passent la plupart de leur temps... leur téléphone!",
        price: 1000,
        qtite: 3,
        imageUrl: "https://cdn.shopify.com/s/files/1/0263/6156/1168/products/Hybrid-Card-metal_one_343x.gif?v=1634592363",
    }
]
export class ProductsParticulier {
    id!: number;
    name!: string;
    description!: string;
    price!: number;
    qtite!: number;
    imageUrl!: string;

    constructor(id, name = "Cart", description = "", price = 0, qtite = 0, imageUrl = "https://cdn.shopify.com/s/files/1/0263/6156/1168/products/Hybrid-Card-metal_one_560x560_crop_center.gif?v=1634592363") {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}
