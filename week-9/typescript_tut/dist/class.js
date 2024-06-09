"use strict";
class industry {
    constructor(industryId, address) {
        this.address = address;
        this.industryId = industryId;
    }
}
class Product extends industry {
    constructor(productId, price, feature, mrp, industryId, batchNumber, address) {
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
    set makeFeature(word) {
        this.feature = word;
    }
}
const dell = new Product(123, 1200, "12gb RAM", 1500, 3467);
// console.log(dell.giveMrp);
dell.feature = "OLED display";
// console.log(dell.feature);
