import { AppState } from '../AppState'
// import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class VaultKeepService {
  async getOne(id) {
    const res = await api.get(`api/vaultkeep/${id}`)
    AppState.vaultkeep = res.data
  }

  async create(body) {
    const res = await api.post('api/vaultkeep', body)
    AppState.vaultkeep.push(res.data)
  }

  async delete(id) {
    await api.delete(`api/keeps/${id}`)
  }
}

export const vaultKeepService = new VaultKeepService()
