export const API_KEY ='AIzaSyAYB0Hc-dl9fmvw302QV5NsiopJdgufwKg';
export const value_con=(value)=>{
  if(value>=1000000){
    return Math.floor(value/1000000)+"M"
  }else if(value>=1000){
    return Math.floor(value/1000)+"K"
  }else{
    return value;
  }
}
