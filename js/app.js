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
  //  console.log(phones);
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
              <button onclick="loadPhoneDetails('${phone.slug}')" id="card-button" >Details</button>
              </div>
            </div>
            <div class="card phone-container border-3">
            
              <div class="card-body">
                <img src="${phone.image}" class="card-img-top w-75" alt="...">
                
              </div>
              <div>
              <button onclick="loadPhoneDetails('${phone.slug}')" id="card-button" >Details</button>
              </div>
            </div>
            <div class="card border-3">
              
              <div class="card-body">
                <h3 class="card-title">Brand: ${phone.brand} </h3>
            
          </div>
          <div>
          <button onclick="loadPhoneDetails('${phone.slug}')" id="card-button" >Details</button>
          </div>
       </div>
    `
    parent.appendChild(div);
   }); 
   
    // console.log(phone);
    // console.log(phones);
    // console.log(phone.slug);
}

const loadPhoneDetails = (phoneId) => {
    // console.log(phoneId);
     const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
     fetch(url)
     .then(res => res.json())
     .then(value => displayPhoneDetails(value.data))
}
// console.log()
const displayPhoneDetails = mobile => {
  // console.log(mobile);
  const phoneDetails = document.getElementById('phone-details');
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  <div>
  <img src="${mobile.image}" class="card-img-top w-25" alt="...">
  </div>
  <div class="card-body">
    <h5 class="card-title">Phone Name: ${mobile.name}</h5>
    <h5 class="card-title">Info: ${mobile.releaseDate}</h5>
    <h5 class="card-title">Sensors: ${mobile.mainFeatures.sensors}</h5>
    <h5 class="card-title">Others: ${mobile.others}</h5>
    
  </div>
  `
  console.log(mobile.name);
  phoneDetails.appendChild(div);
}

// {mainFeatures: {…}, slug: 'samsung_galaxy_a21s-10239', name: 'Galaxy A21s', releaseDate: 'Released 2020, June 02', brand: 'Samsung', …}