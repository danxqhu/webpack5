<template>
  <h1 class="title">hello app</h1>
  <HomePage />
  <ul>
    <li>
      <router-link to="/home">Home</router-link>
    </li>
    <li>
      <router-link to="/about">About</router-link>
    </li>
  </ul>

  <RouterView />
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.title {
  color: pink;
}
</style>
