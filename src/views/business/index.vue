<template>
  <div class="personnel-box">
    <transition name="page-toggle"
       mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>
