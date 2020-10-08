<template>
  <q-page padding>

    <div class="q-pa-md">
      <q-card class="my-card q-pa-md">
        <q-card-section class="bg-primary text-white">
          <div class="text-center"><b>UNSURE WHICH VEHICLE YOU ARE LOOKING FOR? FIND IT HERE</b></div>
        </q-card-section>
        <q-separator />
        <q-card-section>


          <div class="row justify-center q-pa-md">
            <div class="col-12 col-md-2 q-pa-md">
              <q-select
                rounded
                outlined
                v-model="form.make"
                :options="makeOptions"
                label="Any Make"
              />
            </div>
            <div class="col-12 col-md-2 q-pa-md">
              <q-select
                rounded
                outlined
                v-model="form.make"
                :options="makeOptions"
                label="Any Model"
              />
            </div>
            <div class="col-12 col-md-2 q-pa-md">
              <q-select
                rounded
                outlined
                v-model="form.make"
                :options="makeOptions"
                label="Vehicle Status"
              />
            </div>
            <div class="col-12 col-md-2 q-pa-md">
              <q-select
                rounded
                outlined
                v-model="form.make"
                :options="makeOptions"
                label="Min Year"
              />
            </div>
            <div class="col-12 col-md-2 q-pa-md">
              <q-select
                rounded
                outlined
                v-model="form.make"
                :options="makeOptions"
                label="Max Year"
              />
            </div>
          </div>

          <div class="row justify-center q-pa-md">
            <div class="col-12 col-md-2 q-pa-md">
              Price Range
              <q-range v-model="price" :min="0" :max="10000" :step="2" label />
            </div>
            <div class="col-12 col-md-2 q-pa-md">
              Vehicle Mileage Range
              <q-range
                v-model="milage"
                :min="0"
                :max="3000"
                :step="2000"
                label
              />
            </div>
            <div class="col-12 col-md-4 q-pa-md">
              <q-btn
                class="full-width"
                rounded
                color="primary"
                text-color="white"
                label="SEARCH"
              />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>

  </q-page>
</template>

<script>
export default {
  data() {
    return {
      slide: 1,
      form: {},
      data: [],
      makeOptions: [],
      price: {
        min: 0,
        max: 10000
      },
      milage: {
        min: 0,
        max: 3000
      }
    };
  },
}
</script>
