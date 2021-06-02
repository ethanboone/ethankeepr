// import { AppState } from '../AppState'
// import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class KeepsService {
  async getAll() {
    const res = await api.get('api/keeps')
    AppState.keeps = res.data
  }

  async getOne(id) {
    const res = await api.get(`api/keeps/${id}`)
    AppState.activeKeep = res.data
  }

  async create(body) {
    await api.post('api/keeps', body)
    this.getAll()
  }

  async update(id, body) {
    const res = await api.put(`api/keeps/${id}`, body)
    AppState.keeps.push(res.data)
  }

  async userEdit(id, body) {
    const res = await api.put(`api/keeps/${id}/edit`, body)
    this.getAll()
    logger.log(res.data)
  }

  async delete(id) {
    const res = await api.delete(`api/keeps/${id}`)
    this.getAll()
    return res.data
  }

  async getKeepsByVaultId(id) {
    const res = await api.get(`api/vaults/${id}/keeps`)
    AppState.vaultKeeps = res.data
  }
}

export const keepsService = new KeepsService()
