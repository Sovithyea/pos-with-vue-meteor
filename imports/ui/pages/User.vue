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
        <user-form :updateDoc="updateDoc" @close="close"/>
      </q-card>
    </q-dialog>
    <q-btn color="primary" icon="add" round class="q-ma-sm" @click="handleAdd()"/>
    <user-table :users="users" @delete="handleDelete" @edit="handleEdit"/>
  </div>
</template>

<script>
import UserForm from '../components/UserForm.vue'
import UserTable from '../components/UserTable.vue';

export default {
  components: { UserForm, UserTable },
  data() {
    return {
      dialog: false,
      users: [
        
      ],
      updateDoc: null
    }
  },
  
  mounted() {
    this.getData()
  },

  methods: {
    close(doc) {
      if(doc._id) {
        let index = this.users.findIndex((obj) => {
          return obj._id == doc._id
        })
        this.users[index].username = doc.username;
        this.users[index].email = doc.email;
        this.users[index].phone = doc.phone;
        this.users[index].role = doc.role;
        this.dialog = false;
        this.updateDoc = null;
      } else {
        this.users.push(doc);
        this.dialog = false
      }
  
    },
    handleDelete(id) {
      let index = this.users.findIndex((doc) => {
        return doc._id == id
      })
      this.users.splice(index, 1);
    },
    handleEdit(user) {
      this.updateDoc = user;
      this.dialog = true;
    },
    handleAdd(){
      this.dialog = true
    },
    getData() {
      this.users = [
      {
          _id: '01',
          username: 'vithyea',
          email: 'vithyea@email.com',
          phone: '0988321231',
          role: 'admin'
        },
        {
          _id: '02',
          username: 'vichet',
          email: 'vichet@email.com',
          phone: '099321321',
          role: 'admin'
        },
        {
          _id: '03',
          username: 'kheang',
          email: 'kheang@email.com',
          phone: '023231321',
          role: 'sale'
        },
      ]
    }
  }
}
</script>

<style>

</style>