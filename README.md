# 📡 Aplicación Web CRUD de Dispositivos IoT

Esta aplicación web permite **administrar dispositivos IoT** mediante una API creada con [MockAPI.io](https://mockapi.io).  
Se implementa un **CRUD completo (Crear, Leer, Actualizar y Eliminar)** usando **JavaScript vanilla**, **Fetch API (async/await)** y **Bootstrap 5** para el diseño.

---

## 🚀 Tecnologías utilizadas

- **HTML5** – estructura de la aplicación  
- **CSS3 / Bootstrap 5** – estilos modernos y responsive  
- **JavaScript Vanilla (ES6)** – lógica del CRUD  
- **MockAPI.io** – backend simulado  

---


---

## 📌 Funcionalidades

- ✅ Listar dispositivos IoT
- ➕ Registrar nuevos dispositivos
- ✏️ Editar información de dispositivos
- 🗑️ Eliminar dispositivos
- 🔄 Comunicación con API REST
- 📱 Interfaz moderna y responsiva

---

## 🧩 Estructura de datos

La API maneja los siguientes campos:

| Campo            | Tipo    | Descripción |
|------------------|---------|-------------|
| id               | String  | Identificador único |
| deviceName       | String  | Nombre del dispositivo |
| direccionCode    | Number  | Código de dirección |
| direccionText    | String  | Dirección en texto |
| dateTime         | Date    | Fecha y hora |
| ipClient         | String  | IP del cliente |

---

## 🧭 Valores de dirección

| Código | Dirección |
|------:|-----------|
| 1 | Adelante |
| 2 | Detener |
| 3 | Atrás |
| 4 | Vuelta derecha adelante |
| 5 | Vuelta izquierda adelante |
| 6 | Vuelta derecha atrás |
| 7 | Vuelta izquierda atrás |
| 8 | Giro 90° derecha |
| 9 | Giro 90° izquierda |

---

## 🔗 API utilizada
https://698a179bc04d974bc6a154af.mockapi.io/api/v1/dispositivos_IoT




