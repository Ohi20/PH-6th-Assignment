const allPhone = () => {
    const searchValue = document.getElementById("search-box").value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
   
    fetch(url)
    .then(res => res.json())
    .then(data => showPhoneDetails(data))
}

const showPhoneDetails = (phone) => {
    console.log(phone);
}