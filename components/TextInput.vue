<template>
  <div class="w-full mb-4">
    <input
      :type="required"
      :placeholder="placeholder"
      class="w-full rounded-lg px-4 border border-gray py-3 outline-none focus:border-purple transition duration-500 ease-in-out text-sm font-medium bg-white"
    />
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    placeholder: String,
    type: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
