import { Router, Request, Response } from 'express';

export const router = Router();

// GET
router.get('/mensajes', (request: Request, response: Response) => {
  response.json({
    ok: true,
    mensaje: 'Ok GET'
  });
});

// POST
router.post('/mensajes', (request: Request, response: Response) => {
  const mensaje = request.body.mensaje;
  const usuario = request.body.usuario;

  response.json({
    ok: true,
    mensaje,
    usuario
  });
});
// POST BY ID
router.post('/mensajes/:id', (request: Request, response: Response) => {
  const mensaje = request.body.mensaje;
  const usuario = request.body.usuario;
  const id = request.params.id;

  response.json({
    ok: true,
    mensaje,
    usuario,
    id
  });
});

export default router;
