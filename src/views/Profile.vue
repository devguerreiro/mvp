<template>
  <div>
    <m-collaborator-profile />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

import MCollaboratorProfile from '@/components/CollaboratorProfile.vue';

@Component({
  components: { MCollaboratorProfile },
})
export default class Profile extends Vue {}
</script>
