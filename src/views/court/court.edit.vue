<template>
  <div>
    {{isEdit}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      courtInfo: {}
    };
  },
  computed: {
    isEdit() {
      return this.$route.name == 'court.edit';
    }
  }
};
</script>
