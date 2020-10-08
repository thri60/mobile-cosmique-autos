<template>
  <div padding>
    <br />
    <q-card class="my-card q-pa-md" v-for="car in data" :key="car.id" @click="open_details(car)">
      <img :src="car.images[0]" />
      <q-card-section>
        <input type="hidden" v-model="car.id" />
       <hr>
        <div class="text-h5 q-mb-xs text-primary" >
          <strong > {{ car.vehicle_name }} </strong> <q-space />
        </div>
           <hr>
        <div class="text-h6">
          <i class="fas fa-tachometer-alt"></i>
          <b> MILEAGE: </b>
          {{ car.odometer_value }}{{ car.odometer_type.toUpperCase() }}
        </div>
         <hr>

         <hr>
        <div class="text-h6"> <i class="far fa-calendar-alt"></i><b> Sale Date: </b> {{ car.sale_date }}</div>
        <hr>

        <div class="text-h6"><b>Start Code: </b> {{ car.start_code }}</div>
         <hr>
        <div class="text-h6"><b>Damage: </b> {{ car.damage }}</div>
        <hr>
         <div class="text-h5 q-mb-xs">
          <strong>Current Bid: ${{ car.current_bid_value }} </strong>
          <q-btn outline color="primary" text-color="primary">
          <b>Bid Now</b>
          </q-btn>
            <hr >
         <strong>Buy Now for: ${{ car.buy_it_now }} </strong>
          <q-btn color="primary" outline text-color="primary">
           Buy it Now
          </q-btn>
        </div>

    <q-card-actions>


        </q-card-actions>
      </q-card-section>
      <hr />
    </q-card>
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
    };
  },

  methods: {
    get_cars() {
      axios
        .get(
          "https://www.salvagebid.com/rest-api/v1.0/lots/search?page=1&per_page=26&type=CAR&make=*&model=*&search_id=&search_query=&year_from=1920&year_to=2021&sort_field=&sort_order=&sales_type=*&distance=*&destination_zip=&location_state=*&location_city=*&primary_damage=*&loss_type=*&title_name=*&exterior_color=*&odometer_min=*&odometer_max=*"
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
