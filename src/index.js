import { addPlugin, createResolver } from '@nuxt/kit'

const resolver = createResolver(import.meta.url)

export default () => addPlugin(resolver.resolve('./plugin'), { append: true })
