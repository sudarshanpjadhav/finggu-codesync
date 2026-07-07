package controllers

import (
	"github.com/gin-gonic/gin"
)

type FingguSyncController struct {}

func (ctrl *FingguSyncController) Sync(c *gin.Context) {
	// Logic to handle synchronization
	c.JSON(200, gin.H{"message": "Sync initiated"})
}