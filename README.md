# Proyecto Ionic: Aplicación Móvil de Gestión de Productos

## Descripción
Esta es una pequeña aplicación móvil creada con Ionic que permite:
1. Mostrar una lista de productos almacenados en una base de datos MongoDB.
2. Agregar nuevos productos a la base de datos.
3. Eliminar productos de la lista.

## Prerrequisitos
- Node.js y npm (Node Package Manager) instalados.
- Ionic CLI y Angular CLI instalados globalmente.
- Json-server instalado globalmente.
- Una base de datos MongoDB configurada (de la Parte 4).

## Instalación y Configuración

### 1. Clonar el Repositorio
Primero, clona el repositorio de tu proyecto a tu máquina local:
```bash
git clone <URL_DEL_REPOSITORIO>
```

### 2. Navegar a la Carpeta del Proyecto
Accede a la carpeta del proyecto usando la terminal:
```bash
cd nombreDeNuestraCarpeta/miAppIonic
```

### 3. Instalar Ionic CLI
Instala Ionic CLI globalmente:
```bash
npm install -g @ionic/cli
```

### 4. Instalar Angular CLI
Instala Angular CLI globalmente:
```bash
npm install -g @angular/cli
```

### 5. Instalar Json-server
Instala Json-server globalmente:
```bash
npm install -g json-server
```

### 6. Configurar el Servidor JSON
Dentro de la carpeta `miAppIonic`, crea una carpeta llamada `data` y coloca el archivo `productos.json` (generado en la Parte 4) dentro de ella.

### 7. Iniciar el Servidor JSON
En la misma ubicación (carpeta `miAppIonic`), inicia el servidor JSON con el siguiente comando:
```bash
json-server --watch data/productos.json --host 0.0.0.0 --port 3300
```
Mantén esta terminal abierta para que el servidor JSON siga funcionando.

### 8. Iniciar la Aplicación Ionic
Abre otra terminal y navega a la carpeta del proyecto Ionic:
```bash
cd miAppIonic/AppIonic
```
Inicia la aplicación Ionic con el siguiente comando:
```bash
ionic serve --lab
```

## Funcionalidades de la Aplicación

### 1. Mostrar Lista de Productos
La aplicación muestra una lista de productos que se obtienen de la base de datos MongoDB configurada.

### 2. Agregar Nuevos Productos
Permite agregar nuevos productos a través de un formulario sencillo. Los nuevos productos se guardan en la base de datos.

### 3. Eliminar Productos
Proporciona la funcionalidad para eliminar productos de la lista. Al eliminar un producto, se actualiza la base de datos en consecuencia.

## Consideraciones Finales
- Asegúrate de que tu servidor JSON esté en funcionamiento mientras trabajas con la aplicación.
- Puedes acceder a la aplicación desde cualquier dispositivo móvil en la misma red utilizando la IP y el puerto especificados.
- Para desplegar la aplicación en un dispositivo móvil, sigue las instrucciones adicionales proporcionadas por Ionic.

## Recursos Adicionales
- [Documentación de Ionic](https://ionicframework.com/docs)
- [Documentación de Angular](https://angular.io/docs)
- [Documentación de Json-server](https://github.com/typicode/json-server)

[Parte 1, 2 y 3](https://github.com/Aljure-bit/prueba_tecnica_pt1-2-3)

[Reposiorio 4](https://github.com/Aljure-bit/prueba_tecnica_pt_4)
