<template>
  <div class="column mx-1 my-2 card rounded">
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
                  <div class="d-flex">
                    <button type="button-sm" class="btn btn-primary" @click="addToVault(keep.id, keep)">
                      Add to vault
                    </button>
                    <button type="button-sm" class="btn btn-danger" v-if="state.account && state.account.id == keep.creatorId" @click="deleteKeep(keep.id)">
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
import swal from 'sweetalert'

export default {
  props: {
    keep: {
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
      details(id, body) {
        body.views++
        keepsService.update(id, body)
        $(`#keep${id}`).modal('toggle')
      },
      async addToVault(id, body) {

      },
      async deleteKeep(id) {
        try {
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
          await keepsService.delete(id)
        } catch (error) {

        }
      }
    }
    // onMounted(() => {})
  }
}
</script>

<style scoped>
</style>
