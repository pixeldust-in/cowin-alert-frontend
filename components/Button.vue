<template>
  <button
    class="w-full px-6 py-3 text-white font-medium flex justify-center outline-none items-center bg-purple rounded-full"
    placeholder="Name"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
