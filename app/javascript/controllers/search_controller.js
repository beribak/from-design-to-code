import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search"
export default class extends Controller {
  
  static targets = ["field", "form", "list"]

  connect() {
    console.log(this.fieldTarget.value) 
  }

  searchMovies() {
    // console.log(`${this.formTarget.action}?query=${this.fieldTarget.value}`)
    let url = `${this.formTarget.action}?query=${this.fieldTarget.value}`
    fetch(url, { headers: { "Accept": "text/plain" } })
    .then(response => response.text())
    .then((data) => {
      this.listTarget.outerHTML = data
    })
  }
}
