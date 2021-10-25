<template>
  <h2>App Nav</h2>
  <nav>
    <ul>
      <li>
        <router-link
            :to="{
              name: 'Login',
            }">Login</router-link>
      </li>
      <li>
        <router-link
            :to="{
              name: 'Settings',
            }">Settings</router-link>
      </li>
      <li>
        <router-link
            :to="{
              name: 'About',
            }">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppNav',
};
</script>
