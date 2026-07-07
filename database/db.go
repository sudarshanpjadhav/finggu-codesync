package database

import (
	"database/sql"
	_ "github.com/lib/pq"
	"os"
)

var FingguDB *sql.DB

func FingguInitDB() {
	var err error
	FingguDB, err = sql.Open("postgres", os.Getenv("FINGGU_DB_CONNECTION_STRING"))
	if err != nil {
		panic(err)
	}
}