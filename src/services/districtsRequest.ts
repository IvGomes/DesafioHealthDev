import axios from 'axios'

const axiosDistrictsRequest = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades',
})

interface axiosUfRequestResponse {
  id: number
  sigla: string
  nome: string
  regiao: {
    id: number
    sigla: string
    nome: string
  }
}

export const getUfs = () => {
  return axiosDistrictsRequest
    .get('/estados')
    .then((response) => response.data)
    .then((data) => {
      const dataUfs = data.map((uf: axiosUfRequestResponse) => {
        return uf.sigla
      })

      return dataUfs
    })
    .catch((error) => console.error(error))
}

interface axiosMunicipiosRequestResponse {
  id: number
  nome: string
}

export const getDistricts = (uf: string) => {
  return axiosDistrictsRequest
    .get(`/estados/${uf}/municipios`)
    .then((response) => response.data)
    .then((data) => {
      const dataMunicipios = data.map(
        (m: axiosMunicipiosRequestResponse) => m.nome
      )

      return dataMunicipios;
    })
    .catch(error => console.error(error))
}
