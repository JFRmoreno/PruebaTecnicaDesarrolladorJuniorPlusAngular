# AngularFrontProduct

Este proyecto es una aplicación Angular para la gestión de productos.

## Estructura del Proyecto

```
AngularFrontProduct/
├── .editorconfig
├── angular.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
├── public/
│   └── favicon.ico
├── src/
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
│   ├── app/
│   │   ├── app.config.ts
│   │   ├── app.css
│   │   ├── app.html
│   │   ├── app.routes.ts
│   │   ├── app.spec.ts
│   │   ├── app.ts
│   │   ├── components/
│   │   │   └── create-product/
│   │   ├── models/
│   │   ├── pages/
│   │   └── services/
│   └── environments/
│       ├── environment.development.ts
│       └── environment.ts
```

## Instalación

1. Clona el repositorio.
2. Instala las dependencias:

   ```sh
   npm install
   ```

## Scripts disponibles

- `npm start` — Inicia el servidor de desarrollo.
- `npm run build` — Compila la aplicación para producción.
- `npm test` — Ejecuta los tests unitarios.

## Configuración de Entornos

Los endpoints de la API se configuran en [src/environments/environment.development.ts](src/environments/environment.development.ts):

```typescript
export const environment = {
  production: false,
  apiGet: 'https://localhost:5001/api/products/list',
  apiDelete: 'https://localhost:5001/api/products/delete',
  apiCreate: 'https://localhost:5001/api/products/create',
  apiUpdate: 'https://localhost:5001/api/products/update'
};
```

## Estructura principal

- **components/**: Componentes reutilizables, por ejemplo, `create-product`.
- **models/**: Modelos de datos.
- **pages/**: Páginas principales de la aplicación.
- **services/**: Servicios para la lógica de negocio y comunicación con la API.



## Requisitos

- Node.js
- Angular CLI

## Licencia

Privado.

---

> Generado
