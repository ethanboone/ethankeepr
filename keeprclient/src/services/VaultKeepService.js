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
    await api.delete(`api/vaultkeeps/${id}`)
  }

  async getVaultKeepByVaultAndKeepId(vaultId, keepId) {
    return await api.get(`api/vaultkeeps/${vaultId}/keeps/${keepId}`)
  }
}

export const vaultKeepService = new VaultKeepService()
