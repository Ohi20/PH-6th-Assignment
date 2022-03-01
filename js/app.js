const allPhone = () => {
    const searchValue = document.getElementById("search-box").value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
   
    fetch(url)
    .then(res => res.json())
    .then(data => showPhoneDetails(data.data))
}

const showPhoneDetails = (phones) => {
   for (const phone of phones) {
    const parent = document.getElementById("phone-container");
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="container mt-5">
        <div class="card-group container-fluid">
            <div id="phone-container1" class="card phone-container border-3">
              <div class="card-body">
                <h2 class="card-title">Name:${phone.phone_name} </h2>
                <h4 class="card-text">Brand:${phone.brand} </h4>
                <h4 class="card-text">Slug:${phone.slug} </h4>
               
              </div>
              <div>
              <button>Details</button>
              </div>
            </div>
            <div id="phone-container2" class="card phone-container border-3">
            
              <div class="card-body">
                <img src="${phone.image}" class="card-img-top w-75" alt="...">
                
              </div>
              <button>Details</button>
            </div>
            <div class="card border-3">
              
              <div class="card-body">
                <h3 class="card-title">Brand: </h3>
               
              </div>
              <button>Details</button>
            </div>
          </div>
       </div>
    `
    parent.appendChild(div);
    }
    console.log(phones);
}


