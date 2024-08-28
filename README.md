# Encriptador de Texto

## Desafío

Este proyecto es parte de un desafío de **Alura Latam**, diseñado para poner en práctica habilidades de desarrollo web en la creación de aplicaciones interactivas.

## Descripción

Esta es una aplicación web que permite encriptar y desencriptar texto usando un conjunto específico de reglas de sustitución. La aplicación solo acepta texto en minúsculas y no permite caracteres especiales ni acentos.

## Funcionalidades

- **Encriptar Texto**: Convierte el texto ingresado en una forma encriptada según las reglas definidas.
- **Desencriptar Texto**: Convierte el texto encriptado de vuelta a su forma original.
- **Copiar al Portapapeles**: Permite copiar el texto encriptado o desencriptado al portapapeles.

## Reglas de Encriptación

- `e` → `enter`
- `i` → `imes`
- `a` → `ai`
- `o` → `ober`
- `u` → `ufat`

## Reglas de Desencriptación

- `enter` → `e`
- `imes` → `i`
- `ai` → `a`
- `ober` → `o`
- `ufat` → `u`

## Requisitos

- El texto debe estar en minúsculas.
- No se permiten letras con acentos ni caracteres especiales.

## Uso

1. **Ingrese el Texto**: Escriba el texto que desea encriptar o desencriptar en el área de texto.
2. **Encriptar o Desencriptar**: Haga clic en el botón "Encriptar!" o "Desencriptar!" según lo que desee hacer.
3. **Copiar el Resultado**: Después de obtener el resultado, puede hacer clic en el botón "Copiar" para copiar el texto al portapapeles.

## Instalación

1. Clona este repositorio.
2. Abre el archivo `index.html` en tu navegador para probar la aplicación localmente.

## Estructura de Archivos

- `index.html`: Archivo principal HTML que estructura la aplicación.
- `assets/css/styles.css`: Archivo de estilos CSS para la aplicación.
- `assets/js/encrypter.js`: Archivo JavaScript que contiene la lógica para encriptar, desencriptar y copiar el texto.
