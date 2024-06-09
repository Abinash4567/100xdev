interface IproductDetail {
    productId: number;
    price: number;       //always public
    feature: string;
    batchNumber?: number;
}

interface industry {
    address?: string;
    industryId: number;
}

class industry implements industry {
    constructor(industryId: number, address?: string) {
        this.address = address;
        this.industryId = industryId;
    }
}

class Product extends industry implements IproductDetail {
    productId: number;
    price: number;
    feature: string;
    batchNumber?: number | undefined;
    private mrp: number;

    constructor(productId: number, price: number, feature: string, mrp: number, industryId: number, batchNumber?: number, address?: string) {
        super(industryId, address);
        this.productId = productId;
        this.price = price;
        this.feature = feature;
        this.mrp = mrp;
        this.batchNumber = batchNumber;
    }

    get giveMrp() {
        return this.mrp;
    }

    set makeFeature(word: string){
        this.feature = word;
    }
}

const dell = new Product(123, 1200, "12gb RAM", 1500, 3467);
// console.log(dell.giveMrp);
dell.feature = "OLED display";
// console.log(dell.feature);