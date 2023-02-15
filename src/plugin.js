import { endent } from '@dword-design/functions'
import Component from 'vue-mermaid-string'

export default nuxtApp =>
  nuxtApp.vueApp.component('VueMermaidString', {
    components: {
      Component,
    },
    template: endent`
      <client-only>
        <component v-bind="$attrs" />
      </client-only>
    `,
  })
