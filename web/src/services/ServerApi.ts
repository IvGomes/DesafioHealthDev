import axios from 'axios'
import md5 from 'md5'
import { toast } from 'react-toastify'

const axiosServerApi = axios.create({
  baseURL: 'http://localhost:3000',
})

export const login = async (username: string, password: string) => {
  const hashPassword = md5(password)

  return axiosServerApi
    .post('/login', {
      username: username,
      password: hashPassword,
    })
    .then((response) => response.data)
    .then((data) => {
      if (data.token) {
        const stringfiedData = JSON.stringify(data)
        sessionStorage.setItem('datalogin', stringfiedData)

        return data as DataResponseAuthUser
      }

      toast.warning(
        'Servidor não retornou os dados do usuário... Entre em contato com um administrador.',
      )
    })
    .catch((error) => {
      const { message } = error.response.data
      toast.error(message)
    })
}

export const registerUser = async (username: string, password: string) => {
  const hashPassword = md5(password)

  return axiosServerApi
    .post('/users', {
      username: username,
      password: hashPassword,
    })
    .then((response) => response.data)
    .then((data) => {
      return data
    })
    .catch((error) => {
      const { message } = error.response.data
      toast.error(message)
    })
}

export const readUserGeneralData = async (authToken: string) => {
  const headerAuthConfig = { headers: { Authorization: `Bearer ${authToken}` } }
  console.log('ReadOnLogin', headerAuthConfig)

  return axiosServerApi
    .get('/generaldata', headerAuthConfig)
    .then((response) => response.data)
    .catch((error) => console.error(error))
}

export const updateUserData = async (
  authToken: string,
  endPoint: string,
  dataState: any,
) => {
  const headerAuthConfig = { headers: { Authorization: `Bearer ${authToken}` } }

  console.log('PUT', headerAuthConfig)

  axiosServerApi.put(endPoint, dataState, headerAuthConfig)
    .then( response => response.data)
    .then( response => toast.success("Informações salvas com sucesso") )
    .catch((error) => {
      toast.error("Não foi possível salvar as alterações...")
      toast.warning("A sessão parece ter expirado... Por favor, faça login novamente!")
    })
}
