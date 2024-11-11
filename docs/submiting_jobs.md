## Submitting jobs

> [!CAUTION]
> After logging via SSH you are logged to *logging node*. The *logging node* is **not for computing**.

## Modules
Software is provided on STAER under the form of loadable environment modules.

> [!NOTE] Software is only accessible via modules
> The use of a module system means that most software is not accessible by default and has to be loaded using the module command. This mechanism allows us to provide multiple versions of the same software concurrently, and gives users the possibility to easily switch between software versions.

STAER uses [ADD LINK!!] Lmod to manage software installations. The modules system helps setting up the user's shell environment to give access to applications, and make running and compiling software easier.


To list available modules:
```
module avail
```

To load module:
```
module load <module name>
```

To unload module:
```
module unload <module name>
```

> [!TIP]
> If you often use the same module, you can put the module loading in the .bashrc file in your home directory.

## Basic principles
About shared system, login node etc

STAER uses Slurm, an open-source resource manager
and job scheduler, used by many of the world's supercomputers and computer clusters.

Slurm supports a variety of job submission techniques. By accurately requesting the resources you need, you’ll be able to get your work done.

## How to submit jobs
A job consists in two parts: resource requests and job steps.

- **Resource requests** describe the amount of computing resource (CPUs, memory, expected run time, etc.) that the job will need to successfully run.
- **Job steps** describe tasks that must be executed.

### Batch scripting
The typical way of creating a job is to write a job submission script. A submission script is a shell script (e.g. a Bash script) whose first comments, if they are prefixed with #SBATCH, are interpreted by Slurm as parameters describing resource requests and submissions options1.

The submission script itself is a job step. Other job steps are created with the srun command.

### Job submitting

### Job monitoring

### Cancel job
