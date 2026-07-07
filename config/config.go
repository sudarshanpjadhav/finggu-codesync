package config

import "os"

var FingguConfig = map[string]string{
	"DB_CONNECTION_STRING": os.Getenv("FINGGU_DB_CONNECTION_STRING"),
	"REDIS_ADDRESS": os.Getenv("FINGGU_REDIS_ADDRESS"),
}