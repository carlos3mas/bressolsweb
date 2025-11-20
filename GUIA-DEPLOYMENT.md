# 🚀 Guía de Deployment - C.E.I. Bressols

## ✅ Pre-requisitos Completados

- ✅ Build de producción exitoso
- ✅ Tests de compilación pasados
- ✅ Browserslist actualizado
- ✅ Headers de seguridad configurados
- ✅ SEO optimizado
- ✅ Meta tags para redes sociales
- ✅ robots.txt y sitemap.xml creados

---

## 📦 OPCIÓN 1: Deploy en Vercel (Recomendado)

Vercel es la plataforma creada por el equipo de Next.js y ofrece la mejor integración.

### Paso 1: Crear cuenta en Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Regístrate con GitHub, GitLab o email

### Paso 2: Conectar repositorio
1. Haz clic en "Add New Project"
2. Importa tu repositorio de GitHub
3. Vercel detectará automáticamente que es un proyecto Next.js

### Paso 3: Configurar proyecto
```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

### Paso 4: Variables de entorno
**No hay variables de entorno necesarias actualmente**

### Paso 5: Deploy
1. Haz clic en "Deploy"
2. Espera 2-3 minutos
3. ¡Tu sitio estará en línea!

### Dominio personalizado (Opcional)
1. Ve a Settings > Domains
2. Añade tu dominio personalizado
3. Configura los DNS según las instrucciones de Vercel

---

## 📦 OPCIÓN 2: Deploy en Netlify

### Paso 1: Crear cuenta en Netlify
1. Ve a [netlify.com](https://netlify.com)
2. Regístrate con GitHub o email

### Paso 2: Nuevo sitio
1. Click en "Add new site" > "Import an existing project"
2. Conecta tu repositorio

### Paso 3: Configuración de build
```
Build command: npm run build
Publish directory: .next
```

### Paso 4: Instalar Next.js Runtime Plugin
1. Ve a Plugins
2. Busca "Essential Next.js"
3. Instálalo

### Paso 5: Deploy
1. Click en "Deploy site"
2. Espera 2-3 minutos

---

## 📦 OPCIÓN 3: Deploy Manual (VPS/Servidor propio)

### Requisitos
- Node.js 18.x o superior
- npm o yarn
- PM2 (para mantener la app corriendo)

### Pasos

1. **Subir código al servidor**
```bash
git clone tu-repositorio
cd bressolsweb
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Build de producción**
```bash
npm run build
```

4. **Instalar PM2**
```bash
npm install -g pm2
```

5. **Iniciar aplicación**
```bash
pm2 start npm --name "bressols-web" -- start
pm2 save
pm2 startup
```

6. **Configurar Nginx (Opcional)**
```nginx
server {
    listen 80;
    server_name tudominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

7. **SSL con Let's Encrypt**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d tudominio.com
```

---

## 🔍 Post-Deployment Checklist

Después de hacer el deployment, verifica:

### Funcionalidad
- [ ] La página principal carga correctamente
- [ ] Navegación entre secciones funciona (smooth scroll)
- [ ] Todas las imágenes se cargan correctamente
- [ ] Carruseles de imágenes funcionan (autoplay y controles)
- [ ] Links a redes sociales funcionan:
  - Facebook: https://www.facebook.com/ceibressols/
  - Instagram: https://www.instagram.com/ceibressols/
- [ ] Mapa de Google se visualiza correctamente
- [ ] Números de teléfono son clickeables (tel:)
- [ ] Email es clickeable (mailto:)

### Responsive
- [ ] Se ve bien en móvil (< 640px)
- [ ] Se ve bien en tablet (640px - 1024px)
- [ ] Se ve bien en desktop (> 1024px)

### Performance
- [ ] La página carga en menos de 3 segundos
- [ ] Las imágenes están optimizadas
- [ ] No hay errores en la consola del navegador

### SEO
- [ ] El título aparece correctamente en la pestaña
- [ ] La descripción aparece en Google (puede tardar días)
- [ ] El logo aparece cuando compartes en redes sociales
- [ ] robots.txt es accesible: `tudominio.com/robots.txt`
- [ ] sitemap.xml es accesible: `tudominio.com/sitemap.xml`

---

## 📊 Herramientas de Testing

### 1. Google PageSpeed Insights
- URL: https://pagespeed.web.dev/
- Revisa velocidad y optimización
- **Objetivo:** Score > 90

### 2. GTmetrix
- URL: https://gtmetrix.com/
- Análisis detallado de performance
- **Objetivo:** Grade A

### 3. Mobile-Friendly Test
- URL: https://search.google.com/test/mobile-friendly
- Verifica compatibilidad móvil

### 4. SSL Labs
- URL: https://www.ssllabs.com/ssltest/
- Verifica configuración SSL
- **Objetivo:** A+ rating

---

## 🔧 Actualizaciones Futuras

### Para hacer cambios después del deployment:

1. Haz los cambios en tu código local
2. Commit y push a GitHub:
```bash
git add .
git commit -m "Descripción del cambio"
git push origin main
```
3. **Vercel/Netlify desplegará automáticamente** los cambios

---

## 🆘 Solución de Problemas

### Error: Imágenes no cargan
- Verifica que los nombres de archivo sean exactos (mayúsculas/minúsculas)
- Asegúrate de que las imágenes están en `/public`

### Error: 404 en rutas
- Next.js maneja rutas automáticamente
- Verifica que no haya configuración de rutas custom

### Error: Build falla
```bash
# Limpia cache y reinstala
rm -rf .next node_modules
npm install
npm run build
```

### Problemas de SSL
- Si usas Vercel/Netlify, el SSL es automático
- Si usas servidor propio, usa Certbot

---

## 📞 Información de Contacto del Sitio

- **Teléfono:** 964 604 202
- **Email:** bressols7@hotmail.com
- **Dirección:** Av. del Mar, 29 (MonteBlanco), 12200 Onda, Castelló
- **Facebook:** https://www.facebook.com/ceibressols/
- **Instagram:** https://www.instagram.com/ceibressols/

---

## 🎉 ¡Listo para Producción!

Tu sitio web está completamente preparado para ser desplegado. Todos los aspectos de seguridad, rendimiento y SEO han sido optimizados.

**Recomendación:** Usa Vercel para deployment más simple y automático.

### Próximo paso:
1. Sube tu código a GitHub (si no lo has hecho)
2. Conecta con Vercel
3. ¡Deploy en 2 minutos!

---

*Guía creada el 20/01/2025*

