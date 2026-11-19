# 06 - API & Integration Reference (Referencia de API e Integraciones)

## 1. Referencia de APIs HTTP / Endpoints

El repositorio expone un único endpoint de API HTTP a través de la aplicación Next.js (`apps/docs`), correspondiente al motor de búsqueda de documentación de Fumadocs.

### 1.1 Endpoint de Búsqueda (`/api/search`)

- **Ruta**: `GET /api/search`
- **Archivo Fuente**: `apps/docs/app/api/search/route.ts`
- **Implementación**: Generado mediante `createFromSource(source)` de `fumadocs-core/search/server`.
- **Autenticación**: Pública (Sin autenticación).

#### Parámetros de Consulta (Query Parameters)
| Parámetro | Tipo | Requerido | Descripción |
| :--- | :--- | :--- | :--- |
| `query` | `string` | No | Cadena de texto a buscar dentro de los títulos, descripciones y contenido de los documentos MDX. |
| `lang` | `string` | No | Código de idioma para filtrar resultados (`es` o `en`). |

#### Respuestas HTTP
| Código | Formato | Descripción |
| :--- | :--- | :--- |
| `200 OK` | `application/json` | Retorna un arreglo de resultados con enlaces, títulos y fragmentos resaltados. |
| `500 Internal Server Error` | `application/json` | Error inesperado al procesar el índice estático de búsqueda. |

#### Ejemplo de Respuesta (`200 OK`)
```json
[
  {
    "id": "react/button",
    "title": "Button (React)",
    "description": "Componente de botón accesible con soporte para múltiples variantes y tamaños.",
    "url": "/es/docs/react/button",
    "content": "El componente Button permite a los usuarios interactuar y desencadenar acciones..."
  }
]
```

---

## 2. Referencia de API de Componentes (Contratos TypeScript)

### 2.1 `@facil-ui/react`

#### `<Button />`
```tsx
import { Button, type ButtonProps } from '@facil-ui/react';
```

##### Props
| Propiedad | Tipo | Valor por Defecto | Obligatorio | Descripción |
| :--- | :--- | :--- | :--- | :--- |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | No | Define la variante visual inyectada en `data-variant`. |
| `children` | `React.ReactNode` | `undefined` | No | Elementos o texto a renderizar dentro del botón. |
| `...props` | `ButtonHTMLAttributes<HTMLButtonElement>` | — | No | Soporta todas las propiedades estándar del elemento `<button>` HTML. |

---

### 2.2 `@facil-ui/angular`

#### `<facil-button>`
```typescript
import { ButtonComponent } from '@facil-ui/angular/src/lib/button/button.component';
```

##### Inputs
| Input / Signal | Tipo | Valor por Defecto | Obligatorio | Descripción |
| :--- | :--- | :--- | :--- | :--- |
| `[variant]` | `'primary' \| 'secondary'` | `'primary'` | No | Define la variante inyectada en `[attr.data-variant]`. |
| `[disabled]` | `boolean` | `false` | No | Controla el estado deshabilitado del botón nativo interno. |

##### Proyección de Contenido
| Slot | Selector | Descripción |
| :--- | :--- | :--- |
| Default | `<ng-content />` | Proyecta el texto o nodos hijos en el cuerpo del botón. |

---

## 3. Integraciones Externas

| Integración | Tipo | Propósito | Protocolo / Transporte |
| :--- | :--- | :--- | :--- |
| **Storybook React** | Herramienta local | Catálogo interactivo de componentes React | HTTP (`http://localhost:6006`) |
| **Storybook Angular** | Herramienta local | Catálogo interactivo de componentes Angular | HTTP (`http://localhost:6007`) |
| **Fumadocs Search Engine** | Motor de búsqueda | Indexación de texto plano en memoria / estático | Llamada HTTP interna `GET /api/search` |
| **CDNs / Registros NPM** | Distribución externa | Publicación futura de paquetes `@facil-ui/*` | Registro NPM (HTTPS) |
