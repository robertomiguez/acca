<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Dashboard</ion-title>
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
            <ion-card>
              <h1 green>18</h1>
              <p>Homologadas</p>
            </ion-card>
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
  IonCard,
} from '@ionic/vue';
import FormDashboard from '@/components/FormDashboard.vue';
import ResultDashboard from '@/components/ResultDashboard.vue';
</script>

<style scoped></style>
