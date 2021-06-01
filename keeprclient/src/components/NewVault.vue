<template>
  <div>
    <form>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Example select</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
        </select>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup() {
    const state = reactive({
    })
    return { state }
    // onMounted(() => {})
  }
}
</script>

<style scoped>

</style>
