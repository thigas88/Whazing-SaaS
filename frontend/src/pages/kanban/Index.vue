<template>
  <!-- <q-page class="q-py-xs q-px-md"> -->
  <div class="q-py-xs q-px-sm">
    <board />
  </div>
  <!-- </q-page> -->
</template>

<style></style>

<script>
import board from './Board'
export default {
  name: 'Kanban',
  components: {
    board
  }
}
</script>
