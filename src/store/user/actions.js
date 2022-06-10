const actions = {
    async STORE_USER ({ commit, state}) {
        return await new Promise((resolve, reject) => {
            axios.ppost('/contact', {
            ...state
           }).then((response) => {
            if (response.data.result === 500) {
                const error = { response }
                reject(error)
            }
            resolve(response.data)
           }).catch((error) => {
            reject(error)
           }) 
        })
    }
}

export default actions