<template>
    <div>
        <q-card>
            <q-card-section class="text-center text-h5">Purchase Form</q-card-section>
            <q-card-section>
                <div class="fit row justify-evenly">
                    
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-select outlined v-model="form.supplierId" label="Supplier"
                            :options = "supplierOpts"
                            map-options
                            emit-value
                            option-value="_id"
                            option-label="company"
                        />

                    </div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-select outlined v-model="form.itemId" label="Item"
                            :options = "itemOpts"
                            map-options
                            emit-value
                            option-value="_id"
                            option-label="name"
                        />

                    </div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input outlined v-model.number="form.cost" label="Cost"
                            type="number"
                        />
                    </div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input outlined v-model.number="form.price" label="Price"
                            type="number"
                        />
                    </div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input outlined v-model.number="form.qty" label="Quantity"
                            type="number"
                        />
                    </div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input outlined v-model="form.date" label="Date"
                            type="date"
                        />
                    </div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <fieldset>
                            <label>Status</label>
                            <q-radio v-model="form.status" val="active" label="Active"/>
                            <q-radio v-model="form.status" val="inactive" label="Inactive"/>
                        </fieldset>
                    </div>
                    
                    <div class="col-xs-12 col-sm-4 q-ma-sm text-center"></div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm text-center">
                        <q-btn color="primary" :label="updateDoc ? `Update` : `Submit`" @click="handleSubmit()"/>
                    </div>
                </div>
            </q-card-section>
        </q-card>
    </div>
  </template>
  
    <script>
    import moment from 'moment'
        export default {
            props: {
                updateDoc: {
                    type: Object,
                    default: null
                }
            },
        
            mounted() {
                if(this.updateDoc) {
                    this.form = this.updateDoc
                }
                this.getSupplier();
                this.getItem();
            },
            data() {
                return {
                    form: {
                        supplierId: null,
                        itemId: null,
                        cost: null,
                        price: null,
                        qty: null,
                        date: moment(new Date()).format('YYYY-MM-DD'),
                        status: 'active'
                    },
                    supplierOpts: [

                    ],
                    itemOpts: [

                    ]
                }
            },
            methods: {
                handleSubmit() {
                    // this.form.date = moment(this.form.date, 'YYYY-MM-DD').toDate()
                    // console.log(this.form);
                    let method = this.updateDoc ? 'purchase.update' : 'purchase.add'
                    Meteor.call( method , this.form, (err, res) => {
                        if(res) {
                            this.$emit('close')
                        } else {
                            console.log(err);
                        }
                    })
                },
                getSupplier() {
                    Meteor.call('supplier.find', (err, res) => {
                        if(res) {
                            this.supplierOpts = res
                        } else {
                            console.log(err);
                        }
                    })
                },

                getItem() {
                    Meteor.call('item.find', (err, res) => {
                        if(res) {
                            this.itemOpts = res
                        } else {
                            console.log(err);
                        }
                    })
                }
            }
        }
    </script>
    
    <style>
    
    </style>