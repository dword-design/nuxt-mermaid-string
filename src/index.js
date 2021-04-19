import nuxtPushPlugins from 'nuxt-push-plugins'

export default function () {
  nuxtPushPlugins(this, {
    mode: 'client',
    src: require.resolve('./plugin'),
  })
}
