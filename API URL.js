let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function() {
    const data = JSON.parse(xhr.response);
    console.log(data);
    console.log(xhr.status);
    for (let i = 0; i < data.length ; i++) {
      console.log("Name :", data[i].name.common);
      console.log("Regions :",data[i].regions);
      console.log("population :",data[i].population);
    }
};
