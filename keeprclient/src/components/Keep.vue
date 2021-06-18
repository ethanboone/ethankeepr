<template>
  <div class="column mx-1 my-2 rounded bg-card border-0 shadow-lg">
    <div class="border-0">
      <div class="card bg-dark text-white border-0">
        <img :src="keep.img" class="card-img" alt="keep image">
        <div class="card-img-overlay p-0 d-flex align-items-end"
             @click="details(keep.id, keep)"
        >
          <div class="m-0">
            <div class="row transparent rounded m-0">
              <div class="col-12 d-flex justify-content-center">
                <h5 class="card-title mb-0">
                  {{ keep.name }}
                </h5>
              </div>
              <div class="col-12 d-flex justify-content-center">
                <router-link :to="{name: 'Profile', params: {id: keep.creatorId}}">
                  <div class="my-2">
                    <img :src="keep.creator.picture" width="40" class="rounded-circle" alt="">
                    {{ keep.creator.name }}
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
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
                      Keeps: {{ keep.keeps }}
                    </p>
                  </div>
                  <p>
                    {{ keep.description }}
                  </p>
                  <router-link :to="{name: 'Profile', params: {id: keep.creatorId}}">
                    <div class="router my-2">
                      <img :src="keep.creator.picture" width="60" class="rounded-circle" alt="">
                      {{ keep.creator.name }}
                    </div>
                  </router-link>
                  <div class="d-flex justify-content-center my-2">
                    <div class="dropdown">
                      <button class="btn btn-sm btn-outline-info dropdown-toggle"
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
                    <button type="button-sm" class="btn btn-sm btn-outline-danger mx-2" v-if="state.account && state.account.id == keep.creatorId" @click="deleteKeep(keep.id)">
                      Delete
                    </button>
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
      myVaults: computed(() => AppState.myVaults)
    })
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
      }
    }
    // onMounted(() => {})
  }
}
</script>

<style scoped>
.transparent {
  background-color: rgba(0, 0, 0, 0.4);
}
.router{
  text-decoration: none !important;
  color: black !important;
}
</style>
