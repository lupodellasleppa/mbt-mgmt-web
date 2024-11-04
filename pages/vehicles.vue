<template>
  <q-page>
    <div v-if="vehicleStore.loading" class="column items-center fixed-center">
      <q-spinner color="secondary-darker" size="7em" />
      <p class="q-pa-md text-h5 text-grey-8">Loading golf carts...</p>
    </div>
    <div
      v-else-if="!vehicleStore.vehicles.length"
      class="column text-center fixed-center items-center text-h3 text-grey-8"
    >
      No results!
    </div>
    <div
      v-else
      class="row items-start justify-start q-gutter-md q-pl-lg q-py-lg"
    >
      <div class="row full-width q-py-md" />
      <vehicle-card
        v-for="vehicle in vehicleStore.vehicles"
        :key="vehicle.plate"
        :plate="vehicle.plate"
        @deleted="popCard(vehicle.plate)"
      />
    </div>
    <q-page-sticky position="top-right">
      <vehicle-toolbar />
    </q-page-sticky>
  </q-page>
</template>

<script lang="ts" setup>
import { nextTick, onBeforeMount } from 'vue';
import { useVehicleStore } from '../stores';

const vehicleStore = useVehicleStore();

onBeforeMount(async () => {
  await vehicleStore.list();
});

const popCard = async (vehiclePlate: string) => {
  vehicleStore.vehicles = vehicleStore.vehicles.filter(
    (vehicle) => vehicle.plate != vehiclePlate
  );
  await nextTick();
};
</script>
