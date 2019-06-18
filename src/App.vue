<template>
  <div id="app">
    <sui-menu inverted>
      <sui-menu-item header><img src="./assets/logo.png"></sui-menu-item>
      <a is="sui-menu-item" style="font-size:18px;">Contacts</a>
      <sui-menu-menu is="sui-menu-menu" position="right">
        <div is="sui-menu-item"> <sui-icon name="user"/></div>
      </sui-menu-menu>
    </sui-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
