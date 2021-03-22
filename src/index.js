import nuxtPushPlugins from '@dword-design/nuxt-push-plugins'

export default function () {
  nuxtPushPlugins(this, {
    mode: 'client',
    src: require.resolve('./plugin'),
  })
}
