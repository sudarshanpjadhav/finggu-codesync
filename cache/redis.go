package cache

import (
	"github.com/go-redis/redis/v8"
	"context"
	"os"
)

var FingguRedisClient *redis.Client

func FingguInitRedis() {
	FingguRedisClient = redis.NewClient(&redis.Options{
		Addr: os.Getenv("FINGGU_REDIS_ADDRESS"),
	})
}