<template>
  
  <v-container fluid>
    <section>
    <!-- ----------menu Button---------- -->
    
    <!-- ---------------------------------------- -->
    <!-- ---------------------SideBar------------------- -->
    <nav>
      <v-navigation-drawer
        v-model="drawer"
        dark
        app
        class="nav-color"
        width="180px"
      >
        <div class="text-center mt-5">
          <v-btn fab color="white" x-large>
            <img width="75px" hight="75px" src="../assets/logo.png" alt="" />
          </v-btn>
        </div>
        <v-list flat class="mt-5">
          <v-list-item-group v-model="selectedItem" color="black">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              active-class="border"
              class="ml-2 my-3"
              :ripple="false"
            >
              <b></b>
              <b></b>
              <v-list-item-icon class="icon-m">
                <v-icon v-text="item.icon"></v-icon>
                <p>
                  <v-icon
                    class="text-caption mt-3 ms-2"
                    v-text="item.text"
                  ></v-icon>
                </p>
              </v-list-item-icon>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <div
          style="
            position: absolute;
            bottom: 20px;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            text-align: center;"
        >
        <v-btn text @click="logout()">
              <v-icon>mdi-logout</v-icon>
              <v-icon class="text-caption ms-2">Logout</v-icon>
            </v-btn>
        </div>
      </v-navigation-drawer>
    </nav>
    <!-- ---------------------------------------- -->
  </section>
    <v-row>
      <!-- <v-col class="col-2 hidden-md-and-down">
       
      </v-col> -->
      <v-col class="col-12">
       <v-row>
        <v-col class="col-12">
          <div class="d-flex align-center justify-space-between">
            <!-- <v-icon>mdi-menu</v-icon> -->
            <v-avatar  class="hidden-lg-and-up" @click.stop="drawer = !drawer" >
              <img
        src="../assets/logo.png"
        alt="logo"
        width="20px"
      >

            </v-avatar>
            <!-- <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
<h3 class="hidden-sm-and-down" >User Profile</h3>
<div class="hidden-md-and-down">
<div class="d-flex"><v-text-field
            label="Solo"
            single-line
            solo
            flat
            class="rounded-r-0"
            background-color="grey lighten-2"
            dense
            
          ></v-text-field><v-btn
              color="#9C27B0"
              dark
              elevation="0"
              height="38"
              class="rounded-l-0"
              >
              <v-icon>mdi-magnify</v-icon>
            </v-btn></div></div>
            <div class="d-flex align-center mb-3">
            <v-menu
        bottom
        min-width="200px"
        rounded
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            x-large
            v-on="on"
          >
            <v-avatar
              color="brown"
              size="48"
            >
              <!-- <span class="white--text text-h5">JD</span> -->
              <img
              :src="getuserData.image !=='' ? getuserData.image : `https://www.w3schools.com/howto/img_avatar.png`"
        alt="John"
      >
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar
                color="brown"
              >
              <img
              :src="getuserData.image !=='' ? getuserData.image : `https://www.w3schools.com/howto/img_avatar.png`"
        alt="John"
      >
              </v-avatar>
              <h3 class="mt-1 text-uppercase">{{ getuserData.userName }}</h3>
              <p class="text-caption text-lowercase mt-1">
                {{ getuserData.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
                @click="updateUser()"
              >
                Edit Details
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
                @click="logout()"
              >
                LogOut
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu> <div class="notificationIcons"><v-badge
        bordered
        color="error"
        content="2"
        overlap
        class="mx-2"
      >
        <v-icon
          
          color="secondary"
        >
          mdi-email
        </v-icon>
      </v-badge><v-badge
        bordered
        color="error"
        content="2"
        overlap
        class="mx-2"
      >
        <v-icon
        
          color="secondary"
        >
          mdi-bell
        </v-icon>
      </v-badge>
      <v-badge
        bordered
        color="error"
        overlap
        content="2"
        class="mx-2"
      >
    
      <v-icon
          
          color="secondary"
        >
          mdi-flag
        </v-icon>
        
      </v-badge>
</div></div>
            </div>
        </v-col>
       </v-row>
       <v-divider></v-divider>
       <router-view></router-view>
      </v-col>
     
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'DashBoard',
    methods:{
      logout() {
      localStorage.clear();
      this.$router.push("/");
    },
    updateUser() {
      this.$router.push("/home/update-user");
    },
    },

data: () => ({
    selectedItem: 0,
    drawer: null,
    progress:25,
    items: [
      { icon: "mdi-account-convert", text: "Post Job" },
      { icon: "mdi-air-horn", text: "My Progress" },
      { icon: "mdi-all-inclusive", text: "Match Analysis" },
      { icon: "mdi-alert-remove-outline", text: "Settings" },
      { icon: "mdi-apple", text: "Matchability" },
    ],
  }),
  computed:{
      getuserData(){
        return this.$store.state.userData
      }
    }
   
  }
</script>

<style>
.notificationIcons > .v-badge{
 cursor: pointer;
}

.nav-color {
  background-color: #48126a !important;
}

.border {
  background: #fff;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  text-decoration: none;
}
.border b:nth-child(1) {
  position: absolute;
  top: -20px;
  height: 20px;
  width: 92%;
  background: #fff;

  display: none;
}
.border b:nth-child(1)::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-bottom-right-radius: 20px;
  background: #48126a;
}
.border b:nth-child(2) {
  position: absolute;
  bottom: -20px;
  height: 20px;
  width: 92%;
  background: #fff;
  display: none;
}
.border b:nth-child(2)::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-top-right-radius: 20px;
  background: #48126a;
}
.border b:nth-child(1),
.border b:nth-child(2) {
  display: block;
}
.icon-m {
  margin: 5px !important;
}
</style>
