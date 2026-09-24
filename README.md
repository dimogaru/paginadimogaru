# Dimugaru

Landing page estática de Dimugaru, construida con HTML, CSS y JavaScript nativos. No necesita Node.js ni instalar dependencias.

## Desarrollo local

Abre `index.html` directamente o sirve la carpeta con cualquier servidor estático, por ejemplo:

```sh
python3 -m http.server 5000
```

## Configuración antes de publicar

Edita `site-config.js` y sustituye los valores de `offbunkerWebUrl` y `contactUrl` por las direcciones definitivas. Los enlaces de aviso legal y privacidad del footer también son marcadores; cambia sus `href` en `index.html` cuando estén disponibles.

Actualiza el correo de contacto si `hola@dimugaru.es` no es la dirección adecuada. Los dominios de los juegos y los metadatos SEO están en `index.html`.

## Despliegue en Coolify

1. Sube el repositorio a Git.
2. En Coolify, crea un recurso de aplicación desde el repositorio y selecciona **Dockerfile** como método de construcción.
3. Usa el `Dockerfile` incluido. Nginx sirve el sitio en el puerto `80`; configura ese puerto como puerto de destino.
4. Añade el dominio y activa HTTPS desde Coolify.

El contenedor se basa en `nginx:alpine`, publica solamente los archivos del sitio y comprueba la disponibilidad de Nginx mediante un health check. `nginx.conf` configura gzip, caché estática y cabeceras básicas.

## Estructura

- `index.html`: contenido semántico, metadatos SEO y datos estructurados.
- `styles.css`: estilos responsive y gráficos CSS.
- `script.js`: menú móvil, enlaces configurables y año del footer.
- `site-config.js`: URLs de OffBunker y contacto.
- `Dockerfile` / `nginx.conf`: servidor estático para Coolify.