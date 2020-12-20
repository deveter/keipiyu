<template>
  <div class="container">
      <canvas id="myChart" width="400" height="100"></canvas>    
  </div>
</template>

<script>
var consumerKey= "ck_ab3b329a9435b2df8bcc17c4be2351e908b2d713";
var consumerSecret= "cs_45f8041c219aa7ac66f0042ecff6b529c6cca1ef";

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var web="https://www.neiiko.com"
var date=new Date()
var day=date.getDate();
var month=date.getMonth();
var year=date.getFullYear()

var ctx = document.getElementById('myChart');

import Axios from 'axios'

import moment from 'moment'
import datejs from 'datejs'
import Chart from 'chart.js';
export default {
    name:"linechartYear",    
    data(){
        return{
            loaded:false,
            dataMonthPerMonth:[],
            chartdata:[],            
        }
    },
    mounted () {
    
      this.getData()
      this.fillData()      
     
  },
    
    methods:{
        getData(){           
                        
            let URL=web+"/wp-json/wc/v3/reports/sales?consumer_key="+consumerKey+"&consumer_secret="+consumerSecret+"&date_min="+(year-1)+"-01-01&date_max="+year+"-"+(month+1)+"-"+day;
            let result=Axios.get(URL)
                    .then((res)=>{
                        let monthList=this.getMonthsThisAndLastYear() 
                        
                        //Metemos en dataLastTwoYears los datos unidos del mes y de la API                     
                        for (let i in monthList){
                            let dataMerged=null;
                            //Metemos los datos de meses con 2 cifras
                            let monthAndYear=null;
                            let monthOrdersData={};

                            if(monthList[i].monthNumber>=10){
                                monthAndYear=monthList[i].numberYear+"-"+monthList[i].monthNumber                                
                                monthOrdersData={
                                    customers:res.data[0].totals.[monthAndYear].customers,
                                    discount:res.data[0].totals.[monthAndYear].discount,
                                    items:res.data[0].totals.[monthAndYear].items,
                                    orders:res.data[0].totals.[monthAndYear].orders,
                                    sales:res.data[0].totals.[monthAndYear].sales,
                                    shipping:res.data[0].totals.[monthAndYear].shipping,
                                    tax:res.data[0].totals.[monthAndYear].tax
                                }                                                                                              
                                                            
                            }else{                                
                                monthAndYear=monthList[i].numberYear+"-0"+monthList[i].monthNumber
                                monthOrdersData={
                                    customers:res.data[0].totals.[monthAndYear].customers,
                                    discount:res.data[0].totals.[monthAndYear].discount,
                                    items:res.data[0].totals.[monthAndYear].items,
                                    orders:res.data[0].totals.[monthAndYear].orders,
                                    sales:res.data[0].totals.[monthAndYear].sales,
                                    shipping:res.data[0].totals.[monthAndYear].shipping,
                                    tax:res.data[0].totals.[monthAndYear].tax
                                }                                                              
                            }
                            dataMerged=Object.assign(monthList[i],monthOrdersData)
                            this.dataMonthPerMonth[i]=dataMerged                                                      
                  
                        }                             
                                        
                    })
                    .catch((err)=>{
                        console.log(err)
                    })                                      

        },
        getMonthsThisAndLastYear(){
            let monthsThisandLastYear=[]
            for (let i=0;i<24;i++){
                let m=i
                let restarAno=1                
                if(i>11){
                    m=i-12;
                    restarAno=0                    
                }
                let variableMonth={
                    monthName:meses[m],
                    monthNumber:m+1,
                    numberYear:year-restarAno
                }                
                monthsThisandLastYear.push(variableMonth)
            }
            return monthsThisandLastYear         
        },
        fillData(){
            var ctx = document.getElementById('myChart');
            
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
                    datasets: [{
                        label: "Año "+year,
                        data: [4,2,15,7,5,9,10,9,8,4,13,5],                        
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                     },
                     {
                        label: 'Año '+(year-1),
                        data: [12, 19, 3, 5, 2, 3,6,7,8,7,8,12],                        
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1

                     }],
                     options: {
                            scales: {
                                    xAxes: [{
                                                gridLines: {
                                                    display:false
                                                }
                                            }],
                                    yAxes: [{
                                                gridLines: {
                                                    display:false
                                                }   
                                            }]
                                    }
                        }
                }
            });           
                     
        },
        
    }
    
}
</script>

<style>

</style>