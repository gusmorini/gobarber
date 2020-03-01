# gobarber
módulo 2 RocketSeat

### Ambiente Docker ###

# Postgres
docker run --name gobarber-postgres -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=gobarber -p 5432:5432 -d postgres

# MongoDB
docker run --name gobarber-mongo -p 27017:27017 -d -t mongo

# Redis
docker run --name gobarber-redis -p 6379:6379 -d -t redis:alpine

# iniciar todos os serviços
docker container start gobarber-postgres gobarber-mongo gobarber-redis

# Popular banco de dados
yarn sequelize db:migrate
yarn sequelize db:seed:all

# Rodar o projeto
yarn dev

# Rodar a fila de emails
yarn queue
