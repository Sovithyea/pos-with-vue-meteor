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
        <customer-form @close="close" :updateDoc="updateDoc"/>
      </q-card>
    </q-dialog>
    <q-btn color="primary" icon="add" round class="q-ma-sm" @click="handleAdd()"/>
    
    <customer-table :items="customers" @delete="handleDelete" @edit="handleEdit"/>
  </div>
</template>

<script>
import CustomerForm from '../components/CustomerForm.vue'
import CustomerTable from '../components/CustomerTable.vue'
import moment from 'moment'
import { MeteorData } from 'vue-meteor-tracker'
export default {
  components: { CustomerForm, CustomerTable },
  data() {
    return {
      dialog: false,
      customers: [

      ],
      updateDoc: null
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    handleAdd() {
      this.dialog = true;
      this.updateDoc = null
    },
    handleDelete(id) {
      // console.log('id: ',id);
      Meteor.call('customer.remove', id, (err, res) => {
        if(res) {
          this.getData();
        } else {
          console.log(err);
        }
      })
    },
    handleEdit(doc) {
      this.dialog = true,
      this.updateDoc = Object.assign({}, doc);
      this.updateDoc.dob = moment(doc.dob).format('YYYY-MM-DD')
    },
    close() {
        this.dialog = false
        this.getData();
    },
    getData() {
      Meteor.call('customer.find', (err, res) => {
        if(res) {
          this.customers = res
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