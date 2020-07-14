import axios from 'axios'

const apiClient1 = axios.create({
    baseURL: 'http://localhost:8000/api/v1',  //3000 earlier
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json' // double quote and single quotes r 
        //important in json 
    }
})


export default {
    
    getArtists() {
        return apiClient1.get('/portfolio')
    },
    getArtist(id) {
        return apiClient1.get('/portfolio/' + id)
    },
}