const validationRules = {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      valid: true,
      emailRules: [
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 20 || "Name must be less than 20 characters",
      ],
      passwordRules: [
        (v) => !!v || "Please type password",
        (v) =>
          (v && v.length >= 6) || "Password should have more than 6 characters",
      ],
      confirmPasswordRules: [
        (v) => !!v || "type confirm password",
        (v) =>
          v === this.password || "The password confirmation does not match.",
      ],
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
      this.name != "" &&
        this.email != "" &&
        this.password != "" &&
        this.confirmPassword != "";
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
  // computed: {
  //     passwordConfirmationRule() {
  //         return () => (this.password === this.confirmPassword) || 'Password must match'
  //     },
  // }
};

export default validationRules;
