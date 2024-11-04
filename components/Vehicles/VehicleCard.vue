<template>
  <q-card class="bg-amber-2 very-rounded-borders" style="width: 280px">
    <q-card-section horizontal class="items-center">
      <!-- AVATAR -->
      <q-card-section>
        <q-avatar size="88px">
          <img :src="vehicle.picture ? vehicle.picture : avatarPlaceholder" />
        </q-avatar>
      </q-card-section>

      <!-- SEATS -->
      <q-card-section class="col-7 flex justify-end items-start">
        <!-- CHIPS -->
        <div class="row full-width justify-end">
          <q-chip
            v-if="currentStops.length"
            color="red"
            text-color="white"
            label="Stop"
          />
          <q-chip color="amber-2" :ripple="false">
            <q-avatar color="amber-1">
              {{ vehicle.seats }}
            </q-avatar>
            seats
          </q-chip>
        </div>
      </q-card-section>
    </q-card-section>

    <!-- GOLF CART DETAILS -->

    <!-- NAME  -->

    <q-card-section class="col-7">
      <div class="text-h5">
        {{ title(vehicle.name) }}
      </div>
    </q-card-section>
    <q-list>
      <!-- BRAND  -->

      <q-item>
        <q-item-section avatar />
        <q-item-section>
          <q-item-label>
            {{ vehicle.brand || '-' }}
          </q-item-label>
          <q-item-label caption> Brand </q-item-label>
        </q-item-section>
      </q-item>

      <!-- MODEL  -->

      <q-item>
        <q-item-section avatar>
          <q-icon name="sym_o_label" />
        </q-item-section>
        <q-item-section>
          <q-item-label>
            {{ vehicle.model || '-' }}
          </q-item-label>
          <q-item-label caption> Model </q-item-label>
        </q-item-section>
      </q-item>

      <!-- LICENSE PLATE -->

      <q-item>
        <q-item-section avatar>
          <q-icon name="sym_o_tag" />
        </q-item-section>
        <q-item-section>
          <q-item-label>
            {{ vehicle.plate }}
          </q-item-label>
          <q-item-label caption> License Plate </q-item-label>
        </q-item-section>
      </q-item>

      <!-- BATTERY -->

      <q-item>
        <q-item-section avatar>
          <q-icon name="sym_o_electric_car" />
        </q-item-section>
        <q-item-section>
          <q-item-label>
            {{ vehicle.battery }}
          </q-item-label>
          <q-item-label caption> Battery </q-item-label>
        </q-item-section>
      </q-item>

      <!-- NEXT STOP -->

      <q-item clickable :to="`golf_carts/stops/${vehicle.plate}`">
        <q-item-section avatar>
          <q-icon name="sym_o_do_not_disturb_on" color="grey-9" />
        </q-item-section>
        <q-item-section v-if="nextStop" class="text-amber-8">
          {{ nextStopLabel }}
          <q-item-label caption>
            Next stop: {{ capitalize(title(nextStop?.type)) }}
          </q-item-label>
        </q-item-section>
        <q-item-section v-else>
          <q-item-label class="text-grey-9"> - </q-item-label>
          <q-item-label caption> No planned stops </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <!-- ACTIONS -->

    <q-card-actions>
      <!-- GO TO STOPS -->
      <q-btn
        outline
        round
        color="blue-8"
        icon="sym_o_schedule"
        @click="$router.push(`golf_carts/stops/${vehicle.plate}`)"
      >
        <q-tooltip class="text-body2">Plan stops</q-tooltip>
      </q-btn>

      <!-- EDIT -->
      <q-btn
        outline
        round
        color="amber-8"
        icon="sym_o_edit"
        @click="editVehicle = true"
      >
        <q-tooltip class="text-body2">Edit</q-tooltip>
      </q-btn>

      <q-space />

      <!-- DELETE -->
      <q-btn
        outline
        round
        color="negative"
        icon="sym_o_delete"
        @click="deleteDriverWarning = true"
      >
        <q-tooltip class="text-body2">Delete</q-tooltip>
      </q-btn>
    </q-card-actions>

    <!--  -->
    <q-dialog v-model="editVehicle">
      <vehicle-edit :plate="plate" @updated="vehicleUpdated" />
    </q-dialog>

    <!-- delete driver warning -->

    <warning-dialog
      v-model="deleteDriverWarning"
      title="Deleting golf cart"
      title-class="bg-amber-2 text-negative"
      buttons-class="bg-amber-2"
      body-background-color="bg-amber-2"
      :body="deleteWarningMessage"
      :cancel-button="{ flat: true, rounded: true, label: 'abort' }"
      :proceed-button="{
        label: 'delete',
        color: 'negative',
        textColor: 'white',
        rounded: true,
      }"
      @proceed-button="deleteCard"
    />
  </q-card>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount, reactive, ref } from 'vue';
import { title, capitalize } from 'radash';
import type { Stop } from '../../models';
import { date } from 'quasar';
import { useVehicleStore, Vehicle } from '../../stores';

export interface Props {
  plate: string;
}

const props = defineProps<Props>();

const emit = defineEmits(['deleted']);

const timeMask = 'YYYY-MM-DD[T]HH:mm:ss';

const vehicleStore = useVehicleStore();
const vehicle = reactive(new Vehicle(vehicleStore.retrieve(props.plate)));

const avatarPlaceholder = computed(() => {
  const fontSize = '0.30em';
  const length = '4';
  const name = vehicle.name
    ? `${vehicle.name.substring(0, 3)}${vehicle.seats}`
    : vehicle.plate;
  const background = 'fff8e1';
  const baseApiUrl = 'https://ui-avatars.com/api/?';
  let placeholder = baseApiUrl;
  placeholder += `name=${name}`;
  placeholder += `&background=${background}`;
  placeholder += `&length=${length}`;
  placeholder += `&font-size=${fontSize}`;
  return placeholder;
});

const nextStops = ref<Stop[]>({} as Stop[]);
const currentStops = ref<Stop[]>({} as Stop[]);

onBeforeMount(async () => {
  const now = new Date().toISOString();
  nextStops.value = await vehicleStore.listStops(props.plate, {
    start_datetime_from: now,
  });
  currentStops.value = await vehicleStore.listStops(props.plate, {
    start_datetime_to: now,
    end_datetime_from: now,
  });
});

const nextStop = computed(() => {
  if (currentStops.value.length) {
    const {
      start_datetime: from,
      end_datetime: to,
      type,
    } = {
      ...currentStops.value[0],
    };
    return { from, to, type };
  } else if (nextStops.value.length) {
    const {
      start_datetime: from,
      end_datetime: to,
      type,
    } = {
      ...nextStops.value[0],
    };
    return { from, to, type };
  } else {
    return null;
  }
});

const nextStopIsSingleDay = computed(() => {
  const start = date.extractDate(nextStop.value?.from as string, timeMask);
  const end = date.extractDate(nextStop.value?.to as string, timeMask);
  return compareIfSingleDay(start, end);
});

const compareIfSingleDay = (start: Date, end: Date) => {
  return start.getDate() === end.getDate();
};

const nextStopLabel = computed(() => {
  const startDate = date.formatDate(nextStop.value?.from, 'DD MMM YYYY');
  const endDate = date.formatDate(nextStop.value?.to, 'DD MMM YYYY');
  const startTime = date.formatDate(nextStop.value?.from, 'HH:mm');
  const endTime = date.formatDate(nextStop.value?.to, 'HH:mm');
  if (nextStopIsSingleDay.value) {
    return `${startDate} ${startTime} - ${endTime}`;
  } else {
    return `${startDate} - ${endDate}`;
  }
});

const editVehicle = ref(false);

const vehicleUpdated = () => {
  vehicleStore.refresh(props.plate);
  editVehicle.value = false;
};

const deleteDriverWarning = ref(false);
const deleteWarningMessage =
  'The golf cart will be removed and only a user with high enough privileges will be able to restore it. Continue?';

const deleteCard = async () => {
  await vehicleStore.delete(props.plate);
  emit('deleted');
};
</script>
