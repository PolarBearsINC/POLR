package internal

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (s *Server) allPollsHandler(c *gin.Context) {
	// ctx := c.Request.Context()
	c.Status(http.StatusCreated)
}
