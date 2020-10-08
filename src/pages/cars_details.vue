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
        <q-carousel-slide :name="1" :img-src="car.largeImage" />
        <q-carousel-slide
          v-for="image in car.images"
          :key="image.thumbnail"
          :name="image.thumbnail"
          :img-src="image.thumbnail"
        ></q-carousel-slide>
      </q-carousel>
    </div>

    <q-card class="my-card q-pa-md">
      <q-card-section>
        <div class="q-mb-xs">

        </div>
        <div class="text-h6 q-mb-xs">Car Make::{{ car.make }}</div>
        <hr />
        <div class="text-h6 q-mb-xs">Odometer:: {{ car.odometer }}KM</div>
        <hr />
        <div class="text-h6 q-mb-xs">Model::{{ car.model }}</div>
        <hr />
        <div class="text-h6 q-mb-xs">Year::{{ car.year }}</div>
        <hr />

        <div class="text-h6 q-mb-xs">Color:: {{ car.color }}</div>
        <hr />
        Love it?  Click to buy now:
        <q-btn-dropdown text-color="primary" outline label="Price: $1937 ">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Buy Now</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>

        </q-btn-dropdown>

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
              <div class="text-h6 q-mb-xs">
                Model Group::{{ car.modelGroup }}
              </div>
              <hr />
              <div class="text-h6 q-mb-xs">Body Style::{{ car.bodyStyle }}</div>
              <hr />
              <div class="text-h6 q-mb-xs">
                Engine Size::{{ car.engineSize }}
              </div>
              <hr />
              <div class="text-h6 q-mb-xs">
                key status:: {{ car.keysStatus }}
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
      car: {},
      // onItemClick:{}
    };
  },

  methods: {
    get_details() {
      axios
        .get(
          "https://www.autobidmaster.com/en/data/v2/lots/" + this.selected_car
        )
        .then(response => {
          this.car = response.data.lot;
        });
    },
    onItemClick () {
      console.log('Clicked on an Item')
    }
  },

  mounted() {
    this.get_details();
    // console.log(this);
  }
};
</script>
