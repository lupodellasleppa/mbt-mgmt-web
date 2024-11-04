<template>
  <q-card class="bg-amber-2 q-pa-md very-rounded-borders" style="width: 311px">
    <q-toolbar>
      <q-toolbar-title class="text-amber-10">Add batteries</q-toolbar-title>
    </q-toolbar>
    <q-card-section>
      <json-forms
        :data="newVehicle"
        :renderers="renderers"
        :schema="schema"
        :uischema="uischema"
        @change="onChange"
      />
      <q-list>
        <wheel-slider
          v-model="newVehicle.seats"
          title="Seats"
          chip-color="amber-5"
          :chip-label="`${newVehicle.seats} + 1`"
        />

        <!-- <q-select
          v-model="newVehicle.battery"
          :options="vehiclesStore.batteries"
          label="Battery"
          color="amber-10"
        /> -->
      </q-list>
    </q-card-section>
    <q-card-actions>
      <q-btn flat round color="positive" icon="check" @click="sendForCreate">
        <q-tooltip class="text-body2">Save</q-tooltip>
      </q-btn>

      <q-space />

      <q-btn v-close-popup flat round color="warning" icon="cancel">
        <q-tooltip class="text-body2">Cancel</q-tooltip>
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { computed, onBeforeMount } from 'vue';
import { useVehicleStore } from '../../stores';
import WheelSlider from '../WheelSlider.vue';
import { JsonForms } from '@jsonforms/vue';
import { VehicleCreateSchema } from '../../models';
import { vanillaRenderers } from '@jsonforms/vue-vanilla';
import { mbtRenderers } from '../Renderers';
import { components } from '../../assets/openapi.json';
import $RefParser from '@apidevtools/json-schema-ref-parser';

const emit = defineEmits<{
  created: [];
}>();
const renderers = [...mbtRenderers, ...vanillaRenderers];

const { VehicleCreate } = { ...components.schemas };

const uischema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      scope: '#/properties/plate',
      options: { color: 'amber-10' },
    },
    {
      type: 'Control',
      scope: '#/properties/brand',
      options: { color: 'amber-10' },
    },
    {
      type: 'Control',
      scope: '#/properties/model',
      options: { color: 'amber-10' },
    },
    {
      type: 'Control',
      scope: '#/properties/name',
      options: { color: 'amber-10' },
    },
    {
      type: 'Control',
      scope: '#/properties/seats',
      options: { color: 'amber-10' },
    },
  ],
};

const vehicleStore = useVehicleStore();
const { newVehicle } = useVehicleStore();
const batteriesStore = useBatteriesStore();

const sendForCreate = async () => {
  await vehicleStore.create(newVehicle);
  await vehicleStore.list();
  emit('created');
};

onBeforeMount(async () => {
  await batteriesStore.list();
  await $RefParser.dereference(VehicleCreate);
});
</script>

<style lang="scss">
.normal-flag {
  margin: -0.6em -0.9em -0.6em -0.7em !important;
}
</style>
