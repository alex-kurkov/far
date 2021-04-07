const axios = require('axios').default

class Api {
  constructor(initialSettings) {
    this._baseURL = initialSettings['baseUrl']
  }

  getIntro() {
    return axios.get(`${this._baseURL}/index-intro`)
  }

  getMission() {
    return axios.get(`${this._baseURL}/index-mission`)
  }

  getAchievements() {
    return axios.get(`${this._baseURL}/achievements`)
  }

  getAbout() {
    return axios.get(`${this._baseURL}/index-about`)
  }

  getPromo() {
    return axios.get(`${this._baseURL}/index-promo`)
  }

  getHelp() {
    return axios.get(`${this._baseURL}/index-help`)
  }

  getSupport() {
    return axios.get(`${this._baseURL}/index-support`)
  }

  getData() {
    return Promise.all([
      this.getIntro(),
      this.getMission(),
      this.getAchievements(),
      this.getAbout(),
      this.getPromo(),
      this.getHelp(),
      this.getSupport(),
    ])
  }
}

export const api = new Api({
  baseUrl: 'https://rylkov.ga',
})
