<template>
  <div>
    <div class="row">
      <div class="col-6">
        <h2>
          {{ state.vault.name }}
        </h2>
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
      vault: computed(() => AppState.activeVault)
    })
    onMounted(async() => {
      await vaultsService.getOne(route.params.id)
      await keepsService.getKeepsByVaultId(route.params.id)
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
