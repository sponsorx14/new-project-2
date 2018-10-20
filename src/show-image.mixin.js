export default {
  methods: {
    showImage(img) {
      const payload = {
        img,
        showOverlay: true,
      };

      this.$store.dispatch('setImageUrl', payload);
    },
  },
};
