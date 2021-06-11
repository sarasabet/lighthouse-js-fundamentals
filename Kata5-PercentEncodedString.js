const urlEncode = (data) => {
  let newUrl ='';
  for(i =0 ; i < data.length ; i ++){    
    if(data[i] === ' '){
      newUrl +='20%'
    } 
    else
    {
      newUrl += data[i];
    }    
  }  
  return newUrl;
}
console.log(urlEncode('s a ra'))