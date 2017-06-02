<template>
  <div id="app">
    <navbar></navbar>
    <call></call>
    <home></home>
    <footerbar></footerbar>
  </div>
</template>

<script>
import Home from '@/components/Home'
import Call from '@/components/Call'
import Navbar from '@/components/Navbar'
import Footerbar from '@/components/Footerbar'

export default {
  name: 'app',
  components: {
    Home,
    Call,
    Navbar,
    Footerbar
  }
}
</script>

<style lang="scss">
@import '~bulma';

$fa-font-path: '~font-awesome/fonts/';
@import '~font-awesome/scss/font-awesome';

body {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}
</style>
