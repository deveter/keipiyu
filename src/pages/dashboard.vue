<template>
    <div id="dashboard">
        <resume />
        <div class="row">
            <line-chart-year ></line-chart-year>
        </div>
        <dashboardBar />

    </div>
    
</template>

<script>
import resume from '../components/resume.vue'
import dashboardBar from '../components/dashboardBar.vue'
import lineChartYear from '../components/lineChartYear.vue'

export default {
    name:"dashboard",
    components:{
        resume,
        dashboardBar
    }
}
</script>