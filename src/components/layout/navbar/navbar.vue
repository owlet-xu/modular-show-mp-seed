<template>
  <mt-header class="navbar" title="multiple button">
    <router-link to="/" slot="left">
      <mt-button icon="back">back</mt-button>
      <mt-button @click="handleClose">close</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
</template>

<script lang="ts" src="./navbar.ts"></script>
<style lang="scss" scoped src="./navbar.scss"></style>