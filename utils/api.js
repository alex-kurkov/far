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

  getAchievement() {
    return axios.get(`${this._baseURL}/index-achievement`)
  }

  getFooter() {
    return axios.get(`${this._baseURL}/footer`)
  }

  getMetas() {
    return axios.get(`${this._baseURL}/metas`)
  }

  getTeamMembers() {
    return axios.get(`${this._baseURL}/team-members`)
  }

  getOurTeamPromo() {
    return axios.get(`${this._baseURL}/our-team-promo`)
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
      this.getAchievement(),
      this.getFooter(),
      this.getMetas(),
      this.getTeamMembers(),
      this.getOurTeamPromo(),
    ])
  }
}
export const baseUrl = 'https://rylkov.ga'
export const api = new Api({
  baseUrl: baseUrl,
})
