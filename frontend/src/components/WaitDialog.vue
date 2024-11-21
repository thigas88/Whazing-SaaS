<template>
  <q-dialog :value="dWait" persistent>
    <q-card
      style="width: 300px"
      :class="`q-pa-xs ${tDark ? 'bg-grey-8' : 'bg-grey-4'}`"
    >
      <q-card-section class="q-pt-none q-px-none">
        <div class="text-bold text-center">Aguarde por favor....</div>
        <div class="q-mb-md text-caption text-center">
          Isso pode demorar um pouco.
        </div>
        <div class="q-pa-xs">
          <q-linear-progress indeterminate />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { Dark } from 'quasar'

export default {
  name: 'WaitDialog',
  props: {
    dWait: { type: Boolean }
  },
  computed: {
    tDark() {
      return Dark.isActive
    }
  }
}
</script>
