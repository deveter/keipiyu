<template>
  <section id="dashboardBar">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                    <div>
                    <select name="option-date" id="resume-option-date" class="option-date p-2 m-3">
                        <option value="0" selected="selected">Últimos 7 días</option>
                        <option value="0">Este mes</option>
                        <option value="0">Este año</option>
                        <option value="0">Seleccionar fechas</option>
                    </select>
                </div>
                    <div class="card rounded-0">
                        <div class="card-header">
                            <h6 class="font-weight-bold">Evolución de ingresos</h6>
                        </div>
                        <div class="class-body">
                            <div class="small">
                              <line-chart :chart-data="datacollection"></line-chart>
                              
                              <button @click="fillData()">Randomize</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <div class="card rounded-0">
                        <div class="card-header">
                            <h6 class="font-weight-bold">Ventas recientes</h6>
                        </div>
                        <div class="card-body">
                            <div>
                                <ul>
                                   <li  class="last-orders-item" v-for="(item,index) in lastOrders" v-bind:key="item.id">
                                       <div class="container">
                                           <div class="row">
                                                <div>
                                                    <h5 class="order-id font-weight-bold">Pedido {{ item.id }}</h5>
                                                    
                                                    <h6>{{ item.amount }}</h6>
                                                    <h6>{{ Date.parse(item.day).getDate()+"/"+Date.parse(item.day).getMonth()+"/"+Date.parse(item.day).getFullYear() }}</h6>
                                                    <h6>{{ item.status }}</h6>
                                                    <ul>
                                                        <li class="last-orders-item" v-for="product in lastOrders[index].items" v-bind:key="product.id">
                                                            <div class="container">
                                                                <div class="row">
                                                                    <div class="col-7 col sm-7 col-md-7 col-lg-7 col-xl-7">
                                                                        <img class="product-img" src="https://www.neiiko.com/wp-content/uploads/2020/11/IMG_4354-scaled.jpg" alt="">
                                                                    </div>
                                                                    <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                                                                        <p class="product-name">{{ product.name }}</p>
                                                                    </div>                                                                 
                                                                   
                                                                   
                                                                </div>
                                                            </div>                                                           

                                                        </li>
                                                    </ul>
                                                </div>
                                           </div>
                                       </div>                                                                                               
                                                                                            
                                       <hr>
                                   </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button @click="showAnalytics">MOSTRAR LAST ORDER</button>
        
                       
    </section>     
</template>

<script>
 
  import lineChart from './lineChart.js'
 

  import 'datejs'

  import Axios from 'axios';

  var web="https://www.neiiko.com"

  var consumerKey= "ck_ab3b329a9435b2df8bcc17c4be2351e908b2d713";
  var consumerSecret= "cs_45f8041c219aa7ac66f0042ecff6b529c6cca1ef";

  export default {
    components: {
      
      lineChart,
      
    },
    data () {
      return {
        datacollection: null,
        lastOrders:[]
      }
    },
    mounted () {
      this.fillData();
      this.lastSales()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#293f5d',
              data: [this.getRandomInt(), this.getRandomInt(),this.getRandomInt(),this.getRandomInt(),this.getRandomInt(),this.getRandomInt(),this.getRandomInt(),this.getRandomInt(),this.getRandomInt(),this.getRandomInt(),]
            }, {
              label: 'Data Two',
              backgroundColor: '#e9bbad',
              data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }        
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      },
      //Método para sacar las útimas ventas
      lastSales(){

                       
            var soldProducts=[];
            var listaIntermedia=[];
            let URL=web+"/wp-json/wc/v3/orders?consumer_key="+consumerKey+"&consumer_secret="+consumerSecret+"&per_page=6";
            let result=Axios.get(URL)
                .then((res)=>{
                    
                    console.log(res.data)
                    //Recorro la lista de los objetos con todas la órdenes
                    for (var i in res.data){

                        //Recorro la lista de objetos con todos los productos en un pedido                       
                        for(var u in res.data[i].line_items){
                            //Creo la variable product con los datos de id y name del producto
                            var product={
                                id:res.data[i].line_items[u].product_id,
                                name:res.data[i].line_items[u].name,
                            }

                            //Creo la variable con la imagen del producto. Tengo que llamar a un método definido porque en este endpoint no viene esa información
                            let srcImage={image:this.getImage(product.id)}
                            
                            let objeto=Object.assign(srcImage,product)


                            console.log("SE VIENE CALIDAD")


                            
                            console.log(objeto)

                            listaIntermedia.push(objeto);
                            
                            if(u==res.data[i].line_items.length-1){
                                soldProducts.push(listaIntermedia);
                                listaIntermedia=[]
                            }                       

                        }

                         var order={
                            id:res.data[i].id,
                            day:res.data[i].date_created,
                            amount:res.data[i].total,
                            status:res.data[i].status,
                            items:soldProducts[i]
                            
                        }                       

                        this.lastOrders.push(order)

                    }
                    
                                      
                })
                .catch((err)=>{
                    console.log(err)
                })
                

         },
         //Método de prueba para scaar los datos de lastOrders
         showAnalytics(){
             console.log("VIENE LAST ORDERS")
             console.log(this.lastOrders)
                                      
         },
         //Método para sacar la imagen de un producto
         getImage(id){
             let urlimage=web+"/wp-json/wc/v3/products?consumer_key="+consumerKey+"&consumer_secret="+consumerSecret+"&include="+id
             let image=Axios.get(urlimage)
                .then((res)=>{
                    
                    let imageSrc=res.data[0].images[0].src

                    console.log(imageSrc)

                                      
                    return imageSrc

                })              
         }         
    },
    
  }
</script>

<style>
  :root{
    --primary:#293f5d !important;
    --secondary:#27676e !important;
    --liti:#e9bbad !important;
    --grey:#efefef !important;
}

.bg-grey{
    background-color: var(--grey) !important;

}

  .small {
    max-width: 600px;
    margin:  150px auto;
  }

  .last-orders-item{
      text-decoration: none;
      list-style: none;
      
  }

  .order-id{
      color: var(--primary);
  }

  .product-img{
      object-fit: cover;
      width: 100px;
      height: 100px;
      display: inline;
      border-radius: 5px;
  }

  .product-name{
      font-size: 15px;
  }
</style>