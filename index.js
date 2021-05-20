//que es esta monda?
require('dotenv').config();
//ok, aqui solicitamos a mongoose para poder...mierda, que es lo que hace mongoose?
const mongoose = require('mongoose');
//aqui llamamos a express--> que recordemos, express es un framework, el cual nos permite construir SERVIDORES de/para API's
//Las API's generan los ENDPOINTS para que nuestros clientes se puedan comunicar e interactuar.
//A manera de comentario, cabe resaltar que las API's no solamente sirven para comunicarse con Bases de Datos, aunque
//esa si es la razon mas comun para utilizarlas. Las usamos tambien a manera de interfaz para nuestro usuarios.
const express = require('express');
const 