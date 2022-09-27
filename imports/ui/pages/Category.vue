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
        <category-form @close="close" :updateDoc="updateDoc"/>
      </q-card>
    </q-dialog>
    <q-btn color="primary" icon="add" round class="q-ma-sm" @click="handleAdd()"/>
    
    <category-table :items="categories" @delete="handleDelete" @edit="handleEdit"/>
  </div>
</template>

<script>
import moment from 'moment'
import CategoryForm from '../components/CategoryForm.vue'
import CategoryTable from '../components/CategoryTable.vue'
export default {
  components: { CategoryForm, CategoryTable },
  data() {
    return {
      dialog: false,
      categories: [
        {
          _id: "01",
          name: 'Coca',
          date: new Date(),
          description: 'soft-drink'
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
      let index = this.categories.findIndex((doc) => {
        return doc._id == id;
      })
      this.categories.splice(index, 1);
    },
    handleEdit(doc) {
      this.dialog = true,
      this.updateDoc = Object.assign({}, doc);
      this.updateDoc.date = moment(doc.date).format('YYYY-MM-DD')
      
    },
    close(doc) {
      if(doc._id) {
        let index = this.categories.findIndex((obj) => {
          return obj._id == doc._id;
        })
        this.categories[index].name = doc.name;
        this.categories[index].date = doc.date;
        this.categories[index].description = doc.description;
        this.updateDoc = null;
        this.dialog = false
      } else {
        this.categories.push(doc);
        this.dialog = false
      }
    }
  }
}
</script>

<style>

</style>