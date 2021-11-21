<template>
  <div class="container mx-auto h-full flex flex-col justify-center items-center">
    <img
      src="@/assets/img/logo.svg"
      alt="Logo Comfiado"
    >
    <p>
      Slogan da empresa!
    </p>
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
