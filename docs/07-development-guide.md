# 07 - Development Guide (Guía de Desarrollo)

## 1. Requisitos Previos

Para maximizar la productividad y garantizar la reproducibilidad del entorno de desarrollo, asegúrese de contar con las siguientes herramientas instaladas:

- **Bun Runtime**: Versión `>= 1.1.0` (recomendado `v1.4.4`).
- **Node.js** (Opcional/Fallback para compatibilidad con tooling): `>= 20.0.0`.
- **Git**: `>= 2.30.0`.
- **Editor recomendado**: VS Code (con extensiones de Tailwind CSS, MDX y Angular Language Service) o JetBrains WebStorm / IntelliJ IDEA.

---

## 2. Instalación y Configuración Local

1. **Clonar el repositorio**:
   ```bash
   git clone <url-del-repositorio>
   cd facil-ui
   ```

2. **Instalar dependencias del workspace con Bun**:
   ```bash
   bun install
   ```
   *Nota*: Bun resolverá automáticamente todos los paquetes locales referenciados como `workspace:*` (`@facil-ui/contracts`, `@facil-ui/tokens`, `@facil-ui/utils`).

---

## 3. Variables de Entorno

- **Estado Actual**: El proyecto no requiere archivos `.env` obligatorios para su funcionamiento en desarrollo local ni contiene credenciales acopladas.
- **Portal de Documentación**: La aplicación `apps/docs` corre completamente con configuraciones estáticas predeterminadas.

---

## 4. Comandos de Ciclo de Vida del Proyecto

Los siguientes comandos están definidos en el `package.json` raíz y en los paquetes individuales:

| Comando | Acción | Ámbito |
| :--- | :--- | :--- |
| `bun run typecheck` | Ejecuta la comprobación estática de tipos con `bun check`. | Global |
| `bun run build:react` | Compila `@facil-ui/react` generando `dist/index.js` y `dist/index.d.ts` mediante Rslib. | Paquete React |
| `bun run build:angular` | Ejecuta la compilación con `ng-packagr` para generar el bundle APF en `dist/`. | Paquete Angular |
| `bun run build` | Compila secuencialmente React y Angular (`build:react && build:angular`). | Global |
| `bun run storybook:react` | Inicia el entorno interactivo de Storybook para React en el puerto `6006`. | Paquete React |
| `bun run storybook:angular` | Inicia el entorno interactivo de Storybook para Angular en el puerto `6007`. | Paquete Angular |
| `bun run docs:dev` | Inicia el servidor de desarrollo de Next.js para el portal en `http://localhost:3000`. | Aplicación Docs |
| `bun run docs:build` | Genera el build optimizado de producción de Next.js / Fumadocs. | Aplicación Docs |

---

## 5. Guía de Ejecución Paso a Paso

### 5.1 Iniciar el Portal de Documentación
```bash
bun run docs:dev
```
Abra [http://localhost:3000](http://localhost:3000) en su navegador. La aplicación cargará con detección de idioma (`/es` o `/en`).

### 5.2 Iniciar Storybook React
```bash
bun run storybook:react
```
Abra [http://localhost:6006](http://localhost:6006) para explorar e interactuar con el componente `Button` de React.

### 5.3 Iniciar Storybook Angular
```bash
bun run storybook:angular
```
Abra [http://localhost:6007](http://localhost:6007) para explorar e interactuar con el componente `ButtonComponent` de Angular.

---

## 6. Depuración y Resolución de Problemas

1. **Error de resolución de módulos en `bun check`**:
   - *Causa*: `apps/docs` genera archivos de tipos dinámicos en `.source/index.ts` durante la compilación de Fumadocs MDX.
   - *Solución*: Ejecutar `bun run docs:build` previo a la verificación estricta de tipos.
2. **Error de compilación en `build:angular`**:
   - *Causa*: `ng-packagr` requiere que las dependencias distribuidas como `@angular/platform-browser` se listen en `peerDependencies` o se autoricen en `allowedNonPeerDependencies` dentro de `ng-package.json`.
3. **Limpieza de Caché**:
   - En caso de inconsistencias en dependencias del workspace, ejecute:
     ```bash
     rm -rf node_modules apps/docs/.next apps/docs/.source dist packages/*/dist
     bun install
     ```
