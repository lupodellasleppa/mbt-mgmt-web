<template>
  <q-tabs
    no-caps
    stretch
    inline-label
    align="justify"
    active-color="primary-darker"
    class="q-my-sm text-primary-complementary very-rounded-borders bg-primary-light col-xs-10 col-md-10 col-sm-10 col-lg-11"
  >
    <q-route-tab
      name="reservations"
      icon="sym_o_calendar_month"
      label="Reservations"
      :to="`/reservations/date/${dateTimeStore.viewDay.iso}`"
    />
    <q-route-tab
      name="vehicles"
      icon="sym_o_directions_car"
      label="Vehicles"
      to="/vehicles"
    />
    <q-route-tab
      name="drivers"
      icon="sym_o_search_hands_free"
      label="Drivers"
      to="/drivers"
    />
    <q-route-tab
      v-if="userStore.isMgmt"
      name="MGMT"
      icon="sym_o_shield_person"
      label="MGMT"
      to="/mgmt"
      :disable="!userStore.isMgmt"
    />
  </q-tabs>
</template>

<script setup lang="ts">
import { useDateTimeStore, useUserStore } from '../stores';
const dateTimeStore = useDateTimeStore();
const userStore = useUserStore();
</script>
