<template>
  <div class="q-ma-md">
    <FormSearchByDate @searchByDate="searchByDate"/>
    <q-markup-table>
        <thead>
            <tr>
                <th class="text-left">No</th>
                <th class="text-left">Date</th>
                <th class="text-left">Company</th>
                <th class="text-left">Item</th>
                <th class="text-left">Remains</th>
                <th class="text-left">Cost</th>
                <th class="text-left">Price</th>
                <th class="text-left">Quantity</th>
                <th class="text-left">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in items" :key="index">
                <td class="text-left">{{index+1}}</td>
                <td class="text-left">{{item.date | toDate}}</td>
                <td class="text-left">{{item.company}}</td>
                <td class="text-left">{{item.name}}</td>
                <td class="text-left">{{item.remains}}</td>
                <td class="text-left">{{item.cost}}</td>
                <td class="text-left">{{item.price}}</td>
                <td class="text-left">{{item.qty}}</td>
                <td class="text-left">{{item.status}}</td>
            </tr>
        </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import moment from 'moment';
import FormSearchByDate from '../components/FormSearchByDate.vue';
export default {
    components: { FormSearchByDate },
    data() {
        return {
            items: []
        }
    },
    filters: {
        toDate(date) {
            return moment(date).format('DD-MM-YYYY')
        }
    },
    methods: {
        searchByDate(date) {
            console.log('Date: ', date);
            this.items = [
                {
                    _id: '01',
                    date: new Date(),
                    company: "Yamato Green",
                    name: "Coca",
                    remains: 12,
                    cost: 5500,
                    price: 6000,
                    qty: 35,
                    status: "active"
                }

            ]
        }
    }
}
</script>

<style>

</style>