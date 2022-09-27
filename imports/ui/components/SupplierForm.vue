<template>
    <div>
        <q-card>
            <q-card-section class="text-center text-h5">Supplier Form</q-card-section>
            <q-card-section>
                <div class="fit row justify-evenly">
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input outlined v-model="form.company" label="Company"/>
                    </div>
                    
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input outlined v-model="form.ownerName" label="Owner Name"/>
                    </div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input outlined v-model="form.phone" label="Phone"/>
                    </div>
                    
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input outlined autogrow v-model="form.address" label="Address"/>
                    </div>
                    
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <fieldset>
                            <label>Status</label>
                            <q-radio v-model="form.status" val="active" label="Active"/>
                            <q-radio v-model="form.status" val="inactive" label="Inactive"/>
                        </fieldset>
                    </div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm">

                    </div>
                    <div class="col-xs-12 col-sm-4 text-center q-ma-sm">
                        <q-btn color="primary" :label="updateDoc ? `Update` : `Submit`" @click="handleSubmit()"/>
                    </div>
                   
                </div>
                
            </q-card-section>
        </q-card>
    </div>
  </template>
  
    <script>
import { MeteorData } from 'vue-meteor-tracker'

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
            },
            data() {
                return {
                    form: {
                        company: null,
                        ownerName: null,
                        phone: null,
                        address: null,
                        status: 'active'
                    },
                }
            },
            methods: {
                handleSubmit() {
                    let method = 'supplier.insert';
                    if(this.updateDoc) {
                        method = 'supplier.update'
                    }
                    Meteor.call(method, this.form, (err, res) => {
                        if(res) {
                            this.$emit('close', this.form)
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