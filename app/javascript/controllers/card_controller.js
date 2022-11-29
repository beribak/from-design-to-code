import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="card"
export default class extends Controller {
  
  static targets = ["card", "logo", "form"]

  connect() {
    // console.log(this.formTarget)
  }

  showFrom(event) {
    this.formTarget.classList.toggle("d-none")

  }

  submitForm(event) {
    event.preventDefault()

    fetch(this.formTarget.action, {
      method: "PATCH",
      headers: { "Accept": "text/plain" },
      body: new FormData(this.formTarget)
    })
    .then(response => response.text())
    .then((data )=> { 
      this.cardTarget.outerHTML = data
    })

  }
}
