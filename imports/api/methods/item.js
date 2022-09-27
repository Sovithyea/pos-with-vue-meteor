import {Meteor} from 'meteor/meteor'
import { Category, Item } from '../collections/collections'

Meteor.methods({
    'item.insert'(doc) {
        return Item.insert(doc)
    },
    'item.find'() {
        let data = [

        ]
        Item.find().forEach((it) => {
            it.categoryName = Category.findOne({_id: it.categoryId}).name
            data.push(it)
        })
        return data
    },
    'item.remove'(id) {
        return Item.remove({_id:id})
    },
    'item.update'(doc) {
        return Item.update({_id: doc._id}, {$set:doc})
    },
})