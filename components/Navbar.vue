<script setup>
const menuitems = [
  // {
  //   title: "Sign up",
  //   url: "",
  // },
  // {
  //   title: "Log in",
  //   url: "",
  // },
];
</script>

<template>
  <Container>
    <header class="flex flex-row flex-wrap items-center justify-between my-4 gap-x-6 gap-y-4  bg-customLight ">
      <div class="flex items-center justify-between ">
        <a href="/" class="text-2xl"
          ><span class="font-bold text-cicle-800"> Joshua Head Business Vison</span>
        </a>
      </div>
      <nav class="flex w-auto">
        <ul class="flex flex-row gap-3 text-sm">
          <li v-for="item of menuitems">
            <a
              :href="item.url"
              class="flex px-3 py-2 text-gray-600 border rounded hover:text-gray-900"
            >
              {{ item.title }}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  </Container>
</template>
