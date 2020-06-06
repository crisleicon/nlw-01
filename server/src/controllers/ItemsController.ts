import { Request, Response } from 'express'
import knex from '../database/connection'

class ItemsController {
    async index(req: Request, res: Response) {
        const items = await knex('items').select('*')


        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://<your_ip_address>:4444/uploads/${item.image}`
            }
        })
        return res.json(serializedItems)
    }
}
export default ItemsController