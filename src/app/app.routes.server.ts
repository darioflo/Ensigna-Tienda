import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'productDetails/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // Devuelve una lista de parámetros para prerenderizar
      const productIds = ['1', '2', '3', '4', '5']; // Lista de IDs de productos
      return productIds.map((id) => ({ id }));
    },
  },
  {
    path: 'clientDetails/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // Devuelve una lista de parámetros para prerenderizar
      const productIds = ['1', '2', '3', '4', '5']; // Lista de IDs de productos
      return productIds.map((id) => ({ id }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
