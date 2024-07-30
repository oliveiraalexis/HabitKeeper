import { MMKVLoader } from 'react-native-mmkv-storage'

export interface StoredToken {
  token: string, 
  userId: string
}

const storage = new MMKVLoader().initialize()
export const storageKey = 'userToken'

export const save = (key: string, value: Object) => {
  storage.setMap(key, value)
}

export const search = (key: string) => {
  const data = storage.getMap(key)
  if (data) return data
  return null
}

export const remove = (key: string) => {
  storage.removeItem(key)
}

export const clear = () => {
  storage.clearStore()
}