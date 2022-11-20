package main

import (
	"context"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/ec2"
	"github.com/bytedance/sonic"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"log"
)

var (
	client *ec2.Client
	app    *fiber.App
)

func init() {
	cfg, err := config.LoadDefaultConfig(context.TODO())
	if err != nil {
		log.Fatalln("Failed to load config:", err)
	}

	client = ec2.NewFromConfig(cfg)

	app = fiber.New(fiber.Config{
		Prefork:     true,
		JSONEncoder: sonic.Marshal,
		JSONDecoder: sonic.Unmarshal,
	})
	app.Use(logger.New())
}

func main() {
	app.Get("/instance", getInstances)
	app.Get("/instance/:instance_id", getInstance)
	app.Post("/instance", postInstance)
	app.Put("/instance/:instance_id", startInstance)
	app.Patch("/instance/:instance_id", stopInstance)
	app.Delete("/instance/:instance_id", deleteInstance)

	app.Listen(":8080")
}
