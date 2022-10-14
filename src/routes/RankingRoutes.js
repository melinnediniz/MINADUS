import {Router} from 'express'
import { fetchAll } from '../controllers/RankingController.js'

const RankingRoutes = Router()
const path = '/rankings'
RankingRoutes.get(path, fetchAll)
export {RankingRoutes}