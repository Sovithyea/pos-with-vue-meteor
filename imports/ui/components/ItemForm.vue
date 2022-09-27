<template>
    <div>
        <q-card>
            <q-card-section class="text-center text-h5">Item Form</q-card-section>
            <q-card-section>
                <div class="fit row justify-evenly">
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input outlined v-model="form.name" label="Name"/>
                    </div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-select outlined v-model="form.categoryId" label="Category"
                            :options = "categoryOpts"
                            map-options
                            emit-value
                            option-value="_id"
                            option-label="name"
                        />

                    </div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input type="date" outlined v-model="form.date" label="Date"/>
                    </div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input outlined v-model="form.description" label="Description"/>
                    </div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <fieldset>
                            <label>Status</label>
                            <q-radio label="Active" v-model="form.status" val="active"/>
                            <q-radio label="Inactive" v-model="form.status" val="inactive"/>
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
                this.getCategory()
            },
            data() {
                return {
                    form: {
                        name: null,
                        date: moment(new Date()).format('YYYY-MM-DD'),
                        categoryId: null,
                        status: null,
                        description: null,
                    },
                    categoryOpts: [

                    ]
                }
            },
            methods: {
                handleSubmit() {
                    this.form.date = moment(this.form.date, 'YYYY-MM-DD').toDate();
                    method = "item.insert";
                    if(this.updateDoc) {
                        method = "item.update"
                    }
                    Meteor.call(method, this.form, (err, res) => {
                        if(res) {
                            this.$emit('close', this.form)
                        } else {
                            console.log(err);
                        }
                    })                    
                    
                },
                getCategory() {
                    Meteor.call('category.find', (err, res) => {
                        if(res) {
                            this.categoryOpts = res;
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