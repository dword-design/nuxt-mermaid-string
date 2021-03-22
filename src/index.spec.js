import { endent } from '@dword-design/functions'
import tester from '@dword-design/tester'
import testerPluginPuppeteer from '@dword-design/tester-plugin-puppeteer'
import { outputFile } from 'fs-extra'
import { Builder, Nuxt } from 'nuxt'

export default tester(
  {
    async works() {
      await outputFile(
        'pages/index.vue',
        endent`
        <template>
          <client-only>
            <vue-mermaid-string class="foo" :value="diagram" />
          </client-only>
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

      `
      )
      const nuxt = new Nuxt({
        createRequire: 'native',
        dev: false,
        modules: [require.resolve('.')],
      })
      await new Builder(nuxt).build()
      try {
        await nuxt.listen()
        await this.page.goto('http://localhost:3000')
        await this.page.waitForSelector('.foo')
        expect(
          await this.page.screenshot({ fullPage: true })
        ).toMatchImageSnapshot(this)
      } finally {
        nuxt.close()
      }
    },
  },
  [testerPluginPuppeteer()]
)
