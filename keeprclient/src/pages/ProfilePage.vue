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
            <button class="btn btn-success" data-toggle="modal" data-target="#newVault" v-if="state.profile.id == state.account.id">
              +
            </button>
            <div class="modal"
                 id="newVault"
                 tabindex="-1"
                 aria-labelledby="exampleModalLabel"
                 aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      New Vault
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form @submit.prevent="createVault">
                      <div class="form-group">
                        <label for="name">Name</label>
                        <input required
                               type="text"
                               class="form-control"
                               id="name"
                               placeholder="Vault Name..."
                               v-model="state.newVault.name"
                        >
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">Description</label>
                        <textarea required class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="state.newVault.description"></textarea>
                      </div>
                      <label for="exampleFormControlSelect1">Private/Public</label>
                      <select class="form-control" id="exampleFormControlSelect1" v-model="state.newVault.isPrivate">
                        <option>Private</option>
                        <option>Public</option>
                      </select>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                          Close
                        </button>
                        <button type="submit" class="btn btn-primary">
                          Create
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="justify-content-center">
          <div class="row d-flex my-5" v-if="state.vaults">
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
              Keeps
            </h3>
            <button class="btn btn-success" data-toggle="modal" data-target="#newKeep" v-if="state.profile.id == state.account.id">
              +
            </button>
            <div class="modal"
                 id="newKeep"
                 tabindex="-1"
                 aria-labelledby="exampleModalLabel"
                 aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      New Keep
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form @submit.prevent="createKeep">
                      <div class="form-group">
                        <label for="name">Name</label>
                        <input required
                               type="text"
                               class="form-control"
                               id="name"
                               placeholder="Keep Name..."
                               v-model="state.newKeep.name"
                        >
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">Description</label>
                        <textarea required class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="state.newKeep.description"></textarea>
                      </div>
                      <div class="form-group">
                        <label for="name">Image</label>
                        <input required
                               type="text"
                               class="form-control"
                               id="name"
                               placeholder="Image Url..."
                               v-model="state.newKeep.img"
                        >
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                          Close
                        </button>
                        <button type="submit" class="btn btn-primary">
                          Create
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
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
import { keepsService } from '../services/KeepsService'
import { vaultsService } from '../services/VaultsService'

export default {
  setup() {
    const state = reactive({
      profile: computed(() => AppState.activeProfile),
      account: computed(() => AppState.account),
      keeps: computed(() => AppState.keeps),
      vaults: computed(() => AppState.vaults),
      newKeep: {},
      newVault: {}
    })
    const route = useRoute()
    onMounted(async() => {
      profilesService.getProfile(route.params.id)
      logger.log(state.vaults)
      profilesService.getKeepsByProfile(route.params.id)
      profilesService.getVaultsByProfile(route.params.id)
    })
    return {
      state,
      async createKeep() {
        try {
          await keepsService.create(state.newKeep)
        } catch (error) {
          logger.log(error)
        }
      },
      async createVault() {
        try {
          if (state.newVault.isPrivate === 'Public') {
            state.newVault.isPrivate = false
          } else {
            state.newVault.isPrivate = true
          }
          await vaultsService.create(state.newVault)
        } catch (error) {
          logger.log(error)
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
