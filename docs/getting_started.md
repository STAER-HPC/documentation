# Getting started
## Prerequisites
To start using STAER you need:
- get an STAER account,
- a SSH client,
- good understanding of share resources concept,
- be familiar with Unix/Linux command-line environments

## Get an account
To get an account you can put your request on staer@skoltech.ru After approve you will be given:
```
login: <your login>
password: <initial password>
```

> [!IMPORTANT]
> The **<initial password\>** is given can be used only for the first connection to the cluster via SSH.

## First SSH connection
You can connect from local Skoltech network via
```
ssh <your_login>@staer
```

> [!IMPORTANT]
> As you connected for the first time you have to enter your **<initial password\>**.
> You will be provided with string *Password expired. Change your password now.*
> Inter your **<initial password\>** one more time.
> Then create your **<new password\>** and type it one more time.

Now you are logged on logging node and ready for submitting your jobs for computing.

## Host keys