package internal

import (
	"database/sql"

	"github.com/gin-gonic/gin"
)

type Server struct {
	Router *gin.Engine
	db     *sql.DB
}

func NewServer(router *gin.Engine, db *sql.DB) *Server {
	return &Server{
		Router: router,
		db:     db,
	}
}

func (s *Server) routes() {
	v1 := s.Router.Group("/v1")
	// v1.GET("/allPolls", s.allPollsHandler)
	v1.POST("/createPoll", s.createPollHandler)
}

func (s *Server) Run() {
	s.routes()
	s.Router.Run("localhost:8080")
}
