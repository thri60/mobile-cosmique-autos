<template>
  <div padding>
    <div class="q-pa-md">
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide :name="1" :img-src="car.images" />
        <q-carousel-slide
          v-for="image in car.images"
          :key="image"
          :name="image"
          :img-src="image"
        ></q-carousel-slide>
      </q-carousel>
    </div>

    <q-card class="my-card q-pa-md text-primary">
      <q-card-section>
        <div class="text-h4 q-mb-xs text-primary text-center">
          <i class="fas fa-car"></i> <b> {{ car.vehicle_name }}</b>
        </div>
               <q-separator inset="item" />
        <div class=" q-mb-xs">
          <i class="fas fa-tachometer-alt"></i> Odometer::
          {{ car.odometer_value }}{{ car.odometer_type.toUpperCase() }}
        </div>
        <q-separator inset />
        <div class="text-h6 q-mb-xs">
          <i class="far fa-calendar-alt"></i> Year::{{ car.year }}
        </div>
        <q-separator inset />

        <div class="text-h6 q-mb-xs">
          <i class="fas fa-palette"></i> Color:: {{ car.color }}
        </div>
        <q-separator inset />
        <strong class="text-primary text-h5"
          >Current Bid: <b> ${{ car.current_bid_value }} </b>
        </strong>
        <q-btn outline color="primary" text-color="primary">
          <b>Bid Now</b>
        </q-btn>
        <hr />
        <strong class="text-h5"
          >Buy Now for: <b> ${{ car.buy_it_now }} </b>
        </strong>
        <q-btn color="primary" outline text-color="primary">
          Buy it Now
        </q-btn>
        <q-card-actions>
          <q-space />
          Click for more Details
          <q-btn
            color="primary"
            round
            flat
            dense
            :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="expanded = !expanded"
          />
        </q-card-actions>

        <q-slide-transition>
          <div v-show="expanded">
            <q-separator />
            <q-card-section class="text-subitle2">
              <!-- <div class="text-h6 q-mb-xs">
                 <i class="far fa-calendar-alt"></i><b> Sale Date: </b> {{ car.sale_date }}
              </div> -->
              <hr />
              <div class="text-h6 q-mb-xs">
                Vehicle Type::{{ car.vehicle_type }}
              </div>
              <hr />
              <div class="text-h6 q-mb-xs">
                Body Style::{{ car.body_style }}
              </div>
              <hr />
              <div class="text-h6 q-mb-xs">
                Retail Value:: <b>${{ car.retail_value }}</b>
              </div>

              <hr />
              <div class="text-h6 q-mb-xs">VIN:: {{ car.vin }}</div>
              <hr />
              <div class="text-h6 q-mb-xs">
                Car Condition:: Grade {{ car.lotCondition }}
              </div>
              <hr />
            </q-card-section>
          </div>
        </q-slide-transition>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["selected_car"],

  data() {
    return {
      expanded: false,
      lorem: "welcome",
      slide: 1,
      autoplay: true,
      data: [],
      car: {}
      // onItemClick:{}
    };
  },

  methods: {
    get_details() {
      axios
        .get("https://www.salvagebid.com/rest-api/v2/lots/" + this.selected_car)
        .then(response => {
          this.car = response.data.lot;
        });
    },
    onItemClick() {
      console.log("Clicked on an Item");
    }
  },

  mounted() {
    this.get_details();
    // console.log(this);
  }
};
</script>
