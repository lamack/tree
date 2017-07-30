<template>
    <div id="app" class="fillcontain">
        <headTop></headTop>
		    <router-view :style="{height:height}"></router-view>
    </div>
</template>

<script>
import headTop from '@/components/headTop'
    export default {
    	data(){
           return {
           	   height:window.innerHeight-60+'px'
           }
    	},
    	components:{
    		headTop,
    	}
    }
</script>

<style lang="less">
	@import './style/common';
</style>
