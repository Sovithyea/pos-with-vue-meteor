import { Export, Purchase } from "../collections/collections";
import { Meteor } from "meteor/meteor"
Meteor.methods({
    "invoice.number"() {
        return Export.find().count() + 1;
    },
    "invoice.insert"(doc) {
        doc.items.forEach((item) => {
            let purchaseDoc = Purchase.findOne({ itemId: item._id });
            purchaseDoc.qty -= item.qty
            Purchase.update({ _id: purchaseDoc._id }, {$set: purchaseDoc})
        });
        return Export.insert(doc)
    }
})