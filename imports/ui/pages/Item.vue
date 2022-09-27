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
        <item-form @close="close" :updateDoc="updateDoc"/>
      </q-card>
    </q-dialog>
    <q-btn color="primary" icon="add" round class="q-ma-sm" @click="handleAdd()"/>
    
    <item-table :items="items" @delete="handleDelete" @edit="handleEdit"/>
  </div>
</template>

<script>
import moment from 'moment'
import ItemForm from '../components/ItemForm.vue'
import ItemTable from '../components/ItemTable.vue'
export default {
  components: { ItemForm, ItemTable },
  data() {
    return {
      dialog: false,
      items: [
        {
          _id: "01",
          name: 'Coca',
          date: new Date(),
          categoryId: '01',
          categoryName: 'Soft-Drink',
          description: 'Cocal 500ml',
          status: 'active'
        }
      ],
      updateDoc: null
    }
  },
  methods: {
    handleAdd() {
      this.dialog = true
    },
    handleDelete(id) {
      // console.log('id: ',id);
      let index = this.items.findIndex((doc) => {
        return doc._id == id;
      })
      this.items.splice(index, 1);
    },
    handleEdit(doc) {
      this.dialog = true,
      this.updateDoc = Object.assign({}, doc);
      this.updateDoc.date = moment(doc.date).format('YYYY-MM-DD')
      
    },
    close(doc) {
      if(doc._id) {
        let index = this.items.findIndex((obj) => {
          return obj._id == doc._id;
        })
        this.items[index].name = doc.name;
        this.items[index].date = doc.date;
        this.items[index].categoryId = doc.categoryId;
        this.items[index].categoryName = doc.categoryName;
        this.items[index].description = doc.description;
        this.items[index].status = doc.status;
        this.updateDoc = null;
        this.dialog = false
      } else {
        this.items.push(doc);
        this.dialog = false
      }
    }
  }
}
</script>

<style>

</style>