<template>
  <div class="container mx-auto h-full flex flex-col justify-center items-center">
    <h1 class="text-secondary text-4xl text-center">
      Com<strong class="text-primary">Fiado</strong>
    </h1>
    <p>
      Slogan da empresa!
    </p>
    <el-button
      type="primary"
      class="mt-4"
      @click="redirectToProfilePage"
    >
      Acessar perfil
    </el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import MCollaboratorProfile from '@/components/CollaboratorProfile.vue';

@Component({
  components: {
    MCollaboratorProfile,
  },
})
export default class Home extends Vue {
  private showProfile = false

  private redirectToProfilePage(): void{
    this.$router.push({ name: 'Profile' });
  }
}
</script>
