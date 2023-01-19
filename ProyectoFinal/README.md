## Crear Base de datos

Utilizando Beekeeper, crear una base de datos con el nombre `ha_node1_proyecto_final`.

```sql
CREATE DATABASE ha_node1_proyecto_final;
```

Recordar que en supabase el nombre de la base es `postgres` 😉

## Ejecutar migraciones

Una vez que la base de datos ha sido creada, ejecutar las migraciones.

```sh
npx sequelize-cli db:migrate
```

## Cargar datos iniciales

Para cargar datos iniciales, ejecutar el siguiente comando:

```sh
npx sequelize-cli db:seed:all
```

🤓 📝
Sequelize no solo cuenta con migraciones, sino que tambien incluye una funcion de seeders 🌱, para poder gestionar de forma sencilla los datos iniciales.

## Probar la aplicacion en vercel

Con la siguiente URL podemos ver cual es el objectivo final: https://ha-node-1-proyecto-final-base.vercel.app/login

Email: admin@admin.com
Password: admin123
