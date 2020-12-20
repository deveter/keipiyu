<template>
    <div id="resume">
        <div id="content">
            <section class="mt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-9">
                           <h1 class="font-weight-bold">Dashboard</h1>
                        </div>
                        <div class="col-lg-3 d-flex">
                            <button class="btn btn-primary w-100 align-self-center">Descargar informe</button>

                        </div>
                    </div>
                </div>
            </section>
            <section class="mt-5 bg-mix">
                <div class="container">
                    <div class="card">
                        <div class="card-header header-box">
                            <div class="container">
                                <div class="row">
                                    <div class="text-box-title">
                                        <h5 class="text-title">Resumen de ventas mensuales</h5>
                                    </div>
                                    <div class="select-box">
                                        <select name="option-date" id="resume-option-date" class="option-date p-2 m-3">
                                            <option v-bind:value="index" v-bind:key="index" v-for="(date,index) in twentyFourlastMonths" >{{ twentyFourlastMonths[index].month }}  {{twentyFourlastMonths[index].year}}</option>
                                        </select>
                                    </div>
                                    <p>vs</p>
                                    <div class="select-box">
                                        <select name="versus-date" id="versus-option-date" class="option-date p-2 m-3">
                                            <option value="0">Mes anterior</option>
                                            <option value="1">Mismo mes, año anterior</option>
                                        </select>                                       
                                        
                                        
                                    </div> 
                                    <button class="btn btn-primary" @click="runResumeSales">VER VALOR</button>
                                                                       
                                
                                </div>
                            </div>
                           
                        </div>
                        <div class="card-body">
                            <div class="row">
                                
                                    <div class=" col-12 col-sm-12 col-md 6 col-lg-3 col-xl-3 stat mt-3 d-flex resume-card-1">                                    
                                        <div class="mx-auto">
                                            <ion-icon name="logo-euro"></ion-icon>
                                            <h6 class="text-muted">Ventas totales</h6>
                                            <p class="main-kpi">{{ salesCurrent }}€</p>
                                            <div class="m-auto">
                                                <p class="increment">{{ ((parseInt(salesCurrent)-parseInt(salesPast))/parseInt(salesPast)*100).toFixed(2) }}%</p>
                                                <p class="increment">({{ salesPast}}€)</p>
                                            </div>  
                                        </div>                                                                       
                                    </div>
                                
                               
                               <div class="col-12 col-sm-12 col-md 6 col-lg-3 col-xl-3 stat mt-3 d-flex resume-card-2">
                                   <div>
                                        <div class="mx-auto">
                                            <ion-icon name="cash"></ion-icon>
                                            <h6 class="text-muted">Ticket Medio</h6>
                                            <p class="main-kpi">{{ (parseInt(salesCurrent)/parseInt(ordersCurrent)).toFixed(2) }}€</p>
                                            <div>
                                                <p class="increment">{{ ((parseInt(salesCurrent)-parseInt(salesPast))/parseInt(salesPast)*100).toFixed(2) }}%</p>
                                                <p class="increment">({{ (parseInt(salesPast)/parseInt(ordersPast)).toFixed(2) }}€)</p>
                                            </div>
                                        </div>                                                                               
                                    </div>

                               </div>
                               <div class=" col-12 col-sm-12 col-md 6 col-lg-3 col-xl-3 stat mt-3 d-flex resume-card-3">
                                   <div>
                                        <div class="mx-auto">
                                            <ion-icon name="cart"></ion-icon>

                                            <h6 class="text-muted">Pedidos</h6>  
                                            <p class="main-kpi">{{ ordersCurrent }}</p>
                                            <div>
                                                <p class="increment">{{ ((parseInt(ordersCurrent)-parseInt(ordersPast))/parseInt(ordersPast)*100).toFixed(2) }}%</p>
                                                <p class="increment">({{ ordersPast }})</p>
                                            </div>
                                        </div>                                                
                                    </div>
                               </div>

                                <div class=" col-12 col-sm-12 col-md 6 col-lg-3 col-xl-3 mt-3 d-flex resume-card-4">
                                    <div>
                                        <div class="mx-auto">
                                            <ion-icon name="shirt"></ion-icon>
                                            <h6 class="text-muted">Uds. Vendidas</h6> 
                                            <p class="main-kpi">{{ productsCurrent}} </p>
                                            <div>
                                                <p class="increment">{{ ((parseInt(productsCurrent)-parseInt(productsPast))/parseInt(productsPast)*100).toFixed(2) }}%</p>
                                                <p class="increment">({{ productsPast }})</p>
                                            </div>
                                        </div>                                        
                                    </div>

                                </div>                               
                                
                            </div>
                            <div class="row">
                                <line-chart-year :chart-data="datacollection"></line-chart-year>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>                
    </div>
</template>

<script>
import Axios from 'axios';
import moment from 'moment';
import lineChartYear from './lineChartYear.vue'

var consumerKey= "ck_ab3b329a9435b2df8bcc17c4be2351e908b2d713";
var consumerSecret= "cs_45f8041c219aa7ac66f0042ecff6b529c6cca1ef";
var resume=document.getElementById("boton")

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var initializeDate= new Date()


var web="https://www.neiiko.com"

export default {
    name:"resume",
    components:{lineChartYear},
    data(){
        return{
            salesCurrent:null,
            salesPast:null,
            ordersCurrent:null,
            ordersPast:null,
            productsCurrent:null,
            productsPast:null,
            twentyFourlastMonths:[],
            selectYear:initializeDate.getFullYear(),
            relationMonthDat:[
                {
                Enero:31,
                Febrero:28,
                Marzo:31,
                Abril:30,
                Mayo:31,
                Junio:30,
                Julio:31,
                Agosto:31,
                Septiembre:30,
                Octubre:31,
                Noviembre:30,
                Diciembre:31
            }
            ]
            
        }        
    },
    mounted(){
        this.thisMonthSales();
        this.lastMonthSales();
        this.twelveMonths()            

    },
    methods:{
        thisMonthSales(){
            var valueSelect=document.getElementById("resume-option-date").value
            var dateToday=new Date();

            var date=new Date()
            var monthThis=date.getMonth()
            var yearThis=date.getFullYear()
            
            var relationMonth=[{
                Enero:31,
                Febrero:28,
                Marzo:31,
                Abril:30,
                Mayo:31,
                Junio:30,
                Julio:31,
                Agosto:31,
                Septiembre:30,
                Octubre:31,
                Noviembre:30,
                Diciembre:31
            }];
            
            //Sacamos datos del mes actual
            if(valueSelect==0){
                let URL=web+"/wp-json/wc/v3/reports/sales?consumer_key="+consumerKey+"&consumer_secret="+consumerSecret+"&period=month";
                let result=Axios.get(URL)
                        .then((res)=>{
                            this.salesCurrent=res.data[0].net_sales
                            this.ordersCurrent=res.data[0].total_orders
                            this.productsCurrent=res.data[0].total_items
                            
                                            
                        })
                        .catch((err)=>{
                            console.log(err)
                        })
            }
            //Sacamos datos del mes anterior
            else if(valueSelect==1){
                let URL=web+"/wp-json/wc/v3/reports/sales?consumer_key="+consumerKey+"&consumer_secret="+consumerSecret+"&period=last_month";
                let result=Axios.get(URL)
                        .then((res)=>{
                            this.salesCurrent=res.data[0].net_sales
                            this.ordersCurrent=res.data[0].total_orders
                            this.productsCurrent=res.data[0].total_items
                            
                                            
                        })
                        .catch((err)=>{
                            console.log(err)
                        })                        
            }
            //Sacamos datos de API de meses anteriores a hace 1 mes
            else{               
                
                var selectMonth=monthThis-valueSelect;
                
                //Es el caso de que el mes seleccionado esté en el mismo año actual
                if(selectMonth>=0){
                    let nombreMes=meses[selectMonth]
                    let realMonth=selectMonth+1                    

                    //Mes con una sola cifra. Hay que ponerle un 0 delante para pasarlo a la API
                    if(realMonth<10){
                            
                            let realMonthString=realMonth.toString()
                            let realMonthStringWithZero="0"+realMonthString
                                                        
                            let URL=web+"/wp-json/wc/v3/reports/sales?consumer_key="+consumerKey+"&consumer_secret="+consumerSecret+"&date_min="+yearThis+"-"+realMonthStringWithZero+"-01&date_max="+yearThis+"-"+realMonthStringWithZero+"-"+relationMonth[0].[nombreMes];
                            let result=Axios.get(URL)
                                    .then((res)=>{
                                        this.salesCurrent=res.data[0].net_sales
                                        this.ordersCurrent=res.data[0].total_orders
                                        this.productsCurrent=res.data[0].total_items                               
                                                        
                                    })
                                    .catch((err)=>{
                                        console.log(err)
                                    })
                            this.selectYear=yearThis;
                            this.selectMonth=monthThis;
                                    
                    }
                    //Es el caso en el que el mes tiene 2 cifras. OK para la API
                    else{
                            let URL=web+"/wp-json/wc/v3/reports/sales?consumer_key="+consumerKey+"&consumer_secret="+consumerSecret+"&date_min="+yearThis+"-"+realMonth+"-01&date_max="+yearThis+"-"+realMonth+"-"+relationMonth[0].[nombreMes];
                            let result=Axios.get(URL)
                                    .then((res)=>{
                                        this.salesCurrent=res.data[0].net_sales
                                        this.ordersCurrent=res.data[0].total_orders
                                        this.productsCurrent=res.data[0].total_items                               
                                                        
                                    })
                                    .catch((err)=>{
                                        console.log(err)
                                    })
                            this.selectYear=yearThis;
                            this.selectMonth=monthThis; 
                    }                           
                }
                //El caso de que los meses son del año anterior
                else if(selectMonth<0&&selectMonth>=(-12)){
                    let nombreMes=meses[selectMonth]
                    let realMonth=selectMonth+1
                    
                    yearThis--                    
                    realMonth=13+selectMonth                    
                    //Ver si el mes tiene 1 cifra
                    if(realMonth<10){
                            
                            let realMonthString=realMonth.toString()
                            let realMonthStringWithZero="0"+realMonthString
                            
                            let mesMenosUno=realMonth-1
                            nombreMes=meses[mesMenosUno]                                                    
                                                        
                            let URL=web+"/wp-json/wc/v3/reports/sales?consumer_key="+consumerKey+"&consumer_secret="+consumerSecret+"&date_min="+yearThis+"-"+realMonthStringWithZero+"-01&date_max="+yearThis+"-"+realMonthStringWithZero+"-"+relationMonth[0].[nombreMes];
                            let result=Axios.get(URL)
                                    .then((res)=>{
                                        this.salesCurrent=res.data[0].net_sales
                                        this.ordersCurrent=res.data[0].total_orders
                                        this.productsCurrent=res.data[0].total_items                              
                                                
                                    })
                                    .catch((err)=>{
                                        console.log(err)
                                    })
                            this.selectYear=yearThis;
                            this.selectMonth=monthThis;                    
                    }
                    //El mes tiene 2 cifras
                    else{
                        
                        let mesMenosUno=realMonth-1
                        nombreMes=meses[mesMenosUno]                        
                                               
                            let URL=web+"/wp-json/wc/v3/reports/sales?consumer_key="+consumerKey+"&consumer_secret="+consumerSecret+"&date_min="+yearThis+"-"+realMonth+"-01&date_max="+yearThis+"-"+realMonth+"-"+relationMonth[0].[nombreMes];
                            let result=Axios.get(URL)
                                    .then((res)=>{
                                        this.salesCurrent=res.data[0].net_sales
                                        this.ordersCurrent=res.data[0].total_orders
                                        this.productsCurrent=res.data[0].total_items                                
                                                        
                                    })
                                    .catch((err)=>{
                                        console.log(err)
                                    })
                            this.selectYear=yearThis;
                            this.selectMonth=monthThis;
                    }                   
                }else{//QUEDA PENDIENTE TERMINAR CUANDO LLEGUE ENERO

                }
            }                                
        },
        lastMonthSales(){
            
            var valueSelectPastSales=document.getElementById("versus-option-date").value
            
            //Hallamos para comparar con un año anterior
            if(valueSelectPastSales==1){                         
                
                let MonthAndYear=this.getMonthandYearSelected()                
                let nameOfMonth=meses[(MonthAndYear[0])-1]
                let monthSelectedObject=this.relationMonthDat[0]
                                                
                let URL=web+"/wp-json/wc/v3/reports/sales?consumer_key="+consumerKey+"&consumer_secret="+consumerSecret+"&date_min="+(MonthAndYear[1]-1)+"-"+MonthAndYear[0]+"-01&date_max="+(MonthAndYear[1]-1)+"-"+MonthAndYear[0]+"-"+monthSelectedObject.[nameOfMonth];
                let result=Axios.get(URL)
                    .then((res)=>{
                        this.salesPast=res.data[0].net_sales
                        this.ordersPast=res.data[0].total_orders
                        this.productsPast=res.data[0].total_items                 
                            
                    })
                    .catch((err)=>{
                        console.log(err)
                    })  
            }
            //Hayamos para el mes anterior
            else{
                let MonthAndYear=this.getMonthandYearSelected();
                let nameOfMonth=meses[(MonthAndYear[0])-2]
                let monthSelectedObject=this.relationMonthDat[0]                           
                let mesParseado=parseInt(MonthAndYear[0])
                //Compruebo si es enero para restar un año             
                if(mesParseado<=1){                    
                    let oneLessYear=this.getMonthandYearSelected()[1]-1;                    
                    let URL=web+"/wp-json/wc/v3/reports/sales?consumer_key="+consumerKey+"&consumer_secret="+consumerSecret+"&date_min="+oneLessYear+"-12-01&date_max="+oneLessYear+"-12-31";
                    let result=Axios.get(URL)
                        .then((res)=>{
                            this.salesPast=res.data[0].net_sales
                            this.ordersPast=res.data[0].total_orders
                            this.productsPast=res.data[0].total_items                 
                                
                        })
                        .catch((err)=>{
                            console.log(err)
                        })                     
                }
                //El resto de meses, que no cambia de año el mes anterior
                else{
                                     
                    //Veo si el mes anterior tiene más de un número                 
                    if(mesParseado>=11){
                        
                        let URL=web+"/wp-json/wc/v3/reports/sales?consumer_key="+consumerKey+"&consumer_secret="+consumerSecret+"&date_min="+MonthAndYear[1]+"-"+(mesParseado-1)+"-01&date_max="+MonthAndYear[1]+"-"+(mesParseado-1)+"-"+monthSelectedObject.[nameOfMonth];
                        let result=Axios.get(URL)
                            .then((res)=>{
                                this.salesPast=res.data[0].net_sales
                                this.ordersPast=res.data[0].total_orders
                                this.productsPast=res.data[0].total_items                 
                                    
                            })
                            .catch((err)=>{
                                console.log(err)
                            })
                    }
                    //Voy con los meses anterior con solo 1 número
                    else{                        
                        let monthToString=(mesParseado-1).toString() 
                        
                        let URL=web+"/wp-json/wc/v3/reports/sales?consumer_key="+consumerKey+"&consumer_secret="+consumerSecret+"&date_min="+MonthAndYear[1]+"-0"+monthToString+"-01&date_max="+MonthAndYear[1]+"-0"+monthToString+"-"+monthSelectedObject.[nameOfMonth];
                        let result=Axios.get(URL)
                            .then((res)=>{
                                this.salesPast=res.data[0].net_sales
                                this.ordersPast=res.data[0].total_orders
                                this.productsPast=res.data[0].total_items                 
                                    
                            })
                            .catch((err)=>{
                                console.log(err)
                            }) 
                    }                
                }
            }                        
        },
        twelveMonths(){
            let dateToday=new Date();          
            var month=dateToday.getMonth();
            var year=dateToday.getFullYear();
            //Se hace bucle for de los últimos 2 años
            for(let i=0;i<=23;i++){
               //Se crea objeto que contenga el mes y el año
                var objectDate={
                    month:meses[month],
                    year:year        
                }
                //Se mete el objeto en una lista
                this.twentyFourlastMonths.push(objectDate)
                month=month-1
                if((month)<0){
                    year=year-1;
                    dateToday.setFullYear(year)
                    month=11    
                    
                }else{
                    dateToday.setMonth(month-1)        
                }                
            }                      
                          
        },
        getMonthandYearSelected(){
            let valueSelect=document.getElementById("resume-option-date").value;
            let todayDate=new Date();
            let yearTodayDate=todayDate.getFullYear();
            let monthTodayDate=todayDate.getMonth();

            let selectedMonth=monthTodayDate-valueSelect;            
            //Para valores del mismo año
            if (selectedMonth>=0){
                
                //Vemos si es de una cifra
                if (selectedMonth<9){
                    
                    let monthToString=(selectedMonth+1).toString()
                    let monthToStringWithZero="0"+monthToString
                    
                    selectedMonth=monthToStringWithZero
                    return [selectedMonth,yearTodayDate]
                }
                //Es de 2 cifras                
                else{
                    selectedMonth++;
                    
                    return [selectedMonth,yearTodayDate]
                }
            }
            //Valores del año anterior
            else if(selectedMonth<0&&selectedMonth>=(-12)){                                
                yearTodayDate--
                selectedMonth=13+selectedMonth              
                
                //Ver si es de una cifra
                if (selectedMonth<10){
                                        
                    let monthToString=(selectedMonth).toString()
                    let monthToStringWithZero="0"+monthToString
                    

                    selectedMonth=monthToStringWithZero
                    return [selectedMonth,yearTodayDate]
                }
                //Es de 2 cifras                
                else{
                    
                    return [selectedMonth,yearTodayDate]
                }

            }
            //Valores de 2 años anteriores
            else{
                console.log("YA EN ENERO")
            }
            

        },
        runResumeSales(){
                this.thisMonthSales();
                this.lastMonthSales();        
            }             
    }
}
</script>

<style>

:root{
    --primary:#5F76E8 !important;
    --secondary:#01CAF1 !important;
    --liti:#FF4F70 !important;
    --white:#ffffff !important;
}

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
*{
    font-family: 'Roboto', sans-serif;
}

#content{
    overflow-y:auto;
    height: auto;
    padding-bottom:5rem
}

.btn-primary{
    background: var(--liti) !important;
    border-color: var(--liti) !important;
}

.btn-primary:hover{
    background: var(--secondary) !important;
    border-color: var(--secondary) !important;

}

.stat{
    border-right: 1px solid var(--liti) !important);
}

.bg-mix{
    background: linear-gradient(180deg, white 50%, #efefef) 0)
}

.header-box{
    display: flex !important;

}

.text-box-title{
    float: left !important;
}

.select-box{
    float: right !important;
}

.option-date{
    border-color: var(--secondary);
    border-radius: 10px;
    

}

.title-resume{
    display: inline-block !important;
    font-weight: bold;
    color: var(--primary);
}

.logo-resume{
    max-width: 20px;
}

.increment{
    display: inline;
    font-size: 16px;
    color: var(--white);
}

.box-resumen{
    box-shadow: 0.1px 0.1px 30px 1px var(--liti);
}

.resume-card-1{
    color: white !important;
    border-radius: 5px;
    background: linear-gradient(to right, #5F76E8,#22A7F1);    
}

.resume-card-2{
    color: white !important;
    border-radius: 5px;
    background: linear-gradient(to right,#22A7F1,#01CAF1);
}

.resume-card-3{
    color: white !important;
    border-radius: 5px;
    background: linear-gradient(to right, #01CAF1,#7893B2);
}

.resume-card-4{
    color: white !important;
    border-radius: 5px;
    background: linear-gradient(to right, #7893B2,#FF4F70);
}

.text-muted{
    color: #ffffff !important;
}

.main-kpi{
    color:white;
    font-size: 30px;
    font-weight: bold;
}
.crusao{
    display: inline !important;
}

</style>