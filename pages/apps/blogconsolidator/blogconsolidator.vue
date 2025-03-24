<script setup>
import { ref } from 'vue';
import { useAsyncData } from 'nuxt3';
import { posts } from '@wix/blog';


async function getTotalPosts(options) {
  const response = await posts.getTotalPosts(options);
}



const { data: posts, error: postsError } = await useAsyncData('posts', () => $fetch('/api/posts'));
const { data: webhookData, error: webhookError } = await useAsyncData('webhookData', () => $fetch('https://your-webhook-endpoint.com/data'));

if (postsError.value) {
  console.error('Error fetching posts:', postsError.value);
}

if (webhookError.value) {
  console.error('Error fetching data from webhook:', webhookError.value);
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Blog Consolidator Poster</h1>
    <div v-if="posts && posts.length">
      <div v-for="post in posts" :key="post.id" class="mb-4">
        <h2 class="text-2xl font-semibold">{{ post.title }}</h2>
        <p class="text-gray-700">{{ post.excerpt }}</p>
        <NuxtLink :to="`/blog/${post.slug}`" class="text-blue-500 hover:underline">Read more</NuxtLink>
      </div>
    </div>
    <div v-else>
      <p>No posts available.</p>
    </div>

    <h1 class="text-3xl font-bold mb-6">Webhook Data</h1>
    <div v-if="webhookData && webhookData.length">
      <div v-for="item in webhookData" :key="item.id" class="mb-4">
        <h2 class="text-2xl font-semibold">{{ item.title }}</h2>
        <p class="text-gray-700">{{ item.description }}</p>
        <!-- Add more fields as necessary -->
      </div>
    </div>
    <div v-else>
      <p>No data available.</p>
    </div>
  </div>
</template>