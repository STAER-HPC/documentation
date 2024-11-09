# Brief job control instruction:

## 1.0 Loading modules

Before the start of working with different software you need to properly set-up environmental variables. In STAER the procedure automaised by Modules. Modules are flexible environment variables manager. 

To show available modules use `module avail`

To load module use `module load [name of module]`

To unload module use `module unload [name of module]`

## 1.1 Submitting jobs

There are two options for job submission: interactive and background.

The `srun` command executes jobs for execution in the interactive mode.
The `sbatch` command executes jobs in the background.

Note:

1. when executing a job in interactive mode, the execution process and results are displayed on the terminal screen;
2. when executing a task in the background mode, only information about task execution is displayed on the terminal screen. To view the process of task execution and results of its execution, it is necessary to provide output to a file.

The `srun` and `sbatch` commands have the following run format:

`srun [parameters] command
 srun [parameters] /home/user/executable file
 sbatch /home/user/job.slurm`

The following are the basic parameters for the `srun` and `sbatch` commands:

- **-w**, **--nodelist**={<*node_name_list*>|<*filename*>}

 Defines nodes (and accordingly their number) on which the task will be executed, for example:
--nodelist=node01 // 1 node with number 1 will be used
--nodelist=node[01-03] // 3 nodes with numbers 1,2,3 will be used.

If the number of nodes defined in the parameter exceeds the number of available nodes when the job is started, the job will be placed in the queue and will have the status PD (Pending) - waiting for resources.

- **N**, **-nodes**=<*minnodes*>[-*maxnodes*]

Request that a minimum of *minnodes* nodes be allocated to this job. A maximum node count may also be specified with *maxnodes*.

- **c**, **-cpus-per-task**=<*ncpus*>

Request that *ncpus* be allocated **per process**. This may be useful if the job is multithreaded and requires more than one CPU per task for optimal performance.

- **t**, **-time**=<*time*>

Set a limit on the total run time of the job allocation. If the requested time limit exceeds the partition's time limit, the job will be left in a PENDING state (possibly indefinitely).

More information at [https://slurm.schedmd.com/srun.html](https://slurm.schedmd.com/srun.html) and [https://slurm.schedmd.com/sbatch.html](https://slurm.schedmd.com/sbatch.html)

Example of file for running in background mode:

command: `sbatch some_calculation.job`

some_calculation.job content is:

‘’’ 

#!/bin/bash
#SBATCH --nodes=1
#SBATCH --cpus-per-task=32

srun calculcationrun

srun calculationpostprocess

‘’’

## 1.2 View job status

The `squeue` command has the following output format:

JOBID    PARTITION USER STATE TIME PRIORITY SUBMIT_TIME START_TIME TIME_LIMIT
405 power-gpu test running 10:15 unlimited

| JOBID  | PARTITION | USER | STATE | TIME | PRIORITY | SUBMIT_TIME | START_TIME | TIME_LIMIT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 405 |  | test | running | 10:15 |  |  |  | unlimited |

JOBID - sequential number of the computational job

PARTITION - designation of the computer complex on the nodes of which the computational task is executed.

USER - user account from which the computational task is executed

STATE - state of the computational task

TIME - time during which the computational task is executed

PRIORITY - current priority of the computational task

TIME_LIMIT - maximum execution time of the computational task.

Detailed information about the `squeue` command can be found at the link:
[https://slurm.schedmd.com/squeue.html](https://slurm.schedmd.com/squeue.html)

## 1.3 Cancel job

The scancel command have the following startup format:
`scancel jobid`

For example, `scancel 405`