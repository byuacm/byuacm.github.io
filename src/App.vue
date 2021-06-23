<template>
  <div id="material-kit">
    <div :class="{ 'nav-open': NavbarStore.showNavbar }">
      <HomeNavBar :colorOnScroll=400 />
      <div>
        <HomePage />
      </div>
      <HomeFooter />
    </div>
  </div>
</template>
