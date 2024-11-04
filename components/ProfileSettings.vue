<template>
  <q-btn round flat>
    <q-avatar size="50px" color="white">
      <img :src="proPic" referrerPolicy="no-referrer" />
    </q-avatar>
    <q-menu class="very-rounded-borders">
      <div class="row no-wrap q-pa-md">
        <div class="column">
          <div class="text-h6">Settings</div>
          <div class="text-italic q-mt-md">None yet. Coming soon!</div>
          <!-- <q-toggle class="col" v-model="darkMode" label="Dark mode" /> -->
          <div class="row q-mt-lg justify-between items-end">
            <div class="text-body1 text-bold">Version</div>
            <div>{{ version }}</div>
          </div>
        </div>

        <q-separator vertical inset class="q-mx-lg" />
        <div class="column items-start">
          <div
            class="text-body1 text-secondary-darker ellipsis"
            style="max-width: 250px"
          >
            {{ usersStore.currentUser?.name }}
          </div>
          <div class="text-caption text-secondary-darker">
            {{ usersStore.currentUser?.email }}
          </div>
          <q-btn
            class="q-mt-md"
            color="secondary"
            label="logout"
            @click="logOut"
          />
        </div>
      </div>
    </q-menu>
    <q-tooltip :delay="450" class="text-body2">Settings</q-tooltip>
  </q-btn>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { version } from "../../package.json";

const usersStore = useUserStore();
const router = useRouter();
const proPic = usersStore.currentUser?.picture;
const $q = useQuasar();

const logOut = () => {
  usersStore.logout();
  localStorage.removeItem("token");
  usersStore.$reset();
  router.push("/login");
};

const [darkMode, modifiers] = defineModel({
  get() {
    return $q.dark.isActive;
  },
  set(value: boolean) {
    $q.dark.set(value);
    return $q.dark.isActive;
  },
});
</script>
