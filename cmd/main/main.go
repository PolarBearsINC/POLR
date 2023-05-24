package main

import (
	// "context"

	"github.com/gin-gonic/gin"
)

func main() {
	// ctx := context.Background()
	router := gin.Default()
	router.Run("localhost:8080")
}
