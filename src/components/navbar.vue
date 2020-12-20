<template>
  <div class="navbar">
    <div class="wrapper" v-on:click="inactive">
    <div class="sidebar" v-on:click="inactive">
      <div class="bg_shadow"></div>
        <div class="sidebar__inner">
           <div class="close" v-on:click="inactive">
          <ion-icon name="close-outline" class="fas fa-times" v-on:click="active"></ion-icon>
        </div>
        <div class="profile_info">
            <div class="profile_img">
              <img id="logo" src="../assets/img/logo-neiiko.jpg" alt="profile_img">
            </div>
            <div class="profile_data">
                <p class="name">Neiiko Brand</p>  
                <div class="btn profile-btn title">Actualizar perfil</div>
            </div>
        </div>
        <ul class="siderbar_menu">
            <li>
              <a href="#" class="active">
                <div class="container">
                  <div class="row">
                    <div class="icon"><ion-icon name="apps-outline" v-on:click="inactive"></ion-icon></div>
                    <div class="title">Dashboard</div>
                  </div>
                </div>                  
              </a>
            </li>
              <li>
                <a href="#">
                  <div class="container">
                    <div class="row">
                      <div class="icon"><ion-icon name="shirt-outline"></ion-icon></div>
                      <div class="title">Productos</div>
                    </div>
                  </div>                    
                </a>
              </li>  
          <li>
            <a href="#">
              <div class="container">
                <div class="row">
                  <div class="icon"><ion-icon name="funnel-outline"></ion-icon></div>
                  <div class="title">Conversión</div>
                </div>
              </div>              
            </a>
          </li>  
          <li>
            <a href="#">
              <div class="container">
                <div class="row">
                  <div class="icon"><ion-icon name="desktop-outline"></ion-icon></div>
                  <div class="title">Ads</div>
                </div>
              </div>              
            </a>
          </li>  
          <li>
            <a href="#">
              <div class="container">
                <div class="row">
                  <div class="icon"><ion-icon name="mail-outline"></ion-icon></div>
                  <div class="title">Mailing</div>
                </div>
              </div>              
            </a>
          </li>
              <li>
                <a href="#">
                  <div class="container">
                    <div class="row">
                      <div class="icon"><ion-icon name="globe-outline"></ion-icon></div>
                      <div class="title">Integraciones</div>
                    </div>
                  </div>                  
                </a>
          </li>   
          <li>
            <a href="#">
              <div class="container">
                <div class="row">
                  <div class="icon"><ion-icon name="help-outline"></ion-icon></div>
                  <div class="title">Help</div>
                </div>
              </div>              
            </a>
          </li>  
        </ul>
      </div>
    </div>
    <div class="main_container">
      <div class="top_navbar">
          <div class="hamburger" v-on:click="active">
              <div class="hamburger__inner">
                  <ion-icon name="menu-outline"></ion-icon>
  
              </div>  
          </div>
         <ul class="menu">
            
         </ul>
         <ul class="right_bar">
            <li><ion-icon name="search-outline"></ion-icon></li>
            <li><ion-icon name="log-out-outline"></ion-icon>
</li> 
         </ul>
      </div>
      
      
      
    </div>
</div>
    
  </div>
</template>

<script>

import $ from 'jquery'


export default {
  name: 'navbar',
  methods:{
    active(){
     
      console.log("Hola Mundo")

    },
    inactive(){
      
      console.log("Hola Mundo")


    }
  }
  
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  font-family: "Montserrat", sans-serif;
}

body {
  background: #bbc7df;
}

#logo{
  border-radius: 200px;
}

.wrapper {
  display: flex;
  width: 100%;
}

.wrapper .sidebar{
  position: relative;
}

.wrapper .sidebar .bg_shadow{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  z-index: 998;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.wrapper .sidebar__inner {
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background: rgb(41,63,93);
background: linear-gradient(180deg, rgba(41,63,93,1) 0%, rgba(39,103,110,1) 100%);
  z-index: 999;
  transition: all 0.3s ease;
}

.wrapper .main_container {
  margin-left: 250px;
  width: calc(100% - 250px);
   transition: all 0.3s ease;
}

.wrapper .sidebar__inner .profile_info {
  padding: 30px 50px;
  text-align: center;
}

.wrapper .sidebar__inner .profile_info .profile_img {
  width: 125px;
  margin: 0 auto 15px;
}

.wrapper .sidebar__inner .profile_info .profile_img img {
  width: 100%;
  display: block;
}

.wrapper .sidebar__inner .profile_info .profile_data .name {
  font-size: 22px;
  font-weight: 700;
  color: #fff;
}

.name{
  margin-bottom: 25px;
}

.title{
  font-size: 12px;
}

.profile-btn{
  
  color:white !important;
}

.wrapper .sidebar__inner .profile_info .profile_data .role {
  font-weight: 300;
  color: #88a3d0;
  margin-bottom: 15px;
}

.wrapper .sidebar__inner .profile_info .profile_data .btn {
  padding: 10px;
  border: 1px solid #1fafec;
  border-radius: 25px;
  color: #1fafec;
  cursor: pointer;
}

.wrapper .sidebar__inner .profile_info .profile_data .btn:hover {
  background: #1fafec;
  color: #fff;
}

.wrapper .sidebar__inner .siderbar_menu li a {
  padding: 10px 50px;
  display: block;
  height: 60px;
  position: relative;
  margin-bottom: 1px;
  color: #88a3d0;
  text-align: center;
  text-transform: uppercase;
}

.wrapper .sidebar__inner .siderbar_menu li a .icon {
  font-size: 20px;
  margin-bottom: 5px;
  margin-right: 20px;
}

.wrapper .sidebar__inner .siderbar_menu li a:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: #1fafec;
  display: none;
}

.wrapper .sidebar__inner .siderbar_menu li a:hover,
.wrapper .sidebar__inner .siderbar_menu li a.active {
  background: #1d4c9e;
  color: #fff;
}

.wrapper .sidebar__inner .siderbar_menu li a:hover:before,
.wrapper .sidebar__inner .siderbar_menu li a.active:before {
  display: block;
}

.wrapper .main_container .top_navbar {
  width: calc(100% - 250px);
  height: 60px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
  position: fixed;
  top: 0;
  left: 250px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.125);
   transition: all 0.3s ease;
}

.wrapper .main_container .top_navbar .hamburger {
  width: 30px;
  height: 30px;
  position: relative;
  display: none;
}

.wrapper .main_container .top_navbar .hamburger .fas {
  color: #88a3d0;
  font-size: 25px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.wrapper .main_container .top_navbar .menu {
  display: flex;
  align-items: center;
}

.wrapper .main_container .top_navbar .menu li a {
  margin: 0 15px;
  padding: 0 15px;
  position: relative;
  color: #1d4c9e;
  font-weight: 400;
  text-align: center;
}

.wrapper .main_container .top_navbar .menu li a:before {
  content: "";
  position: absolute;
  bottom: -20px;
  left: 0;
  width: 100%;
  height: 3px;
  background: #1fafec;
  display: none;
}

.wrapper .main_container .top_navbar .menu li a.active,
.wrapper .main_container .top_navbar .menu li a:hover {
  color: #1fafec;
}

.wrapper .main_container .top_navbar .menu li a:hover:before,
.wrapper .main_container .top_navbar .menu li a.active:before {
  display: block;
}

.wrapper .main_container .top_navbar .right_bar {
  display: flex;
  align-item: center;
}

.wrapper .main_container .top_navbar .right_bar li {
  margin: 0 10px;
}

.wrapper .main_container .top_navbar .right_bar .fas {
  font-size: 25px;
  cursor: pointer;
  color: #88a3d0;
}

.wrapper .main_container .top_navbar .right_bar li:hover,
.wrapper .main_container .top_navbar .hamburger .fas:hover {
  opacity: 0.5;
}

.wrapper .main_container .container {
  padding: 30px;
  margin-top: 60px;
}

.wrapper .main_container .container .item {
  background: #fff;
  padding: 20px;
  border-bottom: 1px solid #d9e2e7;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 15px;
}

.wrapper .sidebar__inner .close{
    position: absolute;
    top: 5px;
    right: 15px;
    font-size: 25px;
    color: #fff;
  display: none;
  cursor: pointer;
}

.wrapper .sidebar__inner .close:hover{
  opacity: 0.5;
}


@media screen and (max-width: 800px){
  .wrapper .sidebar__inner{
    left: -100%;
  }
  .wrapper .main_container,
  .wrapper .main_container .top_navbar{
    margin-left: 0;
    width: 100%;
  }
  .wrapper .main_container .top_navbar{
    left: 0;
  }
  .wrapper.active .sidebar__inner{
    left: 0;
  }
  .wrapper .sidebar__inner .close,
  .wrapper .main_container .top_navbar .hamburger{
    display: block;
  }
  .wrapper.active .sidebar .bg_shadow{
    visibility: visible;
    opacity: 0.7;
  }
}

@media screen and (max-width: 530px){
  .wrapper .main_container .top_navbar .menu{
    display: none;
  }
}

</style>
