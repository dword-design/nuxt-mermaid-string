import { endent } from '@dword-design/functions'
import tester from '@dword-design/tester'
import testerPluginNuxtConfig from '@dword-design/tester-plugin-nuxt-config'
import testerPluginPuppeteer from '@dword-design/tester-plugin-puppeteer'

import self from './index.js'

export default tester(
  {
    works: {
      config: {
        modules: [self],
      },
      files: {
        'pages/index.vue': endent`
          <template>
            <vue-mermaid-string class="foo" :value="diagram" />
          </template>

          <script>
          import { endent } from '@dword-design/functions'

          export default {
            computed: {
              diagram: () => endent\`
                graph TD
                  A --> B
              \`,
            },
          }
          </script>
        `,
      },
      nuxtVersion: 3,
      async test() {
        await this.page.goto('http://localhost:3000')
        await this.page.waitForSelector('.foo')
        expect(
          await this.page.screenshot({ fullPage: true })
        ).toMatchImageSnapshot(this)
      },
    },
  },
  [testerPluginPuppeteer(), testerPluginNuxtConfig()]
)
