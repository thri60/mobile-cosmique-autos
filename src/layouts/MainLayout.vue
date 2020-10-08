<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-3">
    <q-header  class="bg-white text-primary">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-space></q-space>
        <q-btn
          v-if="$route.fullPath.includes('/dashboard')"
          flat
          round
          dense
          to="/notification"
          replace
          icon="fas fa-bell"
          class="q-mr-xs"
        />
      </q-toolbar>
      <q-btn
        v-if="$route.fullPath.includes('/cars_details')"
        flat
        dense
        to="/"

        icon="arrow_back"
      />
      <q-btn
        v-if="$route.fullPath.includes('/notification')"
        flat
        dense
        to="/dashboard"
        replace
        icon="arrow_back"
      />
      <q-btn
        v-if="$route.fullPath.includes('/search')"
        flat
        dense
        to="/"
        replace
        icon="arrow_back"
      />

      <q-toolbar-title class="absolute-center">
        <strong>{{ title }} </strong></q-toolbar-title
      >
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="600"
    >
      <q-scroll-area
        style="height: calc(100% - 164.9px); margin-top: 164.9px; border-right: 1px solid #ddd"
      >
        <q-list padding>
          <q-item to="/auction" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="fas fa-gavel" />
              <q-icon name="fas fa-car" />
            </q-item-section>

            <q-item-section>
              Auction
            </q-item-section>
          </q-item>

          <q-item to="/newCars" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="fas fa-car" />
            </q-item-section>

            <q-item-section>
              New Autos
            </q-item-section>
          </q-item>

          <q-item to="/usedCars" exactclickable v-ripple>
            <q-item-section avatar>
              <q-icon name="fas fa-car-side" />
            </q-item-section>

            <q-item-section>
              Used Autos
            </q-item-section>
          </q-item>

          <q-item to="/help" exactclickable v-ripple>
            <q-item-section avatar>
              <q-icon name="fas fa-question-circle" />
            </q-item-section>

            <q-item-section>
              Help
            </q-item-section>
          </q-item>
          <q-item to="/setting" exactclickable v-ripple>
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>

            <q-item-section>
              Settings
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top drawer bg-transparent"
        src="~assets/2.jpg"
        style="height: 164.9px"
      >
        <div class="absolute-bottom ">
          <q-avatar
            size="56px"
            class="q-mb-sm clickable v-ripple"
            @click="confirm = true"
          >
            <i class="fas fa-user"></i>
          </q-avatar>
          <div class="text-weight-bold">Mike I</div>
          <div>@rstoenescu</div>
        </div>
      </q-img>
    </q-drawer>

    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar
            icon="fas fa-sign-out-alt"
            color="primary"
            text-color="white"
          />
          <span class="q-ml-sm">Would you like to sign out?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Sign Out" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-page-container>

        <router-view />

    </q-page-container>

    <q-footer reveal  bordered class="bg-white text-primary">
      <q-tabs no-caps dense indicator-color="transparent" v-model="tab">
        <q-route-tab name="buy_car" to="/">
          <i class="fas fa-shopping-cart"></i> Buy car
        </q-route-tab>
        <q-route-tab name="search" to="/search" replace>
          <i class="fas fa-search"></i> Search
        </q-route-tab>
        <q-route-tab name="dashboard" to="/dashboard">
          <i class="far fa-heart"></i> Dashboard
        </q-route-tab>
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksData = [];

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      text: "",
      tab: "images",
      leftDrawerOpen: false,
      essentialLinks: linksData,
      confirm: false,
    };
  },

  computed: {
    title() {
      // console.log(this.$route)
      let currentPath = this.$route.fullPath;
      if (currentPath == "/") return "Cosmique Autos";
      else if (currentPath == "/auction") return "Auction Inventory";
      else if (currentPath == "/newCars") return "New Cars Inventory";
      else if (currentPath == "/usedCars") return "Used Cars Inventory";
      else if (currentPath == "/cars_details") return "Car Details";
      else if (currentPath == "/") return "auction_details";
      else if (currentPath == "/search") return "Search";
      else if (currentPath == "/dashboard") return "Dashboard";
      else if (currentPath == "/notification") return "Notifications";
    }
    // todaysDate() {
    //   let timeStamp = Date.now();
    //   return date.formatDate(
    //     timeStamp,
    //     "dddd D MMMM"
    //   );
    // }
  }
};
</script>

<style lang="scss">
.header-image {
  height: 100%;
  z-index: -1;
  opacity: 0.5;
  filter: grayscale(100%);
}
.drawer {
  opacity: 0.8;

  z-index: 10;
}
</style>
