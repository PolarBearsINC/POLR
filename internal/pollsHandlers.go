package internal

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/sony/sonyflake"
)

type Poll struct {
	PollId  uint64
	Title   string   `json:"title"`
	UserId  string   `json:"userId"`
	Context string   `json:"context"`
	Options []string `json:"options"`
}

func (s *Server) allPollsHandler(c *gin.Context) {
	// ctx := c.Request.Context()
	c.Status(http.StatusCreated)
}

func (s *Server) createPollHandler(c *gin.Context) {
	r := c.Request.Body
	if r == nil {
		c.Status(http.StatusBadRequest)
		return
	}
	read, _ := ioutil.ReadAll(r)
	var poll *Poll
	err := json.Unmarshal(read, &poll)
	if err != nil {
		log.Println("Error unmarshalling data: ", err)
		c.Status(http.StatusBadRequest)
		return
	}

	// Create Poll ID
	poll.PollId, _ = sonyflake.NewSonyflake(sonyflake.Settings{}).NextID()

	// Insert poll into DB
	insertStatement := `INSERT INTO polls (id, name, user_id, total_favorites, creation_date) VALUES (?, ?, ?, ?, NOW())`
	_, err = s.db.Exec(insertStatement, poll.PollId, poll.Title, poll.UserId, 0)
	if err != nil {
		log.Println("Error saving poll to db: ", err)
		c.Status(http.StatusConflict)
		return
	}

	// Insert each option into DB
	for o := range poll.Options {
		insertStatement = `INSERT INTO options (poll_id, option, votes) VALUES (?, ?, ?)`
		_, err = s.db.Exec(insertStatement, poll.PollId, o, 0)
		if err != nil {
			log.Println("Error saving options to db: ", err)
			c.Status(http.StatusConflict)
			return
		}
	}
	c.Status(http.StatusCreated)
}
