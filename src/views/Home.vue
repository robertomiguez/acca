<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid class="ion-padding">
        <ion-row>
          <ion-col size="12">
            <ion-card class="card-main">
              <ion-card-content>
                Dollar cost averaging (DCA) is the practice of investing a fixed
                amount on a regular basis, regardless of the price.
              </ion-card-content>
              <img
                src="@/assets/dollar-btc.png"
                alt=""
                class="img"
              />
              <ion-card-header>
                <ion-card-title class="ion-text-center"
                  ><ion-button
                    size="small"
                    @click="() => router.push('/tabs/dashboard')"
                    >Start</ion-button
                  ></ion-card-title
                >
                <ion-card-subtitle> </ion-card-subtitle>
              </ion-card-header>
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
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonGrid,
  IonCol,
  IonRow,
  IonButton,
} from '@ionic/vue';
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<style></style>
