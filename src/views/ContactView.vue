<template>
    <v-content>Contact
      <div class="staticHero">
      <v-img :width="width" src="../assets/images/img14.jpg" >
        <v-row align-content="end" class="lightbox white--text pa-2 fill-height">
          <v-col >
            <v-container>
              <div class="headline">Contact Us</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <div class="block" pa="4">
      <v-contain>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-textarea
            v-model="message"
            :rules="messageRules"
            label="Message"
            required>
          </v-textarea>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Submit
          </v-btn>

          <v-btn
            color="error"
            class="mr-4"
            @click="reset"
          >
            Reset
          </v-btn>
        </v-form>
      </v-contain>
    </div>
    <div class="googlemap">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111332.5953610568!2d-81.11131754999998!3d29.307462950000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e6dcb9d47e537f%3A0x4bfacc3c5352fd3e!2sOrmond%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1680018239178!5m2!1sen!2sus" width="100%" height="450"></iframe>
    </div>
    </v-content>
    
  </template>
  
  <script>
    
  
    export default {
      name: 'Contact-view',
  
      data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      message: '',
      messageRules: [
        v => !!v || 'Message is required',
        v => (v && v.length >= 10) || 'Message must be more than 10 characters',
      ]
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
    },
  
      components: {
        
      },
    }
  </script>