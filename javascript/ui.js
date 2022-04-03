class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.city;
    this.defaultCity = "London";
  }

  populateUI(data) {
    //de-structure vars

    //add them to inner HTML

    this.uiContainer.innerHTML = `
        
        <div class="card mx-auto mt-5" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h5 class="card-title">${data.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">High Temperature Of ${Math.round(data.main.temp_max-273.15) * 1.8 + 32} degrees. </h6>
                <h7 class="card-subtitle mb-2 text-muted">Low Temperature Of ${Math.round(data.main.temp_min-273.15) * 1.8 + 32} deegrees. </h7>
                <h8 class="card-subtitle mb-2 text-muted">Feels like ${Math.round(data.main.feels_like-273.15) * 1.8 + 32} degrees.</h8>
                <p class="card-text ">Weather conditions are described as: ${data.weather[0].description}</p>
                
            </div>
        </div>
        
        
        `;
  }

  clearUI() {
    uiContainer.innerHTML = "";
  }

  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }

  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  clearLS() {
    localStorage.clear();
  }
}