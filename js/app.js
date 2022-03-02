const allPhone = () => {
    const searchValue = document.getElementById("search-box");
    const searchText = searchValue.value;
    
    // clear data
    searchValue.value = '';
    // load data
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showPhoneDetails(data.data))
          
}

const showPhoneDetails = (phones) => {
  
  // clear previous results
  const searchResult = document.getElementById('phone-container');
  searchResult.innerHTML = '';

  // No results emty field
  if(phones.length == 0){
    const click = document.getElementById('no-result');
    const div = document.createElement('div');
    div.innerHTML = `
    <h1 class= "text-center mt-5 text-danger">No Phone Found! write something to search.</h1>
    `
    click.appendChild(div);
  }
  else{
    document.getElementById("no-result").style.display = "none";
  }

  // running loop to all phones
   phones.forEach(phone => {
    const parent = document.getElementById("phone-container");
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="container mt-5">
        <div class="card-group container-fluid">
            <div class="card phone-container border-3">
              <div class="card-body">
                <h2 class="card-title">Name:<span class="text-primary" > ${phone.phone_name} </span> </h2>
              </div>
              <div class="text-center
          mb-3">
          <button  onclick="loadPhoneDetails('${phone.slug}')" id="card-button" >Details</button>
          </div>
            </div>
            <div class="card phone-container border-3">
              <div class="card-body">
                <img src="${phone.image}" class="card-img-top w-75" alt="...">
              </div>
              <div class="text-center
              mb-3">
              <button  onclick="loadPhoneDetails('${phone.slug}')" id="card-button" >Details</button>
              </div>
            </div>
            <div class="card border-3">
              <div class="card-body">
                <h3 class="card-title">Brand:<span class="text-primary"> ${phone.brand} </span> </h3>
             </div>
          <div class="text-center
          mb-3">
          <button  onclick="loadPhoneDetails('${phone.slug}')" id="card-button" >Details</button>
          </div>
       </div>
    `
    parent.appendChild(div);
   }); 
}

// get phone details data
const loadPhoneDetails = (phoneId) => {
     const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
     fetch(url)
     .then(res => res.json())
     .then(value => displayPhoneDetails(value.data))
}

// show phone details
const displayPhoneDetails = mobile => {
  const phoneDetails = document.getElementById('phone-details');
  phoneDetails.innerHTML = '';
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  <div>
  <img class="card-img-top w-25  " src="${mobile.image}"  alt="...">
  </div>
  <div class="card-body">
    <h4 class="card-title text-center text-primary">Phone Name: ${mobile.name}</h4>
    <h4 class="card-title text-center text-primary">Memory: ${mobile.mainFeatures.memory}</h4>
    <h4 class="card-title text-center text-primary">Info: ${mobile.releaseDate}</h4>
    <h4 class="card-title text-center text-primary">Sensors: ${mobile.mainFeatures.sensors}</h4>
    <h4 class="card-title text-center text-primary">Others: ${mobile.others}</h4>
    <h4 class="card-title text-center text-primary">Storage: ${mobile.mainFeatures.storage}</h4>
    <h4 class="card-title text-center text-primary">Slug: ${mobile.slug}</h4>
   </div>
  `
  phoneDetails.appendChild(div);
}

