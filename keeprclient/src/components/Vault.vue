<template>
  <div class="mx-1 my-2 card rounded" v-if="state.account">
    <div class="m-2">
      <div class="d-flex justify-content-end" v-if="state.account.id == vault.creatorId">
        <button type="button" class="close mb-1" @click="deleteVault(vault.id)">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <router-link :to="{name: 'Vault', params: {id: vault.id}}">
        <h4>
          {{ vault.name }}
        </h4>
      </router-link>
      <router-link :to="{name: 'Profile', params: {id: vault.creatorId}}">
        {{ vault.creator.img }}
        {{ vault.creator.name }}
      </router-link>
    </div>
    <div class="modal" :id="vault.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <img :src="vault.img" height="100" alt="">
            <h3 class="modal-title" id="exampleModalLabel">
              {{ vault.name }}
            </h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            {{ vault.description }}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import $ from 'jquery'
import { vaultsService } from '../services/VaultsService'
import { AppState } from '../AppState'

export default {
  props: {
    vault: {
      type: Object,
      required: true
    }
  },
  setup() {
    const state = reactive({
      account: computed(() => AppState.account)
    })
    return {
      state,
      details(id) {
        $(`${id}`).modal('toggle')
      },
      async deleteVault(id) {
        const confirm = window.confirm('Are you sure you want to delete this vault?')
        if (confirm) {
          await vaultsService.delete(id)
        }
      }
    }
    // onMounted(() => {})
  }
}
</script>

<style scoped>
</style>
