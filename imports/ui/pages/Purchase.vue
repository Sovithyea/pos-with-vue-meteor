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
        <purchase-form @close="close" :updateDoc="updateDoc"/>
      </q-card>
    </q-dialog>
    <q-btn color="primary" icon="add" round class="q-ma-sm" @click="handleAdd()"/>
    
    <purchase-table :items="items" @delete="handleDelete" @edit="handleEdit"/>
  </div>
</template>

<script>
import moment from 'moment'
import PurchaseForm from '../components/PurchaseForm.vue'
import PurchaseTable from '../components/PurchaseTable.vue'
export default {
  components: { PurchaseForm, PurchaseTable },
  data() {
    return {
      dialog: false,
      items: [
      
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
      Meteor.call('purchase.remove', id, (err, res) => {
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
      this.updateDoc.date = moment(doc.date).format('YYYY-MM-DD')
      delete this.updateDoc.name
      // console.log(this.updateDoc);
    },
    close() {
        this.dialog = false
        this.getData()
    },
    getData() {
      Meteor.call('purchase.find', (err, res) => {
        if(res) {
          this.items = res
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