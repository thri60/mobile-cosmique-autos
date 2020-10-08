<template>
  <div padding>

    <q-card class="my-card q-pa-md" v-for="car in data" :key="car.lot" @click="open_details(car)">
      <img :src="car.img" >
      <q-card-section >
        <input type="hidden" v-model="car.lot">
        <div class="text-h5 q-mb-xs"><strong> {{ car.description }} </strong> </div>
        <!-- <div class="text-h6">{{ car.model }}</div> -->
        <div class="text-h6"><i class="fas fa-tachometer-alt"></i>   {{ car.odometer}}km </div>
        <div class="text-h6"> {{car.runDrives}} </div>
        <div class="row no-wrap items-center">
          <!-- <q-rating size="18px" :max="5" color="primary" /> -->
          <!-- <span class="text-caption text-grey q-ml-sm"></span> -->
        </div>
      </q-card-section>

      <hr>
    </q-card>
    <!-- <div class="q-pa-lg flex flex-center">
    <q-pagination
      v-model="data"
      :max="5"
      :direction-links="true"
      :boundary-links="true"
      icon-first="skip_previous"
      icon-last="skip_next"
      icon-prev="fast_rewind"
      icon-next="fast_forward"
    >
    </q-pagination>

  </div> -->
  <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
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
      car:{},

    };
  },



  methods: {
    get_cars() {
      axios
        .get(
          "https://www.autobidmaster.com/en/data/v1/lots/search?fixedCriteria=%7B%22QuickPick%22:%22cars%22%7D&page=1&size=20"
        )
        .then((response) => {
          this.data = response.data.data.results.contents;
        });
    },
    open_details(car){
     this.$router.push({ name: 'cars_details', params: { selected_car: car.lot }})
    }
  },

  mounted() {
    this.get_cars();
  },
};
</script>



<style lang="sass" scoped>
.my-card
  // width: 70%
  // max-width: 100px
</style>
