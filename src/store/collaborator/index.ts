import {
  Module, VuexModule, Mutation, Action,
} from 'vuex-module-decorators';

import { Collaborator } from '@/interfaces/collaborator';

@Module({ namespaced: true })
export default class CollaboratorStore extends VuexModule {
  private _profile: Collaborator = {
    cpf: '123.456.789-10',
    name: 'Tio Paulo do Facebook',
    paymentDate: '30/11/2021',
    phone: '47 98877-6655',
    bill: [],
  }

  private get profile(): Collaborator {
    return this._profile;
  }

  @Mutation
  private COLLECT(cost: number): void {
    const { bill } = this._profile;

    bill.push(cost);
  }

  @Action({ commit: 'COLLECT' })
  private collect(cost: number): number {
    return cost;
  }
}
