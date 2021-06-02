import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class VaultKeepService {
  async getOne(id) {
    const res = await api.get(`api/vaultkeeps/${id}`)
    AppState.vaultkeep = res.data
  }

  async create(body) {
    const res = await api.post('api/vaultkeeps', body)
    AppState.vaultkeep.push(res.data)
    logger.log(res.data)
  }

  async delete(id) {
    await api.delete(`api/keeps/${id}`)
  }
}

export const vaultKeepService = new VaultKeepService()
