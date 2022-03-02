const allPhone = () => {
    const searchValue = document.getElementById("search-box");
    const searchText = searchValue.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    searchValue.value = '';
    fetch(url)
    .then(res => res.json())
    .then(data => showPhoneDetails(data.data))
    // console.log(url);
    //  const keys = Object.keys(data.data);
    // console.log(res.json());
    // showPhoneDetails(data.data)
    //  console.log(keys);
       
}

const showPhoneDetails = (phones) => {
   console.log(phones);
   phones.forEach(phone => {
    const parent = document.getElementById("phone-container");
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="container mt-5">
        <div class="card-group container-fluid">
            <div class="card phone-container border-3">
              <div class="card-body">
                <h2 class="card-title">Name: ${phone.phone_name} </h2>
                
                
               
              </div>
              <div>
              <button onclick="phoneDetails('hello')" id="card-button" >Details</button>
              </div>
            </div>
            <div class="card phone-container border-3">
            
              <div class="card-body">
                <img src="${phone.image}" class="card-img-top w-75" alt="...">
                
              </div>
             
            </div>
            <div class="card border-3">
              
              <div class="card-body">
                <h3 class="card-title">Brand: ${phone.brand} </h3>
            
          </div>
       </div>
    `
    parent.appendChild(div);
   }); 
   
    //  console.log(phone);
    //  console.log(phones);
    // console.log(phone.slug);
}

const phoneDetails = (phoneId) => {
    console.log(phoneId);
    // const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    // fetch(url)
    // .then(res => res.json())
    // .then(value => console.log(value))
}


