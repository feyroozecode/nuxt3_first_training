import { NuxtPage, AppHeader, AppFooter } from './.nuxt/components';

<script>

</script>

<template>
  <div class="main">
  <NuxtLayout >
    <header>
      <ul class="row p-5">
        <AppHeader />
      </ul>
    </header>
    <main class="">
      <NuxtPage />
    </main>
   
    <footer>
      <AppFooter />
    </footer>

  </NuxtLayout>

  </div>
</template>

<style lang="css">
.main {
  margin: 15;
  padding: 10;
  box-sizing: border-box;
}
ul {
  list-style: none;
  display: flex;
  justify-content: space-arround;
}  
li {
  margin: 0 10px;
}

</style>