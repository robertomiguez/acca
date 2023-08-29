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
  @media (max-width: 720px) {
    height: 210px;
    text-align: left;
  }
}

.ion-card-small {
  height: 45px;
  margin-left: -1px;
  margin-right: -1px;
  text-align: center;
  @media (max-width: 720px) {
    height: 90px;
    text-align: left;
  }
}

img {
  width: 75%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
