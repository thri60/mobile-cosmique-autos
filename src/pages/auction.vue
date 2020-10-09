<template>
  <div padding>
    <br />
    <q-card
      class="my-card q-pa-md"
      v-for="car in data"
      :key="car.id"
      @click="open_details(car)"
    >
      <img :src="car.images[0]" />
      <q-card-section>
        <input type="hidden" v-model="car.id" />
        <div class="text-h4 text-center q-mb-xs text-primary">
          <strong> {{ car.vehicle_name }} </strong> <q-space />
        </div>
        <hr />

        <div class="text-h6">
          <i class="fas fa-tachometer-alt"></i> &nbsp; MILEAGE &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;
          <b> {{ car.odometer_value }}{{ car.odometer_type.toUpperCase() }}</b>
        </div>
         <div class="text-h6">
          <i class="fab fa-keycdn"></i>
          &nbsp;START CODE &nbsp; &nbsp; &nbsp; &nbsp;
          <b>{{ car.start_code.toUpperCase() }}</b>
        </div>
        <div class="text-h6">
          <i class="far fa-calendar-alt"></i> &nbsp; SALE DATE: &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp;<b>{{ car.sale_date }}</b>
        </div>
        <div class="text-h6">
          <i class="fas fa-car-crash"> &nbsp;</i>DAMAGE: &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp;<b> {{ car.damage }}</b>
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

        <div class="text-h5 q-mb-xs" v-if="buy_now">
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
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="primary" />
    </q-page-scroller>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
      car: {},
      expanded: false,
      buy_now: "true"
    };
  },

  methods: {
    get_cars() {
      axios
        .get(
          "https://www.salvagebid.com/rest-api/v1.0/lots/search?page=1&per_page=50&type=car&make=*&model=*&search_id=&search_query=&year_from=2008&year_to=2021&sort_field=&sort_order=&sales_type=*&distance=*&destination_zip=&location_state=*&location_city=*&primary_damage=normal+wear+%26+tear&loss_type=*&title_name=*&exterior_color=*&odometer_min=*&odometer_max=*"
        )
        .then(response => {
          this.data = response.data.lots;
        });
    },
    open_details(car) {
      this.$router.push({
        name: "auction_cars_details",
        params: { selected_car: car.id }
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
  // width: 70%
  // max-width: 100px
</style>
