<template>
  <!-- AddToAny BEGIN -->
  <div
    class="a2a_kit a2a_kit_size_32 a2a_default_style a2a_vertical_style add-to-any-widget"
  >
    <a class="a2a_button_facebook" v-if="options.includes('facebook')"></a>
    <a class="a2a_button_twitter" v-if="options.includes('twitter')"></a>
    <a class="a2a_button_linkedin" v-if="options.includes('linkedin')"></a>
    <a class="a2a_button_whatsapp" v-if="options.includes('whatsapp')"></a>
    <a class="a2a_button_email" v-if="options.includes('email')"></a>
  </div>
  <!-- AddToAny END -->
</template>

<script>
export default {
  name: 'WidgetAddToAny',
  props: {
    options: {
      type: Array,
      default: () => [
        'facebook',
        'twitter',
        'linkedin',
        'whatsapp',
        'email',
        'pocket',
      ],
    },
  },
  mounted() {
    if (process.browser) {
      const elm = document.querySelector('#addToAnyShare')
      if (!elm) {
        const el = document.createElement('script')
        el.setAttribute('id', 'addToAnyShare')
        el.setAttribute('src', `https://static.addtoany.com/menu/page.js`)
        document.body.appendChild(el)
      }
      if (window['a2a']) {
        window.a2a.init()
      }
    }
  },
}
</script>
<style lang="postcss" scoped>
.add-to-any-widget {
  @apply px-3;
  z-index: 20;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  background: #fff;
  width: 100%;
  padding-top: 4px;
  @screen md {
    @apply px-0;
    width: auto;
    top: 150px;
    bottom: auto;
  }
}
</style>