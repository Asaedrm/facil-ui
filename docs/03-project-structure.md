# 03 - Project Structure (Estructura del Proyecto)

## 1. Árbol Completo de Directorios y Archivos

A continuación se detalla la estructura física real del repositorio:

```text
facil-ui/
├── .gitignore                          # Patrones de exclusión de Git
├── .idea/                              # Configuración del IDE JetBrains
│   ├── .gitignore
│   ├── facil-ui.iml
│   ├── modules.xml
│   └── vcs.xml
├── .junie/                             # Planes y registros de sesiones Junie
│   └── plans/
│       └── setup-fumadocs-portal.md
├── apps/                               # Aplicaciones del Monorepo
│   └── docs/                           # Portal Web de Documentación (@facil-ui/docs)
│       ├── .source/                    # Código generado por Fumadocs MDX
│       │   ├── index.ts
│       │   └── source.config.mjs
│       ├── app/                        # Next.js App Router
│       │   ├── [lang]/                 # Segmento dinámico para i18n ('es' | 'en')
│       │   │   ├── docs/
│       │   │   │   ├── [[...slug]]/    # Captura de rutas dinámicas de documentación
│       │   │   │   │   └── page.tsx    # Renderizador de contenido MDX y TOC
│       │   │   │   └── layout.tsx      # Layout de documentación (Sidebar + Navbar)
│       │   │   ├── layout.tsx          # Layout de idioma con configuración i18n
│       │   │   └── page.tsx            # Landing page de bienvenida del portal
│       │   ├── api/
│       │   │   └── search/
│       │   │       └── route.ts        # Endpoint de búsqueda estática de Fumadocs
│       │   ├── global.css              # Estilos globales y Tailwind CSS
│       │   └── layout.tsx              # Root Layout general con Fumadocs RootProvider
│       ├── content/                    # Contenidos fuente en formato MDX
│       │   └── docs/
│       │       ├── angular/            # Documentación específica para Angular
│       │       │   ├── button.en.mdx
│       │       │   ├── button.mdx
│       │       │   ├── index.en.mdx
│       │       │   ├── index.mdx
│       │       │   ├── installation.en.mdx
│       │       │   ├── installation.mdx
│       │       │   ├── meta.en.json
│       │       │   └── meta.json
│       │       ├── react/              # Documentación específica para React
│       │       │   ├── button.en.mdx
│       │       │   ├── button.mdx
│       │       │   ├── index.en.mdx
│       │       │   ├── index.mdx
│       │       │   ├── installation.en.mdx
│       │       │   ├── installation.mdx
│       │       │   ├── meta.en.json
│       │       │   └── meta.json
│       │       ├── meta.en.json        # Metadatos globales de navegación (EN)
│       │       └── meta.json           # Metadatos globales de navegación (ES)
│       ├── lib/                        # Lógica compartida de la aplicación Docs
│       │   ├── i18n.ts                 # Configuración de idiomas soportados (es, en)
│       │   └── source.ts               # Loader de Fumadocs mapeando colecciones MDX
│       ├── middleware.ts               # Middleware de redirección y detección de idioma
│       ├── next-env.d.ts               # Declaraciones de tipos para Next.js
│       ├── next.config.mjs             # Configuración de Next.js + Plugin Fumadocs MDX
│       ├── package.json                # Manifiesto del paquete @facil-ui/docs
│       ├── postcss.config.mjs          # Configuración de PostCSS para Tailwind v4
│       ├── source.config.ts            # Definición de colecciones de Fumadocs
│       └── tsconfig.json               # Configuración TypeScript específica de docs
├── bun.lock                            # Lockfile binario del runtime Bun
├── index.ts                            # Punto de entrada inicial del runtime Bun
├── package.json                        # Manifiesto raíz del monorepo y scripts
├── packages/                           # Paquetes y librerías del Monorepo
│   ├── angular/                        # Paquete @facil-ui/angular
│   │   ├── .storybook/                 # Configuración de Storybook para Angular
│   │   │   ├── main.ts
│   │   │   ├── preview.ts
│   │   │   └── tsconfig.json
│   │   ├── ng-package.json             # Configuración de compilación para ng-packagr
│   │   ├── package.json                # Manifiesto del paquete @facil-ui/angular
│   │   ├── src/                        # Código fuente de Angular
│   │   │   ├── index.ts                # Entrada pública de la librería
│   │   │   └── lib/
│   │   │       └── button/
│   │   │           └── button.component.ts # Componente Button standalone
│   │   ├── stories/                    # Historias interactivas de Storybook
│   │   │   └── button.stories.ts
│   │   └── tsconfig.json               # Configuración TypeScript para Angular
│   ├── contracts/                      # Paquete @facil-ui/contracts
│   │   └── package.json                # Manifiesto de contratos agnósticos
│   ├── react/                          # Paquete @facil-ui/react
│   │   ├── .storybook/                 # Configuración de Storybook para React
│   │   │   ├── main.ts
│   │   │   └── preview.ts
│   │   ├── package.json                # Manifiesto del paquete @facil-ui/react
│   │   ├── rslib.config.ts             # Configuración de compilación con Rslib (Rspack)
│   │   ├── src/                        # Código fuente de React
│   │   │   └── index.tsx               # Implementación y exportación de Button
│   │   ├── stories/                    # Historias interactivas de Storybook
│   │   │   └── Button.stories.tsx
│   │   └── tsconfig.json               # Configuración TypeScript para React
│   ├── tokens/                         # Paquete @facil-ui/tokens
│   │   └── package.json                # Manifiesto de tokens de diseño
│   └── utils/                          # Paquete @facil-ui/utils
│       └── package.json                # Manifiesto de utilidades compartidas
└── tsconfig.json                       # Configuración base compartida de TypeScript
```

---

## 2. Descripción de Módulos y Paquetes

### 1. `apps/docs` (`@facil-ui/docs`)
- **Propósito**: Proveer una interfaz pública para la exploración de guías y documentación de componentes de React y Angular.
- **Mecanismo de entrega**: Servidor Next.js optimizado para generación estática (SSG) de páginas a partir de archivos MDX indexados en tiempo de compilación.

### 2. `packages/react` (`@facil-ui/react`)
- **Propósito**: Suministrar componentes compatibles con React 19+.
- **Mecanismo de entrega**: Compilación a módulo ES2022 (`dist/index.js`) con archivos de declaración (`dist/index.d.ts`) usando Rslib.

### 3. `packages/angular` (`@facil-ui/angular`)
- **Propósito**: Suministrar componentes standalone para Angular 22+.
- **Mecanismo de entrega**: Compilación a Angular Package Format (APF) usando `ng-packagr`.

### 4. `packages/contracts`, `packages/tokens`, `packages/utils`
- **Propósito**: Capas compartidas que definen tipos unificados, tokens de estilo y utilidades reutilizables.
- **Estado Actual Comprobado**: Módulos estructuralmente inicializados en `package.json` pero pendientes de poblar su código fuente (`src/index.ts`).

---

## 3. Convenciones de Organización y Nombrado

- **Monorepo Workspaces**: Estructura `packages/*` para librerías consumibles y `apps/*` para aplicaciones desplegables.
- **Internacionalización Simétrica**: En `apps/docs/content/docs`, los archivos en español conservan el nombre base (`button.mdx`, `meta.json`) mientras que la versión en inglés añade el sufijo de idioma (`button.en.mdx`, `meta.en.json`).
- **Aislamiento de Historias**: Las historias de Storybook se ubican en una carpeta dedicada `stories/` dentro de cada paquete en lugar de mezclarse con el código fuente en `src/`.
- **Componentes React vs. Angular**: En React se utiliza extensión `.tsx` con funciones de componente; en Angular se utiliza extensión `.component.ts` con clases decoradas con `@Component`.
