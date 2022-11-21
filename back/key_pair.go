package main

import (
	"context"
	"github.com/aws/aws-sdk-go-v2/service/ec2"
	"github.com/bytedance/sonic"
	"github.com/gofiber/fiber/v2"
)

func getKeyPair(c *fiber.Ctx) (err error) {
	input := &ec2.DescribeKeyPairsInput{}

	output, err := client.DescribeKeyPairs(context.TODO(), input)
	if err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	outputByte, err := sonic.Marshal(&output)
	if err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	return c.Send(outputByte)
}

func postKeyPair(c *fiber.Ctx) (err error) {
	var input ec2.CreateKeyPairInput
	if err = c.BodyParser(&input); err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	if *input.KeyName == "" {
		return fiber.ErrBadRequest
	}

	output, err := client.CreateKeyPair(context.TODO(), &input)
	if err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	outputByte, err := sonic.Marshal(&output)
	if err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	return c.Send(outputByte)
}
