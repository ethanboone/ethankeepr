<template>
  <div class="container-fluid">
    <div class="row my-3">
      <div class="d-flex col-3">
        <h2>
          New Keep
          <button class="btn btn-success" data-toggle="modal" data-target="#newKeep">
            +
          </button>
        </h2>
      </div>
    </div>
    <div class="d-flex row my-5 justify-content-center" v-if="state.keeps">
      <div class="col-12">
        <div class="card-columns">
          <Keep v-for="keep in state.keeps" :key="keep.id" :keep="keep" />
        </div>
      </div>
    </div>
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
</template>

<script>
import { reactive, onMounted, computed } from 'vue'
import { keepsService } from '../services/KeepsService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      keeps: computed(() => AppState.keeps),
      newKeep: {}
    })
    onMounted(async() => {
      await keepsService.getAll()
      logger.log(state.keeps)
    })
    return {
      state,
      async createKeep() {
        try {
          await keepsService.create(state.newKeep)
        } catch (error) {
          logger.log(error)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
