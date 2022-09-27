<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="drawer = !drawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Master IT Shop
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="drawer"
        show-if-above
        bordered
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list>

            
              <q-item to="/" clickable v-ripple exact>
                <q-item-section avatar>
                  <q-icon name="home" />
                </q-item-section>
                <q-item-section>
                  Home
                </q-item-section>
              </q-item>
            
              <q-item to="/user" clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="person" />
                </q-item-section>
                <q-item-section>
                  User
                </q-item-section>
              </q-item>

              <q-item to="/customer" clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="group" />
                </q-item-section>
                <q-item-section>
                  Customer
                </q-item-section>
              </q-item>
              <q-item to="/item" clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="dns" />
                </q-item-section>
                <q-item-section>
                  Item
                </q-item-section>
              </q-item>
              <q-item to="/category" clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="backup_table" />
                </q-item-section>
                <q-item-section>
                  Category
                </q-item-section>
              </q-item>
              <q-item to="/supplier" clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="maps_home_work" />
                </q-item-section>
                <q-item-section>
                  Supplier
                </q-item-section>
              </q-item>
              <q-item to="/purchase" clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="inventory" />
                </q-item-section>
                <q-item-section>
                  Purchase
                </q-item-section>
              </q-item>
              <q-separator/>
              <q-item to="/sale" clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="chrome_reader_mode" />
                </q-item-section>
                <q-item-section>
                  Sale
                </q-item-section>
              </q-item>
              <q-separator/>
              <q-list bordered>
                <q-expansion-item icon="report" label="Report">
                  <q-item clickable v-ripple to="import">
                    <q-item-section avatar>
                      <q-icon name="arrow_circle_down"/>
                    </q-item-section>
                    <q-item-label>
                      Import
                    </q-item-label>
                  </q-item>
                  <q-item clickable v-ripple to="export">
                    <q-item-section avatar>
                      <q-icon name="arrow_circle_up"/>
                    </q-item-section>
                    <q-item-label>
                      Export
                    </q-item-label>
                  </q-item>
                </q-expansion-item>
              </q-list>
          </q-list>
        </q-scroll-area>
      </q-drawer>

    <q-page-container>
      <div class="text-center text-h5 q-mt-sm">
        {{$route.name}}
      </div>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  }
}
</script>