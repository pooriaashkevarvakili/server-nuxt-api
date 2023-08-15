<template>
  <div>
    pooria
    <!-- <div v-for="item in products?.data" :key="item.id">
      {{ item.title }}
    </div> -->
    <div v-for="item in products" :key="item.id">
      {{ item.title }}
    </div>
  </div>
</template>

<script setup>
const runTimeConfig = useRuntimeConfig();
const page = ref(1);

const {
  data: products,
  error,
  refresh,
  pending,
} = await useAsyncData("products", () => {
  return $fetch(`${runTimeConfig.baseUrl}`);
  //   return $fetch("/api/products", {});
});
console.log(error.value);
console.log(products.value);
</script>

<style></style>
