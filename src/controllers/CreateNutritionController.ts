import {
  FastifyRequest,
  FastifyReply
} from 'fastify'
import { createNutritionService } from '../services/CreateNutritionServices'


export interface Dataprops {
  name: string,
  weight: string,
  height: string,
  age: string,
  gender: string,
  objective: string,
  level: string,
}

class CreateNutritioncontroller {
  async handle(req: FastifyRequest, res: FastifyReply) {
    const { name, weight, height, age, objective, level, gender } = req.body as Dataprops

    const create = new createNutritionService();
    const nutrition = await create.execute({
      name, weight, height, age, objective, level, gender
    });
    res.send(nutrition);
  }
}

export { CreateNutritioncontroller } 