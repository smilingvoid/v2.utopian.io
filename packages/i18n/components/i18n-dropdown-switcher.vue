<script>
import * as locales from 'src/i18n/localesObj.json'

export default {
  name: 'i18n-dropdown-switcher',
  data () {
    return {
      locales: locales.default,
      locale: this.$q.cookies.get('locale')
    }
  },
  methods: {
    changeLang (val) {
      let route = this.$route.path.split('/')
      route[1] = val
      route = route.join('/')
      this.$q.cookies.set('locale', val, { path: '/' })
      this.userSelectedLocale = true
      this.$router.push(route)
      this.locale = val
    }
  }
}
</script>
<template lang="pug">
  q-btn-dropdown(
  ref="selectLanguages"
  icon="language"
  :label="$t('langLabel')"
  flat
  dense
  )
    q-list
      q-list-header(inset) {{ $t('languages')  }}
      q-item(
      link
      v-close-overlay
      v-for="(language, index) in locales", :key="index"
      @click.native="changeLang(language.lang)"
      )
        q-item-main
          q-item-tile(label) {{ language.langNative }}
        q-item-side(v-if="language.lang === locale", right, icon="done", color="primary")
</template>
