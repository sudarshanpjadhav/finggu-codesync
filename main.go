package main

import (
	"github.com/gin-gonic/gin"
	"finggu-codesync/database"
	"finggu-codesync/routes"
)

func main() {
	database.FingguInitDB()
	router := gin.Default()
	routes.FingguSetupRoutes(router)
	router.Run() // listen and serve on 0.0.0.0:8080
}