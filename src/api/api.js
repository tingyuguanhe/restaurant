import { fetch } from '@/api/index'

//index
export const indexItem = () => fetch('GET','/api/index/')

//list
export const listItem = (param) => fetch('GET',`/api/q//?type_id=${param.id}`)
