import { Controller } from "@hotwired/stimulus"
import { get } from '@rails/request.js'

export default class extends Controller {
  static values = { url: String }

  async showDetail(event) {
    event.preventDefault()
    const response = await get(this.urlValue, {responseKind: "turbo-stream"})
    if (response.ok) {
      console.log("got the response")
      console.log(response)
      window.history.pushState({}, '', new URL(this.urlValue))
    }
  }
}
