<template>
  <h3>Settings Nav</h3>
  <nav>
    <ul>
      <li>
        <router-link
            :to="{
              name: 'Profile',
            }">Profile</router-link>
      </li>
      <li>
        <router-link
            :to="{
              name: 'Notification',
            }">Notification</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'SettingNav',
};
</script>
