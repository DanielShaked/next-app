import { z } from 'zod'

const schema = z.object({
    name: z.string().min(3),
    price: z.number()
    // email: z.string().email(),
})

export default schema