<template>
  <div class="h-full flex items-center px-4">
    <el-card class="w-full">
      <el-input
        v-model="cost"
        type="number"
        step="0.01"
        placeholder="Informe o valor a ser cobrado"
      />
      <div class="flex justify-center items-center mt-4">
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

const collaboratorStore = namespace('collaborator');

@Component
export default class Collector extends Vue {
  private cost: number | null = null

  private showMessage(message: string, title: string): void {
    MessageBox.alert(message, title, {
      center: true,
      type: 'success',
      customClass: 'collector__message-box',
      confirmButtonText: 'Entendido',
      callback: this.redirectToHomePage,
    });
  }

  private redirectToHomePage():void{
    this.$router.push({ name: 'Home' });
  }

  private handleCollect() {
    if (this.cost) {
      this.showMessage(`O valor ${this.cost} foi adicionado a fatura`, 'Cobrança confirmada!');
      this.COLLECT(Number(this.cost));
    }
  }

  @collaboratorStore.Mutation
  private COLLECT!: (cost: number) => void
}
</script>

<style>
.collector__message-box.el-message-box {
  width: 80%;
}
</style>
