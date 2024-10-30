import { User as _User } from 'src/client';
export interface User extends _User {}

export class User implements _User {
  constructor(data: _User) {
    this.email = data.email;
    this.email_verified = data.email_verified;
    this.sub = data.sub;
    this.given_name = data.given_name;
    this.family_name = data.family_name;
    this.middle_name = data.middle_name;
    this.nickname = data.nickname;
    this.date_of_birth = data.date_of_birth;
    this.gender = data.gender;
    this.picture = data.picture;
    this.password = data.password;
    this.uid = data.uid;
    this.active = data.active;
    this.role = data.role;
    this.country = data.country;
    this.websites = data.websites;
    this.emails = data.emails;
    this.phone_numbers = data.phone_numbers;
  }

  get fullName() {
    const fullName = [
      this.given_name,
      this.middle_name,
      this.nickname,
      this.family_name,
    ];
    return fullName.filter((s) => s).join(' ');
  }
}
