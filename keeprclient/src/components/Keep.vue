<template>
  <div class="col-5 col-md-2 mx-1 my-2 card rounded">
    <div class="">
      <button type="button" class="btn" data-toggle="modal" @click="details(keep.id, keep)">
        <img :src="keep.img" class="w-100" alt="">
        {{ keep.name }}
      </button>
      <router-link :to="{name: 'Profile', params: {id: keep.creatorId}}">
        <div class="text-center my-2">
          <img :src="keep.creator.picture" class="w-25" alt="">
          {{ keep.creator.name }}
        </div>
      </router-link>
    </div>
    <div class="modal" :id="'keep' + keep.id" tabindex="-1" aria-labelledby="keepModal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <button type="button" class="close mb-3" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <img :src="keep.img" class="w-100" alt="">
            <h3 id="keepModal" class="d-flex">
              {{ keep.name }}
            </h3>
            <p>Views: {{ keep.views }}</p>
            <p>Shares: {{ keep.shares }}</p>
            <p>Keeps: {{ keep.keeps }}</p>
            <p>
              {{ keep.description }}
            </p>
            <router-link :to="{name: 'Profile', params: {id: keep.creatorId}}">
              <div class="my-2">
                <img :src="keep.creator.picture" width="35" alt="">
                {{ keep.creator.name }}
              </div>
            </router-link>
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
import { reactive } from 'vue'
import $ from 'jquery'
import { keepsService } from '../services/KeepsService'

export default {
  props: {
    keep: {
      type: Object,
      required: true
    }
  },
  setup() {
    const state = reactive({
    })
    return {
      state,
      details(id, body) {
        body.views++
        keepsService.update(id, body)
        $(`#keep${id}`).modal('toggle')
      }
    }
    // onMounted(() => {})
  }
}
</script>

<style scoped>
</style>
