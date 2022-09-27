<template>
  <div>
    <q-dialog persistent :maximized="true" transition-show="slide-up" transition-hide="slide-up"
      v-model="dialog"
    >
      <q-card>
        <q-bar>
          <q-space/>
          <q-btn dense float icon="close" class="bg-red shadow-4" rounded v-close-popup/>
        </q-bar>
        <PurchaseForm/>
      </q-card>
    </q-dialog>
    <div class="absolute-full text-subtitle2 flex flex-center q-ma-md">
      <div class="text-center items-center">

      </div>
      <div class="full-width row wrap justify-center items-start content-start">
        <div class="q-ma-md" v-for="(item, index) in lists" :key="index">
          <q-btn class="btn" :color="item.background" @click="handleEnter(item.path)">
            <q-icon class="col-12" left :name="item.icon" size="10rem"/>
            <div class="col-12 text-h4">
              {{item.label}}
            </div>
          </q-btn>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PurchaseForm from '../components/PurchaseForm.vue';
export default {
    data() {
        return {
            dialog: false,
            lists: [
                {
                    path: "user",
                    icon: "person",
                    label: "User",
                    background: "blue-6"
                },
                {
                    path: "customer",
                    icon: "groups",
                    label: "Customer",
                    background: "red-6"
                },
                {
                    path: "supplier",
                    icon: "maps_home_work",
                    label: "Supplier",
                    background: "amber-6"
                },
                {
                    path: "category",
                    icon: "backup_table",
                    label: "category",
                    background: "green-6"
                },
                {
                    path: "item",
                    icon: "dns",
                    label: "Item",
                    background: "blue-6"
                },
                {
                    path: "purchase",
                    icon: "inventory",
                    label: "Purchase",
                    background: "red-6"
                },
                {
                    path: "sale",
                    icon: "add_shopping_cart",
                    label: "Quick Sale",
                    background: "amber-6"
                },
                {
                    path: false,
                    icon: "arrow_circle_down",
                    label: "Quick Purchase",
                    background: "green-6"
                },
            ]
        };
    },
    methods: {
        handleEnter(path) {
            if (path) {
                this.$router.push(path);
            }
            else {
              this.dialog = true
            }
        }
    },
    components: { PurchaseForm }
}
</script>

<style>
  .btn:hover {
    transform: scale(0.98);
    transition: transform 0.4s;
  }
  .btn {
    width: 350px;
    height: 250px;
    font-size: 20px;
  }
</style>