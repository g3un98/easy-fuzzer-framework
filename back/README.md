# Back

## Installation

### To get your access key ID and secret access key

1. Open the IAM console.
2. On the navigation menu, choose Users.
3. Choose your IAM user name (not the check box).
4. Open the Security credentials tab, and then choose Create access key.
5. To see the new access key, choose Show. Your credentials resemble the following:
    - Access key ID: AKIAIOSFODNN7EXAMPLE
    - Secret access key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
6. To download the key pair, choose Download .csv file. Store the keys in a secure location.

### Set-up aws config

1. Write your keys into `~/.aws/credentials`
```plaintext
[default]
aws_access_key_id=AKIAIOSFODNN7EXAMPLE
aws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```

2. Write yout region into `~/.aws/config`
```plaintext
[default]
region=ap-northeast-2
```

### Build server

1. Clone this repository.
2. Execute `go run *.go`
