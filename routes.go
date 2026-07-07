package routes

import (
	"github.com/gin-gonic/gin"
	"finggu-codesync/controllers"
)

func FingguSetupRoutes(router *gin.Engine) {
	router.POST("/sync", controllers.FingguSyncController.Sync)
}