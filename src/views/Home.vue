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
            <ion-card class="responsive-card">
              <ion-card-content>
                Any Coin cost averaging is the practice of investing any coin
                amount on a regular basis, regardless of the price
              </ion-card-content>
              <img
                src="@/assets/dollar-btc.png"
                alt=""
                class="img"
              />
              <ion-card-content>
                If I had started buying $10 of Bitcoin weeklysix months ago, I
                would have turned $260 into $326.08* ($66.08* in profit), equals
                0.01053120 BTC.
              </ion-card-content>
              <ion-card-header>
                <ion-card-title></ion-card-title>
                <ion-card-subtitle>
                  *** IMPORTANT DISCLAIMER ***We make no warranties of any kind
                  in relation to our content. Any use or reliance on our content
                  is solely at your own risk and discretion. You need to do your
                  own research and make your own decisions, this is just
                  education & entertainment. Not financial advice! Past
                  performance does not guarantee future results.
                </ion-card-subtitle>
                <ion-card-subtitle>
                  * Exchanges fees and taxes are not included in the results.
                </ion-card-subtitle>
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
} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>

<style>
.responsive-card {
  max-width: 500px; /* Limiting the card's width for web */
  margin: 0 auto; /* Center the card horizontally */
}
img {
  width: 75%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
