import { fetch } from '@/api/index'

//index
export const indexItem = () => fetch('GET','/api/index/')

//list
export const listItem = () => fetch('GET','/api/q/')
