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
                    this.form.date = moment(this.form.date, 'YYYY-MM-DD').toDate()
                    let index = this.supplierOpts.findIndex((doc) => {
                        return this.form.supplierId == doc._id;
                    })
                    let indexItem = this.itemOpts.findIndex((doc) => {
                        return this.form.itemId == doc._id;
                    })
                    console.log(this.form);
                    this.form.company = this.supplierOpts[index].company;
                    this.form.name = this.itemOpts[indexItem].name;
                    console.log(this.form);
                    this.$emit('close', this.form)
                },
                getSupplier() {
                    this.supplierOpts = [
                        {
                            _id: '01',
                            company: 'Yamato Green',
                            ownerName: "Katsuhito",
                            phone: '012321312',
                            address: 'Battambang',
                            status: 'active'
                        },

                        {
                            _id: '02',
                            company: 'ItsumoTec',
                            ownerName: "Rin Darith",
                            phone: '012321312',
                            address: 'PhnomPenh',
                            status: 'inactive'
                        }
                           
                    ]
                },

                getItem() {
                    this.itemOpts = [
                        {
                            _id: '01',
                            name: 'Coca',
                            categoryName: 'Drink',
                            categoryId: '01',
                            date: new Date(),
                            description: 'Coca 1.25L',
                            status: 'active'
                        },

                        {
                            _id: '01',
                            name: 'Fanta',
                            categoryName: 'Drink',
                            categoryId: '01',
                            date: new Date(),
                            description: 'Fanta 1.25L',
                            status: 'active'
                        }
                    ]   
                }
            }
        }
    </script>
    
    <style>
    
    </style>