<template>
  <div class="h-full flex items-center px-4">
    <el-card class="w-full">
      <h1 class="text-center mb-4">
        {{ profile.name }}
      </h1>
      <el-input
        v-model="cost"
        type="number"
        step="0.01"
        placeholder="Informe o valor a ser cobrado"
      />
      <div class="flex justify-center items-center mt-4">
        <el-button
          type="info"
          @click="handleRedirectToProfile"
        >
          Acessar perfil
        </el-button>
        <el-button
          type="primary"
          @click="handleCollect"
        >
          Cobrar
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { MessageBox } from 'element-ui';
import { namespace } from 'vuex-class';

import { Collaborator } from '@/interfaces/collaborator';

const collaboratorStore = namespace('collaborator');

@Component
export default class Collector extends Vue {
  private cost: number | null = null

  @collaboratorStore.Getter('profile') profile!: Collaborator

  @collaboratorStore.Action('collect') collect!: (cost: number) => void

  private showMessage(message: string, title: string): void {
    MessageBox.alert(message, title, {
      center: true,
      type: 'success',
      customClass: 'collector__message-box',
      confirmButtonText: 'Entendido',
    });
  }

  private handleCollect() {
    const cost = Number(this.cost);

    if (cost) {
      const singularMessage = `Foi adicionado R$${cost} à fatura`;
      const pluralMessage = `Foram adicionados R$${cost} à fatura`;

      this.showMessage(cost > 1 ? pluralMessage : singularMessage, 'Cobrança registrada!');

      this.collect(cost);
      this.cost = null;
    }
  }

  private handleRedirectToProfile() {
    this.$router.push({ name: 'Profile' });
  }
}
</script>

<style>
.collector__message-box.el-message-box {
  width: 80%;
}
</style>
