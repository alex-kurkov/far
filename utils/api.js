const axios = require('axios').default

class Api {
  constructor(initialSettings) {
    this._baseURL = initialSettings['baseUrl']
  }
  getAchievements() {
    return axios.get(`${this._baseURL}/achievements`)
  }

  // getHelp() {
  //   return axios.get(`${this._baseURL}/index-help`)
  // }

  getSupport() {
    return axios.get(`${this._baseURL}/index-support`)
  }

  getFooter() {
    return axios.get(`${this._baseURL}/footer`)
  }

  // getMetas() {
  //   return axios.get(`${this._baseURL}/metas`)
  // }

  getPages() {
    return axios.get(`${this._baseURL}/pages`)
  }

  getTeamMembers() {
    return axios.get(`${this._baseURL}/team-members`)
  }
  getMenu() {
    return axios.get(`${this._baseURL}/menus`)
  }

  getCustomPages() {
    return axios.get(`${this._baseURL}/custom-pages`)
  }
  getHeader() {
    return axios.get(`${this._baseURL}/header`)
  }
  getReports() {
    return axios.get(`${this._baseURL}/reports`)
  }

  getRequisites() {
    return axios.get(`${this._baseURL}/requisites`)
  }

  getData() {
    return Promise.all([
      this.getAchievements(),
      // this.getHelp(),
      this.getSupport(),
      // this.getAchievement(),
      this.getFooter(),
      // this.getMetas(),
      this.getPages(),
      this.getTeamMembers(),
      this.getMenu(),
      this.getCustomPages(),
      this.getHeader(),
      this.getReports(),
      this.getRequisites(),
    ])
  }
}

export const baseUrl = 'https://rylkov.ga'
export const api = new Api({
  baseUrl: baseUrl,
})
