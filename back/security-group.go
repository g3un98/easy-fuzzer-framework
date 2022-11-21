package main

import (
	"context"
	"github.com/aws/aws-sdk-go-v2/service/ec2"
	"github.com/bytedance/sonic"
	"github.com/gofiber/fiber/v2"
)

func getSecurityGroup(c *fiber.Ctx) (err error) {
	input := &ec2.DescribeSecurityGroupsInput{}

	output, err := client.DescribeSecurityGroups(context.TODO(), input)
	if err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	outputByte, err := sonic.Marshal(&output)
	if err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	return c.Send(outputByte)
}

func postSecurityGroup(c *fiber.Ctx) (err error) {
	var input ec2.CreateSecurityGroupInput
	if err = c.BodyParser(&input); err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	if *input.Description == "" || *input.GroupName == "" {
		return fiber.ErrBadRequest
	}

	output, err := client.CreateSecurityGroup(context.TODO(), &input)
	if err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	outputByte, err := sonic.Marshal(&output)
	if err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	return c.Send(outputByte)
}
