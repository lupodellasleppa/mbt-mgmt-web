import { defineStore, getActivePinia } from 'pinia';
import type { PermissionsEnum, RolesEnum, UserCreate } from '../../models';
import {
  createUserAuthPost,
  getCodeAuthGetCodePost,
  getCurrentApiV1UsersCurrentGet,
  getUserApiV1UsersSubGet,
  // loginAuthLoginPost,
  loginWithGoogleAuthLoginWithGooglePost,
  logoutAuthLogoutPost,
  refreshTokenAuthRefreshTokenPost,
} from '../../models';
import { RoleValuesEnum } from '../../models/additionalTypes';
import { Quasar } from 'quasar';
import { ref } from 'vue';
import { intersects, isEmpty } from 'radash';
import { User } from '..';
import { api } from '../../composables/useApi';

const getRoleValue = (roleName: RolesEnum): number => {
  return RoleValuesEnum[roleName as keyof typeof RoleValuesEnum];
};

export const useUserStore = defineStore('users', {
  state: () => ({
    currentUser: new User({} as User),
    newUser: new User({} as User),
    token: ref<string>(''),
    refreshToken: ref<string>(''),
    users: ref([] as User[]),
    locale: Quasar.lang.getLocale(),
  }),
  getters: {
    authenticated(state): boolean {
      return !!state.token;
    },
    userRole: (state): number =>
      isEmpty(state.currentUser)
        ? 999
        : getRoleValue(state.currentUser.role.name),
    isAdmin(): boolean {
      return this.userRole <= RoleValuesEnum.ADMIN;
    },
    isMgmt(): boolean {
      return this.userRole <= RoleValuesEnum.MGMT;
    },
  },
  actions: {
    async loginWithGoogle(loginToken: string) {
      const data = await this.$call(
        loginWithGoogleAuthLoginWithGooglePost({
          client: api,
          body: { token: loginToken },
        })
      );
      this.currentUser = new User(data.user);
      this.token = data.token;
      this.refreshToken = data.refresh_token;
    },
    async logout() {
      this.$call(
        logoutAuthLogoutPost({
          client: api,
          headers: { Authorization: `Bearer ${this.token}` },
        })
      );
      getActivePinia()?._s.forEach((store) => store.$reset());
    },
    async getRefreshToken() {
      const data = await this.$call(
        refreshTokenAuthRefreshTokenPost({
          client: api,
          body: { refresh_token: this.refreshToken },
        })
      );
      this.token = data.token;
      this.refreshToken = data.refresh_token;
    },
    async getUser(sub: string) {
      const data = await this.$call(
        getUserApiV1UsersSubGet({
          client: api,
          path: { sub },
        })
      );
      this.currentUser = new User(data);
    },
    async getCurrentUser() {
      const data = await this.$call(
        getCurrentApiV1UsersCurrentGet({
          client: api,
        })
      );
      this.currentUser = new User(data);
    },
    async createUser(user: UserCreate) {
      const data = await this.$call(
        createUserAuthPost({
          client: api,
          body: user,
        })
      );
      this.currentUser = new User(data);
    },

    async sendAuthCode(code: string, scopes?: Array<string>) {
      await this.$call(
        getCodeAuthGetCodePost({
          client: api,
          body: { code, scopes },
          headers: {
            'X-Requested-With': 'XmlHttpRequest',
            Authorization: `Bearer ${this.token}`,
          },
        })
      );
    },

    hasPermissions(permissions: PermissionsEnum[]): boolean {
      return intersects(
        this.currentUser.role.permissions.map((p) => p.name),
        permissions
      );
    },

    hasRole(role: RolesEnum): boolean {
      const roleValue = getRoleValue(role);

      return this.userRole <= roleValue;
    },
  },
  persist: {
    pick: [
      'currentUser.email',
      'currentUser.given_name',
      'currentUser.family_name',
      'currentUser.picture',
      'currentUser.role.name',
      'token',
      'refreshToken',
    ],
  },
});
