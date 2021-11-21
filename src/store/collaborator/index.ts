import {
  Module, VuexModule, Mutation,
} from 'vuex-module-decorators';

import { Collaborator } from '@/interfaces/collaborator';

@Module({ namespaced: true, name: 'collaborator' })
export default class CollaboratorStore extends VuexModule {
  public _profile: Collaborator = {
    cpf: '123.456.789-10',
    name: 'Tio Paulo do Facebook',
    paymentDate: '30/11/2021',
    phone: '47 98877-6655',
    bill: [],
  }

  public get profile(): Collaborator {
    return this._profile;
  }

  @Mutation
  public COLLECT(cost: number): void {
    const { bill } = this._profile;

    console.log(cost);

    bill.push(cost);
  }
}
