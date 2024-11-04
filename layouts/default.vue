<template>
  <q-layout view="hHh LpR fff" class="body-bg">
    <q-header v-if="$route.path !== '/login'" class="transparent">
      <main-toolbar />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  <!-- <new-reservation-dialog
    v-if="reservationsStore.newReservationDialog"
    v-model:maximized="newReservationMaximized"
  /> -->
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useMeta, useQuasar } from "quasar";
import { useUserStore } from "src/stores/users";
import MainToolbar from "src/components/MainToolbar.vue";
import { useReservationsStore } from "src/stores/reservations";
// import EssentialLink from 'components/EssentialLink.vue';

// callback for sign in with google button must be a global function
// otherwise it is not detected by the button.
// for it to be a global function, we declare it in the window object,
// but to satify TypeScript we have to declare this interface below.
declare global {
  interface Window {
    getToken: (response: any) => void;
    authzLoaded: (response: any) => void;
    google: any;
    client: any;
  }
}
// load google library for button
const metaData = {
  script: {
    google: {
      src: "https://accounts.google.com/gsi/client",
      async: "true",
    },
  },
};
useMeta(metaData);
////////////////////////////////////////////////////////////////////////

const usersStore = useUserStore();
onMounted(() => {
  usersStore.getCurrentUser();
});

const $q = useQuasar();

const newReservationMaximized = ref($q.screen.gt.xs);
const reservationsStore = useReservationsStore();
</script>

<style sass>
.very-rounded-borders {
  border-radius: 22px;
}
</style>
