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
            :icon="homeOutline"
          />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="dashboard"
          href="/tabs/dashboard"
        >
          <ion-icon
            aria-hidden="true"
            :icon="barChartOutline"
          />
          <ion-label>Dashboard</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="reportcrypto"
          href="/tabs/reportcrypto"
        >
          <ion-icon
            aria-hidden="true"
            :icon="readerOutline"
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
import { homeOutline, barChartOutline, readerOutline } from 'ionicons/icons';
</script>
