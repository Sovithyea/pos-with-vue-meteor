<template>
    <div class="q-ma-md">
      <q-dialog
        v-model="dialog"
        persistent
        :maximized="true"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card class="bg-white">
          <q-bar>
            <q-space />
  
            <q-btn dense flat icon="close" v-close-popup class="bg-red text-white" rounded>
              <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>
          <supplier-form @close="close" :updateDoc="updateDoc"/>
        </q-card>
      </q-dialog>
      <q-btn color="primary" icon="add" round class="q-ma-sm" @click="handleAdd()"/>
      
      <supplier-table :items="suppliers" @delete="handleDelete" @edit="handleEdit"/>
    </div>
  </template>
  
  <script>
  import { MeteorData } from 'vue-meteor-tracker'
import SupplierForm from '../components/SupplierForm.vue'
  import SupplierTable from '../components/SupplierTable.vue'

  export default {
    components: { SupplierForm, SupplierTable },
    data() {
      return {
        dialog: false,
        suppliers: [
  
        ],
        updateDoc: null
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      handleAdd() {
        this.dialog = true
        this.updateDoc = null
      },
      handleDelete(id) {
        Meteor.call('supplier.remove', id, (err, res) => {
          if(res) {
            this.getData()
          } else {
            console.log(err);
          }
        })
      },
      handleEdit(doc) {
        this.dialog = true,
        this.updateDoc = Object.assign({}, doc);
      },
      close() {
        this.getData()
        this.dialog = false
      },
      getData() {
        Meteor.call('supplier.find', (err, res) => {
          if(res) {
            this.suppliers = res
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