<template>
    <div>
        <q-card>
            <q-card-section class="text-center text-h5">Customer Form</q-card-section>
            <q-card-section>
                <div class="fit row justify-evenly">
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input outlined v-model="form.name" label="Name"/>
                    </div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <fieldset>
                            <label>Gender</label>
                            <q-radio v-model="form.gender" val="male" label="Male"/>
                            <q-radio v-model="form.gender" val="female" label="Female"/>
                        </fieldset>
                    </div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm">
                        <q-input outlined v-model="form.dob" label="Date of Birth" type="date"/>
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
                        <q-btn color="primary" :label="updateDoc ? `Update` : `Submit`" @click="handleSubmit()"/>
                    </div>
                    <div class="col-xs-12 col-sm-4 q-ma-sm">

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
            },
            data() {
                return {
                    form: {
                        name: null,
                        gender: 'male',
                        dob: null,
                        phone: null,
                        address: null,
                        status: 'active'
                    },
                }
            },
            methods: {
                handleSubmit() {
                    this.form.dob = moment(this.form.dob, 'YYYY-MM-DD').toDate()
                    // console.log(this.form);
                    this.$emit('close', this.form)
                }
            }
        }
    </script>
    
    <style>
    
    </style>