// import { AppState } from '../AppState'
// import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
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

  async delete(id) {
    await api.delete(`api/keeps/${id}`)
    AppState.keeps.filter(v => v.id !== id)
  }
}

export const keepsService = new KeepsService()
