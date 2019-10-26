import { track, LightningElement } from 'lwc';

import { api } from './api'

export default class DotaMatch extends LightningElement {

    @track
    data

    async getMatch( { target } ) {
  
        const url = `${api.host}/matches/${target.name}`
      
        const data = await (await fetch(url)).json()
      
        this.data = JSON.stringify(data, null, 4)
    }
}