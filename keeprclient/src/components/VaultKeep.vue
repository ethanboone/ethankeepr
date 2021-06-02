<template>
  <div class="mx-1 my-2 card rounded">
    <div class="">
      <button type="button" class="btn" data-toggle="modal" @click="details(keep.id, keep)">
        <img :src="keep.img" class="w-100" alt="">
        {{ keep.name }}
      </button>
      <router-link :to="{name: 'Profile', params: {id: keep.creatorId}}">
        <div class="text-center my-2">
          <img :src="keep.creator.picture" width="60" class="rounded-circle" alt="">
          {{ keep.creator.name }}
        </div>
      </router-link>
      <div class="d-flex justify-content-center my-3">
        <button class="btn btn-secondary" v-if="state.vault.creatorId == state.account.id" @click="removeKeep(keep.id)">
          Remove From Vault
        </button>
      </div>
    </div>
    <div class="">
      <div class="modal" :id="'keep' + keep.id" tabindex="-1" aria-labelledby="keepModal" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <div class="row justify-content-end">
                <div class="col-6">
                  <div class="text-right">
                    <button type="button" class="close mb-3" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-md-6 d-flex">
                  <img :src="keep.img" max-width="100%" height="auto" class="img-fluid" alt="">
                </div>
                <div class="col-12 col-md-6 d-flex flex-column">
                  <h3 id="keepModal" class="d-flex">
                    {{ keep.name }}
                  </h3>
                  <div class="d-flex flex-row">
                    <p class="mx-2">
                      Views: {{ keep.views }}
                    </p>
                    <p class="mx-2">
                      Shares: {{ keep.shares }}
                    </p>
                    <p class="mx-2">
                      Keeps: {{ keep.keeps }}
                    </p>
                  </div>
                  <p>
                    {{ keep.description }}
                  </p>
                  <router-link :to="{name: 'Profile', params: {id: keep.creatorId}}">
                    <div class="my-2">
                      <img :src="keep.creator.picture" width="60" class="rounded-circle" alt="">
                      {{ keep.creator.name }}
                    </div>
                  </router-link>
                  <div class="row d-flex">
                    <div class="col-12 d-flex justify-content-center my-2">
                      <button class="btn btn-secondary" v-if="state.account.id == state.vault.creatorId" @click="removeKeep(keep.id)">
                        Remove From Vault
                      </button>
                      <div class="dropdown" v-else>
                        <button class="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                        >
                          Add To Vault
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <button class="dropdown-item" type="button" v-for="vault in state.myVaults" :key="vault.id" @click="addToVault(keep.id, keep, vault.id)">
                            {{ vault.name }}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="button-sm" class="btn btn-danger" v-if="state.account && state.account.id == keep.creatorId" @click="deleteKeep(keep.id)">
                    Delete
                  </button>
                  <div class="d-none">
                    {{ state.keepId = keep.id }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import $ from 'jquery'
import { keepsService } from '../services/KeepsService'
import { AppState } from '../AppState'
import { vaultKeepService } from '../services/VaultKeepService'
import { logger } from '../utils/Logger'

export default {
  props: {
    keep: {
      type: Object,
      required: true
    }
  },
  setup() {
    const state = reactive({
      account: computed(() => AppState.account),
      myVaults: computed(() => AppState.myVaults),
      vault: computed(() => AppState.activeVault),
      vaultKeep: null,
      keepId: null

    })
    // onMounted(async() => {
    // })
    return {
      state,
      details(id, body) {
        $(`#keep${id}`).modal('toggle')
      },
      async addToVault(keepId, keep, vaultId) {
        keep.keeps++
        keepsService.userEdit(keepId, keep)
        const body = {
          keepId: keepId,
          vaultId: vaultId
        }
        vaultKeepService.create(body)
      },
      async deleteKeep(id) {
        try {
          const confirm = window.confirm('Are you sure you want to delete this keep?')
          if (confirm) {
            window.alert(await keepsService.delete(id))
          }
        } catch (error) {

        }
      },
      async removeKeep(id) {
        try {
          const confirm = window.confirm('Are you sure you want to remove this keep from the vault?')
          if (confirm) {
            state.vaultKeep = await vaultKeepService.getVaultKeepByVaultAndKeepId(state.vault.id, id)
            await vaultKeepService.delete(state.vaultKeep.data.id)
          }
        } catch (error) {
          logger.error(error)
        }
      }
    }
    // onMounted(() => {})
  }
}
</script>

<style scoped>
</style>
