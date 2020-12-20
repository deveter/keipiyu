<template>
    <div id="dashboard">
        <resume />
        <dashboardBar />

    </div>
    
</template>

<script>
import resume from '../components/resume.vue'
import dashboardBar from '../components/dashboardBar.vue'

export default {
    name:"dashboard",
    components:{
        resume,
        dashboardBar
    }
}
</script>