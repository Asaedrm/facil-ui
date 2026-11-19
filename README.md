# Fácil UI (`facil-ui`)

> Monorepo de componentes de interfaz de usuario agnósticos para **React 19+** y **Angular 22+**, integrado con portal de documentación bilingüe en **Next.js / Fumadocs** y catálogos visuales en **Storybook**.

---

## 📌 Descripción y Objetivo del Proyecto

`facil-ui` es una solución empresarial de diseño de interfaz de usuario concebida para maximizar la reutilización y consistencia de componentes en arquitecturas frontend heterogéneas. Su objetivo central es desacoplar los contratos y tokens de diseño de los frameworks receptores, permitiendo a los desarrolladores consumir componentes idénticos y accesibles tanto en aplicaciones React como en Angular.

---

## 🚀 Características Principales Comprobadas

- ⚡ **Arquitectura Monorepo Eficiente**: Gestionado mediante workspaces nativos de [Bun](https://bun.sh) (`packages/*`, `apps/*`).
- ⚛️ **Adaptador React Moderno**: `@facil-ui/react` empaquetado como módulo ESM ultraoptimizado mediante [Rslib](https://lib.rsbuild.dev/).
- 🅰️ **Adaptador Angular Standalone**: `@facil-ui/angular` basado en Angular Signals (`input()`) y empaquetado con [ng-packagr](https://github.com/ng-packagr/ng-packagr).
- 📚 **Portal de Documentación Bilingüe**: `@facil-ui/docs` impulsado por Next.js 15 App Router y Fumadocs MDX con soporte para Español e Inglés y búsqueda integrada en `/api/search`.
- 🎨 **Entornos Aislados en Storybook**: Historias interactivas dedicadas para React (puerto 6006) y Angular (puerto 6007).
- 🧩 **Contratos de Datos Agnósticos**: Estructura de paquetes base (`@facil-ui/contracts`, `@facil-ui/tokens`, `@facil-ui/utils`) para unificar la semántica visual y funcional.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología | Versión |
| :--- | :--- | :--- |
| **Runtime & Gestor de Paquetes** | [Bun](https://bun.sh) | `1.4.4` |
| **Lenguaje** | [TypeScript](https://www.typescriptlang.org/) | `~6.0.0` / `5.x` |
| **Frameworks UI** | React / Angular | `19.3.1` / `22.2.6` |
| **Documentación** | Next.js + Fumadocs MDX | `15.0.0` / `15.0.0` |
| **Empaquetadores de Librerías** | Rslib (Rust/Rspack) / ng-packagr | `1.0.7` / `22.2.6` |
| **Catálogo Visual** | Storybook (Vite runners) | `10.6.0` |

---

## 🏗️ Arquitectura Resumida

```text
facil-ui/
├── apps/
│   └── docs/            # Portal web Next.js + Fumadocs MDX (i18n: /es, /en)
├── packages/
│   ├── react/           # Componentes UI nativos para React 19+
│   ├── angular/         # Componentes UI standalone para Angular 22+
│   ├── contracts/       # Interfaces y contratos de tipos agnósticos
│   ├── tokens/          # Tokens de diseño compartidos
│   └── utils/           # Utilidades compartidas
└── docs/                # Documentación técnica y auditoría arquitectónica
```

---

## ⚙️ Requisitos Previos

- **Bun**: `>= 1.1.0` (recomendado `1.4.4`)
- **Node.js** (opcional, para tooling): `>= 20.0.0`
- **Git**: `>= 2.30.0`

---

## 📦 Instalación

Instale todas las dependencias del workspace con Bun:

```bash
bun install
```

---

## 💻 Comandos de Ejecución y Desarrollo

### Iniciar Portal de Documentación
```bash
bun run docs:dev
```
Disponible en: `http://localhost:3000`

### Iniciar Storybook Interactivo
- **Storybook React (Puerto 6006)**:
  ```bash
  bun run storybook:react
  ```
- **Storybook Angular (Puerto 6007)**:
  ```bash
  bun run storybook:angular
  ```

### Compilar Paquetes y Aplicaciones
- **Compilar librería React**: `bun run build:react`
- **Compilar librería Angular**: `bun run build:angular`
- **Compilar todo el workspace**: `bun run build`
- **Compilar producción de Docs**: `bun run docs:build`

---

## 🧪 Testing y Calidad

- **Verificación de Tipos Estáticos**:
  ```bash
  bun check
  ```
- **Auditoría de Componentes**: Pruebas visuales interactivas mediante las historias de Storybook en `packages/react/stories` y `packages/angular/stories`.

---

## 📖 Índice de Documentación Técnica (`/docs`)

Para una revisión detallada de la arquitectura, decisiones de diseño y análisis de deuda técnica, consulte los documentos en `/docs`:

1. [01 - Architecture Overview](docs/01-architecture-overview.md)
2. [02 - Technical Stack](docs/02-technical-stack.md)
3. [03 - Project Structure](docs/03-project-structure.md)
4. [04 - Modules & Components](docs/04-modules-and-components.md)
5. [05 - Data Architecture](docs/05-data-architecture.md)
6. [06 - API & Integration Reference](docs/06-api-and-integration-reference.md)
7. [07 - Development Guide](docs/07-development-guide.md)
8. [08 - Testing Strategy](docs/08-testing-strategy.md)
9. [09 - Deployment & DevOps](docs/09-deployment-and-devops.md)
10. [10 - Security Review](docs/10-security-review.md)
11. [11 - Technical Debt & Recommendations](docs/11-technical-debt-and-recommendations.md)

---

## 📄 Licencia

Licencia no especificada en el archivo `package.json` raíz (Uso interno / Privado).
