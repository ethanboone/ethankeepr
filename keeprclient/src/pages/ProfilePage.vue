<template>
  <div class="container-fluid" v-if="state.profile">
    <div class="row">
      <div class="col-10 d-flex my-3 align-items-center">
        <img :src="state.profile.picture" alt="">
        <h2 class="mx-3">
          {{ state.profile.name }}
        </h2>
        <div class="row">
          <div class="col-12 align-items-center">
            <h3>Keeps: {{ state.keeps.length }}</h3>
            <h3>Vaults: {{ state.vaults.length }}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col">
            <h3>
              Vaults
            </h3>
          </div>
        </div>
        <div class="justify-content-center">
          <div class="row d-flex my-5" v-if="state.keeps">
            <Vault v-for="vault in state.vaults" :key="vault.id" :vault="vault" />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col">
            <h3>
              Vaults
            </h3>
          </div>
          <div class="d-flex row my-5" v-if="state.keeps">
            <Keep v-for="keep in state.keeps" :key="keep.id" :keep="keep" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { profilesService } from '../services/ProfilesService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

export default {
  setup() {
    const state = reactive({
      profile: computed(() => AppState.activeProfile),
      keeps: computed(() => AppState.keeps),
      vaults: computed(() => AppState.vaults)
    })
    const route = useRoute()
    onMounted(async() => {
      profilesService.getProfile(route.params.id)
      logger.log(state.vaults)
      profilesService.getKeepsByProfile(route.params.id)
      profilesService.getVaultsByProfile(route.params.id)
    })
    return { state }
  }
}
</script>

<style scoped>

</style>
