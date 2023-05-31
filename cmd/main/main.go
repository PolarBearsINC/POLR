package main

import (
	"database/sql"
	"log"
	"os"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"github.com/joho/godotenv"
	"github.com/polarbearsinc/polr/internal"
)

func main() {
	godotenv.Load()
	db, err := sql.Open("mysql", os.Getenv("DSN"))
	if err != nil {
		log.Fatalf("failed to connect: %v", err)
	}
	defer db.Close()
	if err := db.Ping(); err != nil {
		log.Fatalf("failed to ping: %v", err)
	}
	// ctx := context.Background()
	router := gin.Default()
	s := internal.NewServer(router, db)
	s.Run()
}
