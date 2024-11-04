<template>
  <q-card class="bg-amber-2 q-pa-md very-rounded-borders" style="width: 311px">
    <q-toolbar>
      <q-toolbar-title class="text-amber-10"
        >Edit golf cart details</q-toolbar-title
      >
    </q-toolbar>
    <q-card-section>
      <q-list>
        <q-item>
          <q-input
            v-model="vehicle.name"
            class="full-width"
            color="amber-10"
            label="Name"
          />
        </q-item>
        <q-item>
          <q-item-section>
            <q-item-label class="text-body1">
              Seats
              <q-chip
                color="amber-5"
                class="text-bold"
                :label="`${vehicle.seats} + 1`"
              />
            </q-item-label>
            <q-slider
              id="slider"
              ref="slider"
              v-model="vehicle.seats"
              color="amber-5"
              snap
              :min="3"
              :max="7"
              :step="2"
              :markers="2"
              marker-labels
            />
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
    <q-card-actions>
      <q-btn flat round color="positive" icon="check" @click="onPatch">
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
import { useVehicleStore, Vehicle } from '../../stores';
import { onMounted, reactive, ref } from 'vue';

export interface Props {
  plate: string;
}

const props = defineProps<Props>();

const vehicleStore = useVehicleStore();
const vehicle = reactive(new Vehicle(await vehicleStore.get(props.plate)));

const emit = defineEmits(['updated']);

const slider = ref();

onMounted(() => {
  const sliderElement = document.getElementById('slider');
  if (sliderElement) {
    sliderElement.addEventListener('wheel', (event: WheelEvent) => {
      if (event.deltaY < 0 && vehicle.seats < slider.value.max) {
        vehicle.seats += 2;
      } else if (event.deltaY > 0 && vehicle.seats > slider.value.min) {
        vehicle.seats -= 2;
      }
    });
  }
});

const onPatch = async () => {
  await vehicleStore.patch(props.plate, vehicle);
  emit('updated');
};
</script>

<style lang="scss">
.normal-flag {
  margin: -0.6em -0.9em -0.6em -0.7em !important;
}
</style>
