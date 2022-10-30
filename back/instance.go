package main

import (
	"context"
	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/service/ec2"
	"github.com/bytedance/sonic"
	"github.com/gofiber/fiber/v2"
)

func getInstances(c *fiber.Ctx) (err error) {
	input := &ec2.DescribeInstancesInput{}

	output, err := client.DescribeInstances(context.TODO(), input)
	if err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	outputByte, err := sonic.Marshal(&output)
	if err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	return c.Send(outputByte)
}

func getInstance(c *fiber.Ctx) (err error) {
	input := ec2.DescribeInstancesInput{
		InstanceIds: []string{
			c.Params("instance_id"),
		},
	}

	output, err := client.DescribeInstances(context.TODO(), &input)
	if err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	outputByte, err := sonic.Marshal(&output)
	if err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	return c.Send(outputByte)
}

func postInstance(c *fiber.Ctx) (err error) {
	var input ec2.RunInstancesInput
	if err = c.BodyParser(&input); err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	if aws.ToInt32(input.MaxCount) == 0 || aws.ToInt32(input.MinCount) == 0 || aws.ToString(input.ImageId) == "" || string(input.InstanceType) == "" {
		return fiber.ErrBadRequest
	}

	output, err := client.RunInstances(context.TODO(), &input)
	if err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	outputByte, err := sonic.Marshal(&output)
	if err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	return c.Send(outputByte)
}

func deleteInstance(c *fiber.Ctx) (err error) {
	input := ec2.TerminateInstancesInput{
		InstanceIds: []string{
			c.Params("instance_id"),
		},
	}

	output, err := client.TerminateInstances(context.TODO(), &input)
	if err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	outputByte, err := sonic.Marshal(&output)
	if err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	return c.Send(outputByte)
}
