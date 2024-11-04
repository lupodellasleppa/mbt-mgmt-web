<template>
  <div class="row justify-end">
    <div
      :class="{
        'full-width': $q.screen.xs,
        'justify-between': $q.screen.xs,
      }"
      class="row bg-primary q-pa-sm shadow-1"
      :style="toolbarStyle"
    >
      <q-input
        v-model="search"
        class="q-pr-lg col-xs-9 col-sm-auto"
        clearable
        dense
        rounded
        standout
        label="Search vehicle"
        color="primary"
        debounce="300"
        @focus="inputFocused = true"
        @blur="inputFocused = false"
        @update:model-value="doSearch"
      >
        <template #prepend>
          <q-icon :color="inputFocused ? 'primary' : 'black'" name="search" />
        </template>
      </q-input>
      <q-btn
        :label="$q.screen.gt.xs ? 'Add vehicle' : ''"
        color="positive"
        icon="add"
        @click="showAddVehicle"
      />
    </div>
  </div>
  <q-dialog v-model="showAddVehicleModel">
    <vehicle-add />
  </q-dialog>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useQuasar } from 'quasar';
import VehicleAdd from './VehicleAdd.vue';
import { useVehicleStore } from '../../stores';

const $q = useQuasar();

const vehicleStore = useVehicleStore();
const search = ref();
const inputFocused = ref(false);
const showAddVehicleModel = ref(false);

const showAddVehicle = async () => {
  showAddVehicleModel.value = true;
};

const doSearch = async () => {
  await vehicleStore.search(search.value);
};

const toolbarStyle = computed(() => {
  return $q.screen.xs ? '' : 'border-bottom-left-radius: 22px !important';
});
</script>
