<template>
  <div>
    <el-card class="box-card">
      <div
        slot="header"
        class="clearfix flex justify-between items-center"
      >
        <span>{{ profile.name }}</span>
        <el-avatar
          size="large"
          :src="avatarUrl"
        />
      </div>
      <div>
        <h2 class="mb-4 font-medium">
          Informação pessoal
        </h2>
        <p>CPF: {{ profile.cpf }}</p>
        <p>Contato: {{ profile.phone }}</p>
        <p>Vencimento: {{ profile.paymentDate }}</p>
      </div>
      <el-divider />
      <div>
        <span>Fatura atual: <strong class="strong__total-bill">{{ totalBill }}</strong></span>
      </div>
    </el-card>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import { Collaborator } from '@/interfaces/collaborator';

const collaboratorStore = namespace('collaborator');

@Component
export default class CollaboratorProfile extends Vue {
  @collaboratorStore.Getter
  private readonly profile!: Collaborator

  private readonly avatarUrl: string = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'

  private get totalBill(): number {
    return this.profile.bill.reduce((total, b) => total + b, 0);
  }
}
</script>

<style scoped>
.strong__total-bill::before{
  content: "R$";
}
</style>
