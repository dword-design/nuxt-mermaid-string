import { createRequire } from 'module'
import nuxtPushPlugins from 'nuxt-push-plugins'

const _require = createRequire(import.meta.url)

export default function () {
  nuxtPushPlugins(this, _require.resolve('./plugin'))
}
