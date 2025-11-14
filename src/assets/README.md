# Estructura de Assets

Esta carpeta contiene todos los recursos estáticos procesados por Vite utilizados en la página web de Rumbo.

## Organización de carpetas

```
src/assets/
├── images/
│   ├── logos/          # Logotipos de la marca
│   │   └── rumbo_logo.png
│   └── illustrations/  # Ilustraciones y mascotas
│       └── llamasinfondof.png
├── icons/              # Iconos e íconos de la aplicación
├── fonts/              # Fuentes personalizadas
└── README.md
```

## Diferencia entre src/assets/ y public/

**src/assets/** (USAR ESTO):
- Archivos procesados y optimizados por Vite durante el build
- Se importan en componentes: `import logo from '@/assets/images/logos/rumbo_logo.png'`
- Obtienen hash en el nombre para cache-busting automático
- Se optimizan y comprimen automáticamente

**public/**:
- Solo para archivos que necesitan URL exacta (robots.txt, manifest.json, etc.)
- No se procesan ni optimizan
- Se copian tal cual al build

## Guía de uso

### Imágenes

**Logos:**
- `rumbo_logo.png` - Logo principal de Rumbo
- Ubicación: `/images/logos/`
- Uso: Header, páginas de login, componentes de marca

**Ilustraciones:**
- `llamasinfondof.png` - Mascota de Rumbo (llama sin fondo)
- Ubicación: `/images/illustrations/`
- Uso: Página principal, secciones hero

### Iconos
- Coloca aquí favicons, app icons y otros iconos de la interfaz

### Fuentes
- Coloca aquí cualquier fuente personalizada que no esté disponible en Google Fonts

## Convenciones de nomenclatura

- Usar snake_case para nombres de archivo: `rumbo_logo.png`
- Nombres descriptivos y en inglés cuando sea posible
- Incluir el propósito si es necesario: `hero_background.jpg`
- Optimizar imágenes antes de subirlas (usar herramientas como TinyPNG)

## Formatos recomendados

- **Logos:** PNG con transparencia, SVG cuando sea posible
- **Ilustraciones:** PNG, WebP para mejor compresión
- **Íconos:** SVG preferiblemente, PNG como alternativa
- **Fotos:** JPG para fotografías, WebP para web moderna

## Tamaños recomendados

- Logo: máx. 500KB
- Ilustraciones: máx. 1MB
- Íconos: máx. 100KB
- Optimizar para web manteniendo calidad visual
