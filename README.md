<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Individual Project - Henry Dogs

#### Deploy

- El Frontend fue deployado con Firebase.</br>
- El Backend fue deployado con heroku.</br>
- La base de datos fue deployada con ElephantSql.</br>

<p>Link para ver la app <a href="https://mydogs-b0f97.web.app/">App dogs</a> .</p> </br>
<p>Link para ver el servidor de la Api creada <a href="https://node-dogs-app.herokuapp.com/dogs">Servidor</a>.</p>

<p align="left">
  <img height="200" src="./dog.png" />
</p>

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.

El contenido de `client` fue creado usando: Create React App.

## Enunciado

La idea general es crear una aplicación en la cual se puedan ver distintas razas de perro junto con información relevante de las mismas utilizando la api externa [the dog api](https://thedogapi.com/) y a partir de ella poder, entre otras cosas:

- Buscar perros
- Filtrarlos / Ordenarlos
- Agregar nuevos perros

### Endpoints/Flags que fue utilizado

- GET https://api.thedogapi.com/v1/breeds

#### Tecnologías utilizadas:

- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

#### Frontend

Se desarrollaó una aplicación de React/Redux que contienen las siguientes pantallas/rutas.

**Pagina inicial**: landing page con

- [ ] Una imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

**Ruta principal**: Contiene

- [ ] Input de búsqueda para encontrar razas de perros por nombre
- [ ] Área donde se verá el listado de razas de perros. Muestra su:
  - Imagen
  - Nombre
  - Temperamento
- [ ] Botones/Opciones para filtrar por temperamento y por raza existente o agregada por nosotros
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente las razas de perro por orden alfabético y por peso
- [ ] Paginado para ir buscando y mostrando las siguientes razas

**IMPORTANTE**: Dentro de la Ruta Principal se muestra tanto las razas de perros traidas desde la API como así también las de la base de datos.

**Ruta de detalle de raza de perro**: contiene

- [ ] Los campos mostrados en la ruta principal para cada raza (imagen, nombre y temperamento)
- [ ] Altura
- [ ] Peso
- [ ] Años de vida

**Ruta de creación de raza de perro**: contiene

- [ ] Un formulario **controlado** con los siguientes campos
  - Nombre
  - Altura (Se diferencia entre altura mínima y máxima)
  - Peso (Se diferencia entre peso mínimo y máximo)
  - Años de vida
- [ ] Posibilidad de seleccionar/agregar uno o más temperamentos
- [ ] Botón/Opción para crear una nueva raza de perro

#### Base de datos

El modelo de la base de datos tiene las siguientes entidades:

- [ ] Raza con las siguientes propiedades:
  - ID \*
  - Nombre \*
  - Altura \*
  - Peso \*
  - Años de vida
- [ ] Temperamento con las siguientes propiedades:
  - ID
  - Nombre

La relación entre ambas entidades es de muchos a muchos ya que una raza de perro puede tener varios "temperamentos" en simultaneo y, a su vez, un "temperamento" puede corresponder a múltiples razas de perro distintas. Por ejemplo la raza `pug` es docil, inteligente y sociable (entre otras). Pero a su vez existen otras razas de perro que también son sociables o inteligentes.

#### Backend

Se desarrolló un servidor en Node/Express con las siguientes rutas:

**IMPORTANTE**: No fue utilizado los filtrados, ordenamientos o paginados brindados por la API externa, todas estas funcionalidades fueron implementarlas.

- [ ] **GET /dogs**:
  - Obtiene un listado de las primeras 8 razas de perro
  - Devuelve solo los datos necesarios para la ruta principal
- [ ] **GET /dogs?name="..."**:
  - Obtiene un listado de las primeras 8 razas de perro que contengan la palabra ingresada como query parameter
  - Si no existe ninguna raza de perro mostrar un mensaje adecuado
- [ ] **GET /dogs/{idRaza}**:
  - Obtiene el detalle de una raza de perro en particular
  - Trae solo los datos pedidos en la ruta de detalle de raza de perro
  - Incluye los temperamentos asociados
- [ ] **GET /temperament**:
  - Obtiene todos los temperamentos posibles
  - En una primera instancia son obteneidas desde la API externa y guardardas la propia base de datos y luego ya son utilizados desde allí
- [ ] **POST /dog**:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
  - Crea una raza de perro en la base de datos

#### Testing

- [ ] Al menos un componente del frontend con sus tests respectivos
- [ ] Al menos una ruta del backend con sus tests respectivos
- [ ] Al menos un modelo de la base de datos con sus tests respectivos
