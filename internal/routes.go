package internal

import (
	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/gin-gonic/gin"
)

type Server struct {
	router     *gin.Engine
	awsSession *session.Session
	awsConfig  *aws.Config
}

func newServer(router *gin.Engine, awsSession *session.Session, awsConfig *aws.Config) *Server {
	return &Server{
		router:     router,
		awsSession: awsSession,
		awsConfig:  awsConfig,
	}
}

func (s *Server) routes() {
	v1 := s.router.Group("/v1")
	v1.GET("/allPolls", s.allPollsHandler)
	// v1.POST("/createPoll", s.createPollHandler)
}
