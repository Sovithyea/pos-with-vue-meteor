<template>
  <div class="q-ma-md">
    <form @submit.prevent="handleSubmit">
        <q-card class="shadow-6">
            <q-card-section class="text-h5 text-center">
                Form Sale
            </q-card-section>
            <q-card-section>
                <div class="row items-center">
                    <div class="col-md-8 col-xs-12">
                        <div class="col-xs-12 col-sm-4 q-ma-sm">
                            <q-input
                                outlined
                                type="number"
                                readonly
                                v-model.number = 'form.invoiceNumber'
                                label="Invoice Number"
                            />
                        </div>
                        <div class="col-xs-12 col-sm-4 q-ma-sm">
                            <q-input
                                outlined
                                type="date"
                                readonly
                                v-model = 'form.date'
                                label="Date"
                            />
                        </div>
                        <div class="col-xs-12 col-sm-4 q-ma-sm">
                            <q-select
                                outlined
                                v-model = "form.customerId"
                                label="Customer"
                                :options="customerOpts"
                                map-options
                                emit-value
                                option-label="name"
                                option-value="_id"
                            />
                        </div>
                        <div class="col-xs-12 col-sm-4 q-ma-sm">
                            <q-select
                                outlined
                                v-model="form.item"
                                label="Item"
                                :options="itemOpts"
                                map-options
                                emit-value
                                option-label="name"
                                @input="handleChangeItem"
                            />
                        </div>
                    </div>
                    <div class="col-md-4 col-xs-12">
                        <div class="q-pa-xl">
                            <div class="text-h5 text-cent">
                                Total : {{ total() }}
                            </div>
                        </div>
                    </div>
                </div>
                <q-markup-table class="q-ma-md">
                    <thead>
                        <tr>
                            <th class="text-left">No</th>
                            <th class="text-left">Name</th>
                            <th class="text-left">Price</th>
                            <th class="text-left">Quantity</th>
                            <th class="text-left">Amount</th>
                            <th class="text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in form.items" :key="index">
                            <td class="text-left">{{index+1}}</td>
                            <td class="text-left">{{item.name}}</td>
                            <td class="text-left">{{item.price}}</td>
                            <td class="text-left" style="width: 150px">
                                <q-input type="number" v-model.number="item.qty"/>
                            </td>
                            <td class="text-left">{{item.price * item.qty}}</td>
                            <td class="text-left">
                                <q-btn color="red" icon="delete" dense flat @click="handleRemove(index)"/>
                            </td>
                        </tr>
                    </tbody>
                </q-markup-table>
                <div class="text-center q-ma-md">
                    <q-btn color="primary" type="submit" label="Submit"/>
                </div>
            </q-card-section>
        </q-card>
    </form>
  </div>
</template>

<script>
import moment from 'moment'

export default {
    data() {
        return {
            form: {
                invoiceNumber: null,
                date: moment(new Date()).format('YYYY-MM-DD'),
                customerId: null,
                items: [

                ]
            },
            customerOpts: [

            ],
            itemOpts: [

            ]
        }
    },
    methods: {
        clearForm() {
            this.form = {
                invoiceNumber: null,
                date:moment(new Date()).format('YYYY-MM-DD'),
                customerId: null,
                items: [

                ]
            },
            this.items = null,
            this.getInvoiceNumber();
        },
        handleSubmit() {
            let doc = {
                invoiceNumber: this.form.invoiceNumber,
                customerId: this.form.customerId,
                date: moment(this.form.date, "YYYY-MM-DD").toDate(),
                items: [

                ]
            };

            this.form.items.forEach((it) => {
                doc.items.push({
                    _id: it._id,
                    price: it.price,
                    qty: it.qty
                });
            });

            console.log('doc', doc);
            this.clearForm();
        },
        handleRemove(index) {
            this.form.items.splice(index, 1)
        },
        getInvoiceNumber() {
            this.form.invoiceNumber=1
        },
        total() {
            let total = 0;
            this.form.items.forEach((it) => {
                total += it.price * it.qty
            })
            return total
        },
        handleChangeItem(val) {
            let found = this.form.items.findIndex((doc) => {
                return doc._id == val.itemId
            })
            if(found != -1) {
                this.form.items[found].qty++;
            } else {
                    this.form.items.push({
                    _id: val.itemId,
                    name: val.name,
                    price: val.price,
                    qty: 1
                })
            }
            
            console.log('form: ', this.form);
        },
        getCustomer() {
            this.customerOpts = [
                {
                    _id: "01",
                    name: "Vithyea"
                },
                {
                    _id: "02",
                    name: "Kun"
                }
            ]
        },

        getPurchase() {
            this.itemOpts = [
                {
                    _id: '01',
                    itemId: '01',
                    name: 'Coca',
                    price: 5500,
                    qty: 15
                },

                {
                    _id: '02',
                    itemId: '02',
                    name: 'Fanta',
                    price: 650,
                    qty: 17
                },
            ]
        }
    },
    mounted() {
        this.getCustomer();
        this.getPurchase();
        this.getInvoiceNumber()
    }
}
</script>

<style>

</style>