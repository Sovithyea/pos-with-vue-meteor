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
      Meteor.call('category.remove', id, (err, res) => {
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
      this.updateDoc.date = moment(doc.date).format('YYYY-MM-DD')
      
    },
    close() {
      this.getData();
      this.dialog = false
    },
    getData() {
      Meteor.call('category.find', (err, res) => {
        if(res) {
          this.categories = res
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