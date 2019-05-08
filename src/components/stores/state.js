let defaultCity = "上海"
try{
    if(localStorage.city){
        defaultCity = localStorage.city;
    }
}catch(err){}
export default {
  city:defaultCity || "上海"
}