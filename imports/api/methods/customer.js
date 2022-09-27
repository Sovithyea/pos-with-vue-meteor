import {Meteor} from 'meteor/meteor'
import { Category, Customer } from '../collections/collections'

Meteor.methods({
    'customer.insert'(doc) {
        return Customer.insert(doc)
    },
    'customer.find'() {
        return Customer.find().fetch()
    },
    'customer.remove'(id) {
        return Customer.remove({_id:id})
    },
    'customer.update'(doc) {
        return Customer.update({_id: doc._id}, {$set:doc})
    },
    'customer.category' () {
        let data = []
        Customer.find().fetch().forEach(it => {
            it.category = Category.findOne({customerId: it._id})
            data.push(it)
        })
        return data;
    }
})