import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  findUsers(term: string) {
    return [
      { id: 1, name: 'mix' },
      { id: 2, name: 'vek' },
    ].filter((u) => !term || u.name.indexOf(term) > -1);
  }
}
