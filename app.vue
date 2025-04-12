<script lang="ts" setup>
const log = () => {
  alert('Hello');
};
</script>

<template>
  <div
    class="flex justify-center items-center flex-col h-screen gap-2 bg-gray-950 text-gray-50"
  >
    <h1 class="text-5xl">{{ $t('boilerplate.title') }}</h1>
    <p>{{ $t('boilerplate.description') }}</p>
    <ShadcnButton @click="log">Click me</ShadcnButton>
  </div>
</template>
