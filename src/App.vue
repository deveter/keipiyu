<template>
  <div id="app">
    <div class="l-navbar show" id="navbar">
        <nav class="nav">
            <div class="pt-4">
                <a href="#" class="nav__logo">
                    <img src="https://www.adminmart.com/src/assets/images/logo-icon.png" alt="" class="nav__logo-icon">
                    <span class="nav__logo-text">Keipiyu</span>
                </a>

                <div class="nav__toggle" id="nav-toggle">
                    <ion-icon class='bx bx-chevron-right nav__icon' name="arrow-dropleft"></ion-icon>
                </div>

                <ul class="nav__list">
                  <router-link to="/" class="nav__link active">
                  <ion-icon class='bx bx-user nav__icon' name="apps-outline"></ion-icon>
                        <span class="nav__text">Resumen</span>

                  </router-link>
                  <router-link to="/products" class="nav__link">
                        <ion-icon name="shirt" class='bx bx-user nav__icon'></ion-icon>
                        <span class="nav__text">Productos</span>                    
                  </router-link>

                  <router-link to="/analytics" class="nav__link">
                    <ion-icon name="filter-outline" class='bx bx-bell nav__icon'></ion-icon>
                        <span class="nav__text">Conversión</span>
                  </router-link>

                  <router-link to="/google-ads" class="nav__link">
                    <ion-icon name="logo-google" class='bx bx-heart nav__icon'></ion-icon>
                    <span class="nav__text">Google Ads</span>
                  </router-link>                 
                                                                
                    <router-link to="/facebook-ads" class="nav__link">
                      <ion-icon name="logo-facebook" class='bx bx-bookmark nav__icon'></ion-icon>
                      <span class="nav__text">Facebook Ads</span>
                    </router-link>
                                          
                    <router-link to="/instagram" class="nav__link">
                        <ion-icon name="logo-instagram" class='bx bx-message-rounded nav__icon'></ion-icon>
                        <span class="nav__text">Instagram</span>
                    </router-link>                    
                                          
                    <router-link to="/integrations" class="nav__link">
                      <ion-icon class="bx bx-message-rounded nav__icon" name="globe-outline"></ion-icon>
                      <span class="nav__text">Integraciones</span>
                    </router-link>                 
                </ul>
            </div>
                   <router-link to="/" class="nav__link">
                      <ion-icon name="log-out-outline" class='bx bx-log-out-circle nav__icon'></ion-icon>
                      <span class="nav__text">Salir</span>
                   </router-link>   
                
            
        </nav>
    </div>
        
        
    <router-view></router-view>    
 
  </div>
</template>

<script>
import $ from 'jquery'



export default {
  name: 'App',
    
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap");
/*===== VARIABLES CSS Y SASS =====*/
/*Varibles sass*/
/*Variables css*/
/*===== Colores =====*/
:root {
  --first-color: #12192C;
  --second-color: #F5A623;
  --white-color: #EDEDED;
  --grey: #818181
}

/*===== Fuente y tipografia =====*/
:root {
  --body-font: 'Quicksand', sans-serif;
  --small-font-size: 0.875rem;
}

@media screen and (min-width: 768px) {
  :root {
    --small-font-size: 0.938rem;
  }
}

/*===== z index =====*/
:root {
  --z-back: -10;
  --z-normal: 1;
  --z-tooltip: 10;
  --z-fixed: 100;
  --z-modal: 1000;
}

/*===== BASE =====*/
*, ::before, ::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

body {
  position: relative;
  margin: 0;
  padding: 1rem 0 0 5rem;
  font-family: var(--body-font);
  background-color: var(--white-color);
  -webkit-transition: .5s;
  transition: .5s;
}

h1 {
  margin: 0;
}

ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

/*=====  NAV =====*/
.l-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 56px;
  height: 100vh;
  background-color: white;    
  -webkit-transition: .5s;
  transition: .5s;
  z-index: var(--z-fixed);
}

.nav {
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  overflow: hidden;
}

.nav__logo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin-bottom: 2rem;
  padding: 0 .5rem;
}

.nav__logo-icon {
  margin-right: 1.2rem;
}

.nav__logo-text {
  color: #818181;
  font-weight: 700;
}

.nav__toggle {
  position: absolute;
  top: 1.10rem;
  right: -.6rem;
  width: 18px;
  height: 18px;
  background: linear-gradient(to right, rgb(137, 113, 234), rgb(127, 114, 234), rgb(117, 116, 234), rgb(106, 117, 233), rgb(95, 118, 232));
  border-radius: 50%;
  font-size: 1.25rem;
  color: var(--first-color);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  cursor: pointer;
  -webkit-transition: .5s;
  transition: .5s;
}

.nav__link {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: .5rem;
  padding-left: 20px !important;
  margin-bottom: 1rem;
  margin-left:0 !important;
  border-radius: 0 60px 60px 0;
  color: #818181 !important;
  -webkit-transition: .3s;
  transition: .3s;
}

.nav__link:hover {
  background: linear-gradient(to right, rgb(137, 113, 234), rgb(127, 114, 234), rgb(117, 116, 234), rgb(106, 117, 233), rgb(95, 118, 232));
  color: white !important;
  transition: 0.5s;
  text-decoration: none;
}

.nav__icon {
  font-size: 1.5rem;
  margin-right: 1rem;
}

.nav__text {
  font-weight: 700;
}

/*Show menu*/
.show {
  width: 168px;
}

@media screen and (max-width: 768px){
  .show{
    display: none;
  }
}

/*Rotate toggle*/
.rotate {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
  -webkit-transition: .5s;
  transition: .5s;
}

/*Active links menu*/
.active {
  background: linear-gradient(to right, rgb(137, 113, 234), rgb(127, 114, 234), rgb(117, 116, 234), rgb(106, 117, 233), rgb(95, 118, 232));
  color: white !important;
}

/*Add padding body*/
.expander {
  padding: 1rem 0 0 12rem;
  -webkit-transition: .5s;
  transition: .5s;
}
</style>
