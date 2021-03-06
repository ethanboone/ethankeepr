import { AppState } from '../AppState'
// import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class VaultsService {
  async getAll() {
    const res = await api.get('api/vaults')
    AppState.vaults = res.data
  }

  async getOne(id) {
    const res = await api.get(`api/vaults/${id}`)
    AppState.activeVault = res.data
  }

  async create(body) {
    const res = await api.post('api/vaults', body)
    AppState.vaults.push(res.data)
  }

  async update(id, body) {
    const res = await api.put(`api/vaults/${id}`, body)
    AppState.vaults.push(res.data)
  }

  async delete(id) {
    await api.delete(`api/vaults/${id}`)
    AppState.vaults.filter(v => v.id !== id)
  }

  async getMyVaults(profile) {
    const res = await api.get(`api/profiles/${profile}/vaults`)
    AppState.myVaults = res.data
  }
}

export const vaultsService = new VaultsService()
