import nuxtPushPlugins from 'nuxt-push-plugins'

export default function () {
  nuxtPushPlugins(this, require.resolve('./plugin'))
}
