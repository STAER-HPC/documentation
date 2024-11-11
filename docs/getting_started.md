# Getting started
## Prerequisites
To start using STAER you need:
- An approved STAER account (see instructions below)
- An SSH client
- A basic understanding of shared resource usage in HPC environments
- Familiarity with Unix/Linux command-line interfaces

## Get an account
To request an account, email staer@skoltech.ru with your details. Upon approval, you will receive:
```
login: <your login>
password: <initial password>
```

> [!IMPORTANT]
> The **<initial password\>** provided is temporary and can only be used for your first login.

## First SSH connection
From the Skoltech network, connect to STAER using:
```
ssh <your_login>@staer
```

> [!IMPORTANT] During your first login, you will need to
> 1. Enter you **<initial password\>**.
> 2. Follow the prompt to change your password (you will see *Password expired. Change your password now.*).
> 3. Enter the **<initial password\>** again.
> 4. Set a **<new password\>** and confirm it.

Once your new password is set, you are logged into the login node and ready to submit jobs.

## Setting Up SSH Key-Based Authentication

To simplify future connections, you can create an SSH key pair and add your public key to STAER. This allows passwordless login and enhances security.