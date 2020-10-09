<template>
  <q-page padding>
 <q-img src="~assets/2.jpg" class="header-image absolute-top" />
    <q-card class="my-card q-pa-md transparent">
      <q-card-section
        class=" text-primary"
        style="background: radial-gradient(circle, #ffffff 0%, #c443323a 100%)"
      >
        <div class="text-h4 text-center "><b>Welcome to Cosmique Autos </b></div>
        <q-separator inset/>
        <div class="text-h5 text-center "><b>Need an Automobile?</b></div>
        <div class="text-h5 text-center "><b>We've got you covered</b></div>
        <div class="text-h6 text-center">
          Check out the Following Inventories:
          <i class="fas fa-hand-point-down"></i>
        </div>
      </q-card-section>

      <hr />

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
                class="my-card"
                v-for="car in data"
                :key="car.id"
                @click="open_details1(car)"
              >
                <img :src="car.images[0]" />
                <q-card-section>
                  <input type="hidden" v-model="car.id" />
                  <div class="text-h4 text-center q-mb-xs text-primary">
                    <strong> {{ car.vehicle_name }} </strong>
                  </div>
                  <hr />
                    <div class="text-grey">
                    <i class="fas fa-car-crash"> &nbsp;</i>DAMAGE&nbsp;
                     <b class="text-black"> {{ car.damage }}</b>
                  </div>
                  <div class="text-grey" >
                   <i class="fab fa-keycdn"></i>
                    &nbsp;START CODE &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <b class="text-black">{{ car.start_code.toUpperCase() }}</b>
                  </div>
                  <div class="text-grey">
                    <i class="fas fa-tachometer-alt"></i> &nbsp; MILEAGE &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <b class="text-black">
                      {{ car.odometer_value
                      }}{{ car.odometer_type.toUpperCase() }}</b
                    >
                  </div>

                  <hr />
                  <div class="text-h5 q-mb-xs">
                    Current Bid: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <strong>${{ car.current_bid_value }} </strong> USD
                    <q-btn
                      class="full-width"
                      rounded
                      color="yellow-10"
                      text-color="white"
                    >
                      <b>Bid Now</b>
                    </q-btn>
                  </div>

                  <q-separator inset />

                  <div class="text-h5 q-mb-xs" >
                    Buy Now for: &nbsp; &nbsp; &nbsp; &nbsp;
                    <strong> ${{ car.buy_it_now }} </strong> USD
                    <q-btn
                      class="full-width"
                      rounded
                      color="yellow-10"
                      text-color="white"
                    >
                      Buy it Now
                    </q-btn>
                  </div>
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
              >

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
      data2: [],
      car2: {},
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
    get_cars1() {
      axios
        .get(
          "https://www.salvagebid.com/rest-api/v1.0/lots/search?page=1&per_page=10&type=car&make=*&model=*&search_id=&search_query=&year_from=2008&year_to=2021&sort_field=&sort_order=&sales_type=*&distance=*&destination_zip=&location_state=*&location_city=*&primary_damage=normal+wear+%26+tear&loss_type=*&title_name=*&exterior_color=*&odometer_min=*&odometer_max=*"
        )
        .then(response => {
          this.data = response.data.lots;
        });
    },
    open_details1(car) {
      this.$router.push({
        name: "auction_cars_details",
        params: { selected_car: car.id }
      });
    },


  },

  mounted() {
    this.get_cars1();

  }
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  // max-width: 300px
</style>
