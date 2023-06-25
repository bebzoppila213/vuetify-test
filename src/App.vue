<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

export default{
  
  beforeCreate() {
		this.$store.commit('initialiseStore');
	}
}

</script>
