<template>
  <div>
    <q-btn label="Insert Customer" @click="handleInsert()"/>
    <q-btn label="Find Customer" @click="handleFind()"/>
    <ul>
        <li v-for="(customer, index) in customers" :key="index">
            {{ customer._id }} | {{ customer.name }} | {{customer.age}}
            <q-btn icon="delete" dense color="red" @click="handleDelete(customer._id)"/>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data: () => {
        return {
            customers: []
        }
    },
    mounted() {
Meteor.call('customer.category',(err,res) => {
    if(!err) {
        console.log(res);
    }
})
    },
    methods: {
        handleInsert() {
            let doc = {
                name: 'Vithyea',
                gender: 'male',
                age: 20
            }
            Meteor.call('customer.insert', doc, (err, res) => {
                if(res) {
                    console.log(res);
                } else {
                    console.log(err);
                }
            })
        },
        handleFind() {
            Meteor.call('customer.find', (err, res) => {
                if(res) {
                    this.customers = res;
                    console.log(res);
                } else {
                    console.log(err);
                }
            })
        },
        handleDelete(id) {
            Meteor.call('customer.remove', id, (err, res) => {
                if(res) {
                    console.log(res);
                    this.handleFind();
                } else {
                    console.log(err);
                }
            })
        },
        handleUpdate() {
            let doc = {
                name: 'Vithyea',
                gender: 'male',
                age: 20
            }
            Meteor.call('customer.update', doc, (err, res) => {
                if(res) {
                    console.log(res);
                    this.handleFind();
                } else {
                    console.log(res);
                    this.handleFind();
                }
            })
            // Meteor.call('customer.update')
        }
    }
}
</script>

<style>

</style>