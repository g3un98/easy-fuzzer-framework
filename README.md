# Easy Fuzzer Framework

## Usage

### Amazon Web Service

1. Create a user for EFF in [IAM](https://us-east-1.console.aws.amazon.com/iamv2/home?region=ap-northeast-2#/users)
  - Need `AmazonEC2FullAccess` permission
2. Create a **Access keys** on `Security credentials` tab
  - Access key is very **important**!
  - Be careful not to expose your key.

### EFF Server

1. Launch instane from `ami-0c8832fce913849e1`.
2. Add security-group rules on `Security > Inbound rules`.
  - Source 0.0.0.0/0, Port range 80
  - Source 0.0.0.0/0, Port range 9102
  - Source 0.0.0.0/0, Port range 9090
  - Source 0.0.0.0/0, Port range 3000
  - Source 0.0.0.0/0, Port range 8080
  - Source 0.0.0.0/0, Port range 8125
3. Connect to instance.
```shell
ssh -i "EFF-KeyPair.pem" ubuntu@{your ip or domaiin}
```
4. Create AWS config file into `back/config`.
```toml
[default]
region=ap-northeast-2
```
5. Create AWS credential file into `back/credentials`.
```toml
[default]
aws_access_key_id=AKIAIOSFODNN7EXAMPLE
aws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```
6. Fix cron service using `sudo crontab -e`
  - Remove comment symbol(`#`) in `@reboot` line.
7. Reboot your instnace!

### Grafana

1. Login for initialize (id: admin / pw: admin)
2. Set your admin password (or skip)
3. Add data source on `Configuration > Data sources`
  - Default data source type is **Prometheus**.
  - Default URL is `http://{your ip or domain}:9090`.
