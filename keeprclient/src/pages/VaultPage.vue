<template>
  <div class="container-fluid" v-if="state.vault">
    <div class="row my-3">
      <div class="col-6 ml-3">
        <h2>
          {{ state.vault.name }}
        </h2>
        <p class="my-3">
          Keeps: {{ state.keeps.length }}
        </p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 d-flex card-columns my-4">
        <VaultKeep v-for="keep in state.keeps" :key="keep.id" :keep="keep" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { keepsService } from '../services/KeepsService'
import { vaultsService } from '../services/VaultsService'
import { AppState } from '../AppState'

export default {
  setup() {
    const route = useRoute()
    const state = reactive({
      vault: computed(() => AppState.activeVault),
      keeps: computed(() => AppState.vaultKeeps),
      account: computed(() => AppState.account)
    })
    onMounted(async() => {
      await vaultsService.getOne(route.params.id)
      await keepsService.getKeepsByVaultId(route.params.id)
      if (state.account) {
        await vaultsService.getMyVaults(state.account.id)
      }
    })
    return {
      state,
      route
    }
    // onMounted(() => {})
  }
}
</script>

<style scoped>

</style>
