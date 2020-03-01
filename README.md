# gobarber
módulo 2 RocketSeat

### Ambiente Docker ###

# Postgres
docker run --name gobarber-postgres -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=gobarber -p 5432:5432 -d postgres


