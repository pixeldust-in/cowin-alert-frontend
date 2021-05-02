<template>
  <div class="mobile-view">
    <Header />
    <LandingMobile v-if="stage === 0" @next="stage = 1" />
    <FormMobile v-if="stage === 1" @next="stage = 2"  />
    <SuccessMobile v-if="stage === 2"/>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MobileView',
  props: {},

  data: () => ({
    stage: 0,
  }),

  methods: {},
}
</script>
<style lang="postcss" scoped>
.mobile-view {
  max-width: 100%;
  width: 499px;
  margin-left: auto;
  margin-right: auto;
}
</style>
