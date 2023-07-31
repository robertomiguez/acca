<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button
          tab="home"
          href="/tabs/home"
        >
          <ion-icon
            aria-hidden="true"
            :icon="triangle"
          />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="dashboard"
          href="/tabs/dashboard"
        >
          <ion-icon
            aria-hidden="true"
            :icon="ellipse"
          />
          <ion-label>Dashboard</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="reportcrypto"
          href="/tabs/reportcrypto"
        >
          <ion-icon
            aria-hidden="true"
            :icon="square"
          />
          <ion-label>Report</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
</script>
