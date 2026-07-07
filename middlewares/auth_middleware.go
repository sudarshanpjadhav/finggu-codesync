package middlewares

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func FingguAuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		// Authentication logic
		if c.Request.Header.Get("Authorization") == "" {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
			c.Abort()
			return
		}
		c.Next()
	}
}