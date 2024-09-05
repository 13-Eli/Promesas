//id que referencia a la fakestoreapi
let data={"id":5,"title":"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet","price":695,"description":"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.","category":"jewelery","image":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":4.6,"count":400}};

//me regresa la constante que tengo arriba
//function getData(){
  //setTimeout(
      //()=>{console.log(data):
        //return data}
  //me lo regresa en 5 (puede cambiar) segundos* 1000, simulo una promesa pidiendo un dato que estará disponible dentro de 5 segundos
     //, (5*1000));
//return data

function getData(){
    return new Promise((resolve, reject) => {
        if (data==null){
            reject(new Error("Data is null"));
}//data null 
  let seconds = Math.ceil(Math.random()*10000);
  console.log(seconds);
  setTimeout(()=>resolve(data) ,seconds);

});
}//getData


//Esta función va a obtener los datos (otro método de promesa, dentro de esta función va a mandar a llamar el getData) me sigue regresando una promesa
//Me manda a llamar al método y cuando termine su ejecución yo puedo continuar con el resto de la función, aunque yo la mande a llamar no me va a llamar el resultado, se toma su tiempo para el resultado
//obtengo algo asincrono
//con try, intenta hacer eso y si no lo hace marca el error 
//try funciona para capturar excepciones o errores
//fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//fetch: https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
async function fetchingData(){
        try{
            const response = await getData();
            console.log("async Promesa cumplida <3", response);
            let divData = document.getElementById("divData");
            divData.innerHTML = response.title + "<br/>" + response.description;
        } catch (err){
            console.log("async Promesa rechazada </3" ,err)
        }//catch
}//fetchingData

fetchingData();

//Está función también es válida
//getData()
//.then( (response)=>{
//    console.log("Promesa cumplida <3",response);
//    let divData = document.getElementById("divData");
//    divData.innerHTML = response.titlle + "</br>" + response.description;

//} )
//.catch( (err)=>console.log("promesa rechazada <3",err) );//no es la unica manera de manejar una promesa
//freetestapi: https://freetestapi.com/apis/products

