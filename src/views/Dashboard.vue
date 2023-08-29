<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Dashboard</ion-title>
        <ion-progress-bar
          type="indeterminate"
          v-show="loading"
        ></ion-progress-bar>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col
            sizeLg="4"
            sizeMd="6"
            sizeXs="12"
          >
            <FormDashboard />
          </ion-col>
          <ion-col
            sizeLg="4"
            sizeMd="6"
            sizeXs="12"
          >
            <ResultDashboard />
          </ion-col>
          <ion-col
            sizeLg="4"
            sizeMd="6"
            sizeXs="12"
          >
            <ChartDashboard />
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="12">
            <ResumeDashboard />
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="12">
            <DisclaimerDashboard />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonCol,
  IonRow,
  IonProgressBar,
} from '@ionic/vue';
import FormDashboard from '@/components/FormDashboard.vue';
import ResultDashboard from '@/components/ResultDashboard.vue';
import ChartDashboard from '@/components/ChartDashboard.vue';
import ResumeDashboard from '@/components/ResumeDashboard.vue';
import DisclaimerDashboard from '@/components/DisclaimerDashboard.vue';

import { useSettingsStore } from '@/stores/settingsStore';
import { storeToRefs } from 'pinia';

const settingsStore = useSettingsStore();
const { loading } = storeToRefs(settingsStore);
</script>

<style scoped></style>
