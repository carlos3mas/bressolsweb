# 📊 Configuración de Herramientas de Google

## Guía Completa para C.E.I. Bressols

---

## 🎯 ¿Qué hemos integrado?

✅ **Google Analytics 4 (GA4)** - Para analizar el tráfico de tu web
✅ **Preparación para Google Search Console** - Para SEO y búsquedas

---

## 📊 PARTE 1: Google Analytics 4 (GA4)

### ¿Para qué sirve?
- Ver cuántas personas visitan tu web
- Saber de dónde vienen (Google, redes sociales, etc.)
- Qué páginas visitan más
- Cuánto tiempo pasan en tu sitio
- Si usan móvil, tablet o computadora

---

### 🔧 PASO 1: Crear cuenta de Google Analytics

1. **Ve a Google Analytics**
   - URL: https://analytics.google.com/
   - Inicia sesión con tu cuenta de Google

2. **Crear una propiedad**
   - Click en "Administrar" (icono de engranaje abajo a la izquierda)
   - Click en "Crear propiedad"

3. **Configurar la propiedad**
   ```
   Nombre de la propiedad: C.E.I. Bressols
   Zona horaria: España (GMT+1)
   Moneda: EUR - Euro (€)
   ```
   - Click en "Siguiente"

4. **Información de tu negocio**
   ```
   Sector: Educación
   Tamaño de la empresa: Pequeña (1-10 empleados)
   ```
   - Marca las opciones que quieras
   - Click en "Crear"

5. **Acepta los términos de servicio**
   - Lee y acepta los términos
   - Click en "Acepto"

6. **Configurar plataforma**
   - Selecciona "Web"
   - Click en "Siguiente"

7. **Configurar flujo de datos**
   ```
   URL del sitio web: https://tudominio.com (usa el que te dé Vercel temporalmente)
   Nombre del flujo: Web
   ```
   - Click en "Crear flujo"

8. **¡IMPORTANTE! Copia tu Measurement ID**
   - Verás un ID como: **G-XXXXXXXXXX**
   - **CÓPIALO - lo necesitarás en el siguiente paso**

---

### 🔑 PASO 2: Configurar el Measurement ID

#### Si vas a hacer deploy en Vercel:

1. **Ve a tu proyecto en Vercel**
   - URL: https://vercel.com/dashboard

2. **Abre tu proyecto** > **Settings** > **Environment Variables**

3. **Añade la variable:**
   ```
   Name: NEXT_PUBLIC_GA_MEASUREMENT_ID
   Value: G-XXXXXXXXXX (tu ID real)
   Environment: Production, Preview, Development (marca las 3)
   ```

4. **Guarda** y haz un **nuevo deploy** para que aplique

---

#### Si vas a hacer deploy en Netlify:

1. **Ve a tu sitio en Netlify**
   - URL: https://app.netlify.com/

2. **Site settings** > **Environment variables**

3. **Añade nueva variable:**
   ```
   Key: NEXT_PUBLIC_GA_MEASUREMENT_ID
   Value: G-XXXXXXXXXX (tu ID real)
   Scopes: All (marca todos)
   ```

4. **Guarda** y haz un **nuevo deploy**

---

#### Para desarrollo local (opcional):

1. **Crea un archivo** `.env.local` en la raíz del proyecto:
   ```bash
   # En la raíz de bressolsweb
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

2. **IMPORTANTE:** Este archivo NO se subirá a Git (está en .gitignore)

3. **Reinicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

---

### ✅ PASO 3: Verificar que funciona

1. **Después del deploy**, visita tu sitio web

2. **Abre Google Analytics**
   - Ve a "Informes" > "Tiempo real"

3. **Abre tu web en otra pestaña**
   - Navega por las diferentes secciones

4. **Deberías ver tu visita en tiempo real** 🎉

**Nota:** Si no funciona inmediatamente:
- Espera 5-10 minutos
- Asegúrate de que el Measurement ID esté correcto
- Verifica que hiciste redeploy después de añadir la variable

---

### 📈 PASO 4: Explorar Google Analytics

Después de unos días, podrás ver:

**Informes útiles:**
- **Adquisición** → De dónde vienen los visitantes
- **Participación** → Qué páginas visitan más
- **Datos demográficos** → Edad, ubicación, etc.
- **Tecnología** → Móvil vs Desktop
- **Tiempo real** → Visitantes actuales

**KPIs importantes para tu guardería:**
- Número de visitas
- Tiempo en la página
- Tasa de rebote (si salen rápido)
- Páginas más visitadas
- Clicks en teléfono/email (si configuramos eventos)

---

## 🔍 PARTE 2: Google Search Console

### ¿Para qué sirve?
- Ver en qué posición apareces en Google
- Qué palabras buscan para encontrarte
- Problemas de indexación
- Mejoras de SEO
- Solicitar indexación rápida

---

### 🔧 PASO 1: Registrar tu sitio

1. **Ve a Google Search Console**
   - URL: https://search.google.com/search-console/

2. **Añadir propiedad**
   - Click en "Añadir propiedad"
   - Selecciona "Prefijo de URL"
   - Introduce: `https://tudominio.com`

3. **Verificar propiedad**

   **Si usas Vercel (más fácil):**
   - Vercel automáticamente añade las meta tags necesarias
   - O usa el método de "Etiqueta HTML"

   **Método de etiqueta HTML:**
   - Google te dará un código como:
     ```html
     <meta name="google-site-verification" content="tu-codigo-aqui" />
     ```
   - Añádelo en `pages/index.tsx` dentro del `<Head>`

4. **Click en "Verificar"**

---

### 📋 PASO 2: Enviar el sitemap

1. **En Search Console**, ve a "Sitemaps" (menú izquierda)

2. **Añade la URL del sitemap:**
   ```
   https://tudominio.com/sitemap.xml
   ```

3. **Click en "Enviar"**

4. **Espera 24-48 horas** para que Google indexe tu sitio

---

### 🚀 PASO 3: Solicitar indexación

1. **En Search Console**, usa la barra de búsqueda arriba

2. **Introduce tu URL:**
   ```
   https://tudominio.com
   ```

3. **Click en "Solicitar indexación"**

4. **Repite para páginas importantes** (si tienes más páginas)

---

### 📊 PASO 4: Monitorear resultados

Después de 1-2 semanas podrás ver:

- **Rendimiento** → Clicks, impresiones, posición
- **Cobertura** → Páginas indexadas
- **Experiencia** → Velocidad, móvil
- **Consultas** → Qué buscan para encontrarte

**Consultas importantes para tu guardería:**
- "guardería Onda"
- "escuela infantil Castellón"
- "CEI Bressols"
- "guardería MonteBlanco"

---

## 🎯 PARTE 3: Eventos personalizados (Avanzado)

### Para rastrear acciones específicas

Ya tienes el código preparado para rastrear eventos. Por ejemplo:

#### Rastrear clicks en el teléfono:

En `components/Contacto.tsx`, puedes añadir:

```typescript
import * as gtag from '@/lib/gtag'

// Cuando el usuario hace click en el teléfono:
<a 
  href="tel:964604202"
  onClick={() => gtag.event({
    action: 'click_phone',
    category: 'contact',
    label: 'phone_number',
  })}
>
  964 604 202
</a>
```

#### Rastrear clicks en el email:

```typescript
<a 
  href="mailto:bressols7@hotmail.com"
  onClick={() => gtag.event({
    action: 'click_email',
    category: 'contact',
    label: 'email_address',
  })}
>
  bressols7@hotmail.com
</a>
```

#### Rastrear clicks en redes sociales:

```typescript
<a 
  href="https://www.facebook.com/ceibressols/"
  onClick={() => gtag.event({
    action: 'click_social',
    category: 'social_media',
    label: 'facebook',
  })}
>
  Facebook
</a>
```

**Estos eventos aparecerán en Google Analytics** bajo "Eventos"

---

## 📱 PARTE 4: Google My Business (Bonus)

### ¿Por qué es importante?
- Aparecer en Google Maps
- Mostrar horarios, fotos, reseñas
- Crucial para negocios locales

### Cómo configurarlo:

1. **Ve a Google My Business**
   - URL: https://business.google.com/

2. **Crea o reclama tu negocio**
   ```
   Nombre: C.E.I. Bressols
   Categoría: Guardería
   Dirección: Av. del Mar, 29, 12200 Onda, Castelló
   Teléfono: 964 604 202
   Web: https://tudominio.com
   ```

3. **Añade fotos**
   - Foto de perfil (logo)
   - Fotos del centro
   - Fotos de las instalaciones

4. **Completa toda la información**
   - Horarios
   - Servicios
   - Descripción

5. **Solicita reseñas** a padres satisfechos

**Beneficio:** Cuando alguien busque "guardería Onda" en Google Maps, ¡aparecerás!

---

## 🔐 PARTE 5: Política de Privacidad (Obligatorio en UE)

### ⚠️ IMPORTANTE: RGPD

Si usas Google Analytics, **legalmente necesitas**:

1. **Política de privacidad** que mencione Google Analytics
2. **Banner de cookies** (opcional pero recomendado)

### Solución rápida:

Puedes usar generadores gratuitos:
- https://www.privacypolicygenerator.info/
- https://www.freeprivacypolicy.com/

O contratar a un abogado para una política personalizada.

---

## 📊 Resumen de URLs importantes

| Herramienta | URL |
|------------|-----|
| Google Analytics | https://analytics.google.com/ |
| Search Console | https://search.google.com/search-console/ |
| Google My Business | https://business.google.com/ |
| PageSpeed Insights | https://pagespeed.web.dev/ |
| Tag Manager (opcional) | https://tagmanager.google.com/ |

---

## ✅ Checklist final

Antes de considerar completada la configuración:

- [ ] Cuenta de Google Analytics creada
- [ ] Measurement ID copiado
- [ ] Variable de entorno configurada en Vercel/Netlify
- [ ] Sitio desplegado con la variable
- [ ] Verificado en tiempo real que funciona
- [ ] Google Search Console configurado
- [ ] Sitemap enviado
- [ ] Indexación solicitada
- [ ] Google My Business configurado (opcional)
- [ ] Política de privacidad añadida (obligatorio)

---

## 🆘 Solución de problemas

### Google Analytics no muestra datos:

1. **Verifica el Measurement ID**
   ```bash
   # En tu terminal, verifica la variable:
   echo $NEXT_PUBLIC_GA_MEASUREMENT_ID
   ```

2. **Revisa la consola del navegador**
   - Abre DevTools (F12)
   - Busca errores de gtag

3. **Verifica que la variable esté en producción**
   - En Vercel/Netlify, revisa las variables de entorno

4. **Usa una ventana de incógnito**
   - Los bloqueadores de anuncios pueden bloquear Analytics

### Search Console dice "URL no indexada":

1. **Espera 1-2 semanas** - Google tarda en indexar
2. **Verifica robots.txt** - Debe permitir el crawling
3. **Envía el sitemap** de nuevo
4. **Solicita indexación** manualmente

---

## 📞 Soporte adicional

Si necesitas ayuda:
1. Documentación de Google Analytics: https://support.google.com/analytics
2. Ayuda de Search Console: https://support.google.com/webmasters
3. Foro de Next.js: https://github.com/vercel/next.js/discussions

---

## 🎉 ¡Felicidades!

Has integrado las herramientas profesionales de Google en tu web. Ahora podrás:

- 📊 Entender a tus visitantes
- 🔍 Mejorar tu posicionamiento en Google
- 📈 Tomar decisiones basadas en datos
- 🎯 Optimizar tu presencia online

**Próximo paso:** Haz el deploy y configura el Measurement ID

---

*Guía creada el 20/01/2025*
*Integración de Google Analytics 4 completada* ✅

