import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (_: Request, response: Response) => {
    response.send('Welcome to the Library API.')
});

export default router;