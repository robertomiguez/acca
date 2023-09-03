<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>

<style>
.card-main {
  max-width: 500px; /* Limiting the card's width for web */
  margin: 0 auto; /* Center the card horizontally */
}

.ion-card-regular {
  height: 295px;
  margin-left: -1px;
  margin-right: -1px;
}

.ion-card-medium {
  height: 160px;
  margin-left: -1px;
  margin-right: -1px;
  text-align: center;
}

.ion-card-small {
  height: 45px;
  margin-left: -1px;
  margin-right: -1px;
  text-align: center;
}

@media (max-width: 720px) {
  .ion-card-medium {
    height: 180px;
    text-align: left;
  }
  .ion-card-small {
    height: 100px;
    text-align: left;
  }
}

img {
  width: 60%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
