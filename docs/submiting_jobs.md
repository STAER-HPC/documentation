## Submitting jobs

> [!CAUTION]
> After logging in via SSH, you are connected to the *login node*. The *login node* is intended for file management, job submission, and monitoring, **not for heavy computation**. All computational tasks should be run on the compute nodes via job submission.

## Modules
Software on STAER is managed using environment modules, which allow users to load specific software packages and versions as needed.

> [!NOTE] Software is only accessible via modules
> The use of a module system means that most software is not accessible by default and has to be loaded using the module command. This mechanism allows us to provide multiple versions of the same software concurrently, and gives users the possibility to easily switch between software versions.

STAER uses [Lmod](https://lmod.readthedocs.io/en/latest/) to manage software installations. Lmod enables dynamic adjustments to your shell environment, ensuring you have access to applications while keeping the environment clean.


- **List Available Modules**
To view all available software modules, use:
```
module avail
```

- **Load a Module**
To load a specific module:
```
module load <module name>
```

- **Unload a Module**
To remove a module from your environment:
```
module unload <module name>
```

> [!TIP]
> If you frequently use the same module, consider adding the module load <module_name> command to your .bashrc file in your home directory. This will automatically load the module each time you log in.

## Basic Principles of Job Submission
About shared system, login node etc

STAER uses [Slurm](https://slurm.schedmd.com), an open-source resource manager and job scheduler commonly used on supercomputers and HPC clusters. Slurm allows users to request computational resources (such as CPUs, memory, and GPUs) and manage job workflows efficiently.

## How to submit jobs
In [Slurm](https://slurm.schedmd.com), jobs consist of two main parts:

- **Resource requests** describe the amount of computing resource (CPUs, memory, expected run time, etc.) that the job will need to successfully run.
- **Job steps** describe tasks that must be executed.

### Batch scripting
The typical way of creating a job is to write a job submission script. A submission script is a shell script (e.g. a Bash script) whose first comments, if they are prefixed with #SBATCH, are interpreted by [Slurm](https://slurm.schedmd.com) as parameters describing resource requests and submissions options.

The submission script itself is a job step. Other job steps are created with the srun command.

### Job submitting

Here is an example of a basic Slurm `example.job` script:

```
#!/bin/bash
#SBATCH --job-name=my_job              # Job name
#SBATCH --time=01:00:00                # Wall time (hh:mm:ss)
#SBATCH --ntasks=4                     # Number of tasks (CPU cores)
#SBATCH --mem=4G                       # Memory requirement per node

# Execute the job steps
srun hostname
srun sleep 60

```

Submit the `example.job` script to the scheduler using the `sbatch` command:

```
sbatch example.job
```

Once submitted, Slurm will queue the job and assign resources as they become available.

### Job monitoring

After submitting a job, you can monitor its status with the `squeue` command, which displays details such as whether the job is **running**, **pending**, or **completed**.

The `squeue` command has the following output format:

| JOBID  | PARTITION | USER | STATE | TIME | PRIORITY | SUBMIT_TIME | START_TIME | TIME_LIMIT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 405 |  | test | running | 10:15 |  |  |  | unlimited |

**JOBID** - sequential number of the computational job

**PARTITION** is designation of the computer complex on the nodes of which the computational task is executed.

**USER** is user account from which the computational task is executed

**STATE** is state of the computational task

**TIME** is time during which the computational task is executed

**PRIORITY** is current priority of the computational task

**TIME_LIMIT** is maximum execution time of the computational task.


### Cancel job
If you need to cancel a job, use the scancel command followed by the job ID:

```
scancel <job_id>
```