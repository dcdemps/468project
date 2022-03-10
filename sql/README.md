## SQL Database info

# Username/Password

root/password

# Hostname

127.0.0.1:3306

# Docker command

docker run --name bank-app-sql -v ./data:/var/lib/mysql:rw -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password -d mysql