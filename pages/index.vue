<template>
  <client-only>
    <vue-mermaid-string class="foo" :value="diagram" />
  </client-only>
</template>

<script>
import { endent } from '@dword-design/functions'

export default {
  computed: {
    diagram: () => endent`
      graph TD
        A --> B
    `,
  },
}
</script>
