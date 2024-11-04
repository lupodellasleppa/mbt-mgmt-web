<template>
  <div
    class="row justify-around items-center bg-primary"
    style="pointer-events: auto"
  >
    <q-btn
      class="gt-xs"
      flat
      round
      text-color="black"
      @click="$router.push('/')"
    >
      <q-avatar size="50px">
        <q-icon name="sym_o_home" color="primary-darker" />
        <!-- <img src="~/assets/mbt-final-logo-2018-smaller.png" /> -->
      </q-avatar>
      <q-tooltip :delay="450" class="text-body2">Home</q-tooltip>
    </q-btn>
    <q-btn class="xs col-auto" icon="menu" flat square />
    <RoutingTabs />
    <ProfileSettings v-if="usersStore.authenticated" class="gt-xs" />
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../stores';
const usersStore = useUserStore();
</script>
