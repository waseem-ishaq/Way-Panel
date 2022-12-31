<template><div>
    <div class="hidden-lg-and-up mx-4 mt-2">
<div class="d-flex"><v-text-field
         label="Solo"
         single-line
         solo
         flat
         class="rounded-r-0"
         background-color="grey lighten-2"
         dense
         
       ></v-text-field><v-btn
           color="purple"
           dark
           elevation="0"
           height="38"
           class="rounded-l-0"
           >
           <v-icon>mdi-magnify</v-icon>
         </v-btn></div></div>
    <v-row>
     <v-col class="col-12">
       <v-card>
         <v-row>
           <v-col class="col-md-2"><v-img 
             
            :src="getuserData.image !=='' ? getuserData.image : `https://www.w3schools.com/howto/img_avatar.png`"
             alt=""
             max-width="200px"
             contain
             class="rounded mx-md-2 mx-4">
           </v-img>
         </v-col>
           <v-col class="col-10">
             
             <div class="d-flex flex-md-row flex-column ma-md-0 mx-2 justify-space-between">
             <div>
               <h1 class="purple--text text-uppercase" >{{ this.$store.state.userData.userName }}</h1>
               <p class="text-caption text-lowercase">{{this.$store.state.userData.email}}</p>
             </div>
             <div class="d-flex flex-row">
               <v-btn
               plain
               x-small
               class="mx-md-1 my-md-0 my-2 rounded"
               height="25"
               >in</v-btn>
               <v-btn
               plain
               x-small
               class="rounded mx-md-1 my-md-0 my-2"
               height="25"
               ><v-icon>mdi-github</v-icon></v-btn>
               <v-btn
               plain
               x-small
               class="rounded mx-md-1 my-md-0 my-2"
               height="25"
               ><v-icon>mdi-eye</v-icon> Resume</v-btn>
             </div>
           </div>
           <v-row class="d-flex flex-md-row flex-column ma-md-0 mt-2 ">
               <v-col class="col-lg-4 ma-md-0 mx-4">
                 <div class="d-flex flex-column">
              <p class="text-caption font-weight-bold grey--text">About</p>
              <p class="text-caption  text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repudiandae dolorem labore aperiam voluptatem officiis officia alias autem ullam, sint itaque fugiat nam cumque, nesciunt ea odit accusantium, inventore sapiente!</p>
         
             </div>
             <div class="d-flex flex-column ">
<p class="grey--text text-body-2 font-weight-bold">Candidate Short listed</p>
           
<v-progress-linear
   value="25"
   height="15"
   width="20"
   color="purple"
   rounded
 >
   <strong >20%</strong>
 </v-progress-linear>
           </div></v-col>
               <v-col class="col-lg-8 d-flex flex-column flex-sm-row justify-center align-center justify-sm-space-around">
                 <div class="d-flex justify-space-between flex-column">
               <p class="text-caption grey--text font-weight-bold">Highest Education</p>
              <p class="text-caption ">Master in Science</p>
              <p class="text-caption grey--text font-weight-bold">Salary Range</p>
              <p class="text-caption ">$12000.00-14000.00</p>
             </div>
           <!-- </v-col>
               <v-col class="col-lg-4 d-flex justify-center"> -->
                 <div class="d-flex justify-space-between flex-column">
               <p class="text-caption grey--text font-weight-bold">Highest Education</p>
              <p class="text-caption ">Master in Science</p>
              <p class="text-caption grey--text font-weight-bold">Salary Range</p>
              <p class="text-caption ">$12000.00-14000.00</p>
             </div></v-col>
             </v-row>
             
           
           </v-col>
         </v-row>
       </v-card>
     </v-col>
    </v-row>
    <v-row>
               <v-col class="col-12 d-flex flex-md-row flex-column justify-space-between">
                 <v-card class="mx-auto rounded-lg my-1" max-width="270" outlined>
       <v-list-item three-line>
         <v-list-item-content>
           <div class="grey--text mb-4">
             <v-icon color="purple"> mdi-school </v-icon> Job Details
           </div>
           <div>
             <v-icon x-small> mdi-circle </v-icon> Sr. Interior Designer
           </div>
           <v-list-item-subtitle class="pl-7">Magma Pvt. Ltd.</v-list-item-subtitle>
           <v-list-item-subtitle class="pl-7 pt-2">Jan 2020 - Mar 2013</v-list-item-subtitle>
           <v-list-item-subtitle class="pl-7">3 Years 3 Month</v-list-item-subtitle>
         </v-list-item-content>
       </v-list-item>
       <v-divider class="mx-3"></v-divider>

       <v-list-item three-line>
         <v-list-item-content>

           <div>
             <v-icon x-small> mdi-circle </v-icon> Sr. Interior Designer
           </div>
           <v-list-item-subtitle class="pl-7">Magma Pvt. Ltd.</v-list-item-subtitle>
           <v-list-item-subtitle class="pl-7 pt-2">Jan 2020 - Mar 2013</v-list-item-subtitle>
           <v-list-item-subtitle class="pl-7">3 Years 3 Month</v-list-item-subtitle>
         </v-list-item-content>
       </v-list-item>
       <v-divider class="mx-3"></v-divider>

       <v-list-item three-line>
         <v-list-item-content>

           <div>
             <v-icon x-small> mdi-circle </v-icon> Sr. Interior Designer
           </div>
           <v-list-item-subtitle class="pl-7">Magma Pvt. Ltd.</v-list-item-subtitle>
           <v-list-item-subtitle class="pl-7 pt-2">Jan 2020 - Mar 2013</v-list-item-subtitle>
           <v-list-item-subtitle class="pl-7">3 Years 3 Month</v-list-item-subtitle>
         </v-list-item-content>
       </v-list-item>
       <v-divider class="mx-3"></v-divider>
     </v-card>

     <v-card class="mx-auto rounded-lg my-1 " max-width="270" outlined>
       <v-list-item three-line>
         <v-list-item-content>
           <div class="grey--text mb-4">
             <v-icon color="purple"> mdi-school </v-icon> Job Details
           </div>
           <div class="py-1 pl-3">
             <v-list-item-subtitle class="pl-1 py-2"><span class="grey--text ">Employement Type:
               </span><b>Permanent</b></v-list-item-subtitle>
             <v-list-item-subtitle class="pl-1 py-2"><span class="grey--text ">Manager: </span><b>Azwar
                 Khan</b></v-list-item-subtitle>
             <v-list-item-subtitle class="pl-1 py-2"> <span class="grey--text ">Joining Date: </span><b>24th March
                 2022</b></v-list-item-subtitle>
             <v-list-item-subtitle class="pl-1 py-2"><span class="grey--text">Email:
               </span><b>gfesw@yahoo.com</b></v-list-item-subtitle>
           </div>
         </v-list-item-content>
       </v-list-item>
       <v-divider class="mx-3"></v-divider>

       <v-list-item three-line>
         <v-list-item-content>
           <div class="grey--text mb-4">
             <v-icon color="purple">mdi-account </v-icon> Personal Information
           </div>
           <div class="py-1 pl-3">
             <v-list-item-subtitle class="pl-1 py-2"><span class="grey--text ">Employement Type:
               </span><b>Permanent</b></v-list-item-subtitle>
             <v-list-item-subtitle class="pl-1 py-2"><span class="grey--text ">Manager: </span><b>Azwar
                 Khan</b></v-list-item-subtitle>
             <v-list-item-subtitle class="pl-1 py-2"> <span class="grey--text ">Joining Date: </span><b>24th March
                 2022</b></v-list-item-subtitle>
           </div>
         </v-list-item-content>
       </v-list-item>
       <v-divider class="mx-3"></v-divider>

     </v-card>

     <v-card class="mx-auto rounded-lg my-1 " max-width="270" outlined>
       <v-list-item three-line>
         <v-list-item-content>
           <div class="black--text mb-4">
             <b>Culture Fit</b>
           </div>
           <div class="text-center">
             <v-progress-circular :rotate="360" :size="100" :width="9" :value="65" color="purple">
               +65%
             </v-progress-circular>
           </div>
           <div class="d-flex flex-wrap mt-8">
             <v-btn depressed color="purple" class="ma-1 rounded-xl white--text">
               Primary
             </v-btn>
             <v-btn depressed color="purple lighten-5" class="ma-1  rounded-xl purple--text">
               Primary
             </v-btn>
             <v-btn depressed color="purple" class="ma-1 rounded-xl white--text">
               Primary
             </v-btn>
             <v-btn depressed color="purple lighten-5" class="ma-1  rounded-xl purple--text">
               Primary
             </v-btn>

             <v-btn depressed color="purple" class="ma-1 rounded-xl white--text">
               Primary
             </v-btn>
             <v-btn depressed color="purple lighten-5" class="ma-1  rounded-xl purple--text">
               Primary
             </v-btn>
             <v-btn depressed color="purple" class="ma-1 rounded-xl white--text">
               Primary
             </v-btn>
             <v-btn depressed color="purple lighten-5" class="ma-1  rounded-xl purple--text">
               Primary
             </v-btn>




           </div>

           

         </v-list-item-content>
       </v-list-item>
     </v-card>

     <v-card class="mx-auto rounded-lg my-1" max-width="270" outlined>
       <v-list-item three-line>
         <v-list-item-content>
           <div class="black--text mb-4">
             <b>Matchability</b>
           </div>
           <div class="text-center">
             <v-progress-circular :rotate="360" :size="100" :width="9" :value="74" color="purple">
               +74%
             </v-progress-circular>
           </div>
           <div>
             
             <v-list-item-subtitle class="pl-1 pt-4"> Years of Experience: <b>4</b></v-list-item-subtitle>
             <v-list-item-subtitle class="pl-1 pt-4"> Required Skills</v-list-item-subtitle>
            </div>
           <div class="d-flex flex-wrap mt-2">
             <v-btn depressed color="purple" class="ma-1 rounded-xl white--text">
               Primary
             </v-btn>
             <v-btn depressed color="purple lighten-5" class="ma-1  rounded-xl purple--text">
               Primary
             </v-btn>
             <v-btn depressed color="purple" class="ma-1 rounded-xl white--text">
               Primary
             </v-btn>
             <v-btn depressed color="purple lighten-5" class="ma-1  rounded-xl purple--text">
               Primary
             </v-btn>
             <v-btn depressed color="purple" class="ma-1 rounded-xl white--text">
               Primary
             </v-btn>
             <v-btn depressed color="purple lighten-5" class="ma-1  rounded-xl purple--text">
               Primary
             </v-btn>
            
           </div>
         </v-list-item-content>
       </v-list-item>
       
     </v-card>
               </v-col>
             </v-row></div></template>

<script>
export default {
    name: 'DashBoard',
    computed:{
      getuserData(){
        return this.$store.state.userData
      }
    }
    }
</script>