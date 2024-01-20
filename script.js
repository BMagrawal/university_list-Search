let apiurl = "http://universities.hipolabs.com/search?country=";

let SearchInput = document.querySelector("#searchBar");
let searchbtn = document.querySelector("#SearchBtn");
let tbody = document.querySelector("tbody");

async function UniversitySearch(city){
    let tbody = document.getElementById("tbody");
    let table = document.querySelector("table");

    table.removeChild(tbody);
    const responce = await fetch(apiurl + city);
    const data = await responce.json();
    const value =  Array.from(data);

    let country = value[0].country;
    

    for(let i=0 ; i< data.length ; i++){

    

        let template = `
        <tbody id="tbody">
            <tr id="tr">
                <td>${country}</td>
                <td>${value[i].domains[0]}</td>
                <td>${value[i].name}</td>
                <td>${value[i].state}</td>
                <td><a href="${value[i].web_pages[0]}">${value[i].web_pages[0]}</a></td>
            </tr>
        <tbody> `

        table.innerHTML += template;
    }
   
    // console.log(value[0].web_pages[0]);
    // console.log(value[0].domains[0])
    // console.log(value[0].state-province)
    // console.log(value[0].country)
    // console.log(value[0].name)
    // console.log(value)
}



searchbtn.addEventListener("click" , ()=>{
    UniversitySearch(SearchInput.value);
    SearchInput.value = "";
})