<template>
  <q-page padding>
    <q-header reveal>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
      </q-toolbar>

      <div class=" q-px-lg q-pt-xl q-mb-md ">
        <div class="text-h4 text-center">Welcome to Cosmique Autos</div>
        <div class="text-h5 text-center">Mike</div>
      </div>
      <q-img src="~assets/2.jpg" class="header-image absolute-top" />
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

    <q-card class="my-card q-pa-md">
      <q-card-section
        class=" text-primary"
        style="background: radial-gradient(circle, #ffffff 0%, #c443323a 100%)"
      >
        <div class="text-h4 text-center "><b>Need an Automobile?</b></div>
        <div class="text-h5 text-center "><b>We've got you covered</b></div>
        <div class="text-h6 text-center">
          Check out the Following Inventories:
          <i class="fas fa-hand-point-down"></i>
        </div>
      </q-card-section>

      <q-separator class="bg-primary" />

      <q-card-actions vertical class="bg-white text-primary">
        <q-btn flat @click="expanded1 = !expanded1">
          <i class="fas fa-gavel fa-2x"></i>
          <h5><b> Auction Car </b></h5>

          <q-btn
            color="primary"
            round
            flat
            dense
            :icon="expanded1 ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          />

          <q-slide-transition>
            <div v-show="expanded1">
              <q-separator />
              <q-card
                class="my-card q-pa-md"
                v-for="car in data"
                :key="car.lot"
                @click="open_details(car)"
              >
                <img :src="car.img" />
                <q-card-section>
                  <input type="hidden" v-model="car.lot" />
                  <div class="text-h5 q-mb-xs">
                    <strong> {{ car.description }} </strong>
                  </div>
                  <div class="text-h6">
                    <b>MILEAGE: </b><i class="fas fa-tachometer-alt"></i>
                    {{ car.odometer }}km
                  </div>
                  <div class="text-h6"><b>VIN: </b> {{ car.vin }}</div>
                  <div class="row no-wrap items-center"></div>
                </q-card-section>

                <hr />
              </q-card>
              <hr />
              <q-btn
                color="primary"
                to="/auction"
                class="full-width"
                text-color="white"
                dense
                glossy
                push
                label="Like to see more?"
              />
            </div>
          </q-slide-transition>
        </q-btn>
        <q-btn flat @click="alert = true">
          <i class="fas fa-car fa-2x"></i>
          <h5><b>New Cars</b></h5>

          <q-btn
            color="primary"
            round
            flat
            dense
            :icon="expanded2 ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          />

          <q-slide-transition>
            <div v-show="expanded2">
              <q-separator />
              <q-card
                class="my-card q-pa-md"
                v-for="car in data"
                :key="car.lot"
                @click="open_details(car)"
              >
                <img :src="car.img" />
                <q-card-section>
                  <input type="hidden" v-model="car.lot" />
                  <div class="text-h5 q-mb-xs">
                    <strong> {{ car.description }} </strong>
                  </div>
                  <div class="text-h6">
                    <b>MILEAGE: </b><i class="fas fa-tachometer-alt"></i>
                    {{ car.odometer }}km
                  </div>
                  <div class="text-h6"><b>VIN: </b> {{ car.vin }}</div>
                  <div class="row no-wrap items-center"></div>
                </q-card-section>

                <hr />
              </q-card>
              <hr />
              <q-btn
                color="primary"
                to="/newCars"
                class="full-width"
                text-color="white"
                dense
                glossy
                push
                label="Like to see more?"
              />
            </div>
          </q-slide-transition>
        </q-btn>
        <q-btn flat @click="expanded3 = !expanded3">
          <i class="fas fa-car-side fa-2x"></i>
          <h5><b>Used Cars</b></h5>

          <q-btn
            color="primary"
            round
            flat
            dense
            :icon="expanded3 ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          />

          <q-dialog v-model="alert">
            <q-card>
              <q-card-section>
                <div class="text-h6">Alert</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                New cars inventory not available at the moment
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="OK" color="primary" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>

          <q-slide-transition>
            <div v-show="expanded3">
              <q-separator />
              <q-card
                class="my-card q-pa-md"
                v-for="car in data"
                :key="car.lot"
                @click="open_details(car)"
              >
                <img :src="car.img" />
                <q-card-section>
                  <input type="hidden" v-model="car.lot" />
                  <div class="text-h5 q-mb-xs">
                    <strong> {{ car.description }} </strong>
                  </div>
                  <div class="text-h6">
                    <b>MILEAGE: </b><i class="fas fa-tachometer-alt"></i>
                    {{ car.odometer }}km
                  </div>
                  <div class="text-h6"><b>VIN: </b> {{ car.vin }}</div>
                  <div class="row no-wrap items-center"></div>
                </q-card-section>

                <hr />
              </q-card>
              <hr />
              <q-btn
                color="primary"
                to="/usedCars"
                class="full-width"
                text-color="white"
                dense
                glossy
                push
                label="Like to see more?"
              />
            </div>
          </q-slide-transition>
        </q-btn>
      </q-card-actions>
    </q-card>

    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="primary" />
    </q-page-scroller>
  </q-page>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import axios from "axios";

const linksData = [];
export default {
  data() {
    return {
      data: [],
      car: {},
      expanded1: false,
      expanded2: false,
      expanded3: false,
      alert: false,
      leftDrawerOpen: false,
      confirm: false,
      essentialLinks: linksData
    };
  },
  methods: {
    get_cars() {
      axios
        .get(
          "https://www.autobidmaster.com/en/data/v1/lots/search?fixedCriteria=%7B%22QuickPick%22:%22cars%22%7D&page=1&size=5"
        )
        .then(response => {
          this.data = response.data.data.results.contents;
        });
    },
    open_details(car) {
      this.$router.push({
        name: "cars_details",
        params: { selected_car: car.lot }
      });
    }
  },

  mounted() {
    this.get_cars();
  }
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  // max-width: 300px
</style>
