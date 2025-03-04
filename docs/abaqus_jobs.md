### Launching Abaqus on a Cluster: Instructions

When working with Abaqus on a cluster, there are two main approaches to prepare your problem before running it. Here's a step-by-step guide for each method, including how to submit jobs using the SLURM `sbatch` command.

#### Approach 1: Prepare on Your Own Machine and Submit via SSH

1. **Prepare Input Files on Local Machine:**
   - Set up your Abaqus model and create the input files (`.inp`) on your local machine.

2. **Transfer Files to the Cluster:**
   - Use `scp` or a similar tool to transfer your input files to the cluster.
     ```bash
     scp your_model.inp username@cluster-address:/path/to/directory/
     ```

3. **Connect to the Cluster via SSH:**
   - Log in to the cluster using SSH.
     ```bash
     ssh username@cluster-address
     ```

4. **Navigate to the Appropriate Directory:**
   - Change to the directory where you uploaded your files.
     ```bash
     cd /path/to/directory/
     ```

5. **Submit the Job Using SLURM:**
   - Prepare a SLURM submission script (example provided below).
   - Submit the job using the `sbatch` command.
     ```bash
     sbatch submit_job.sh
     ```

#### Approach 2: Connect via RDP and Set Up Problem on Cluster

1. **Connect to the Cluster Using RDP:**
   - Use an RDP client to connect to the login node and access the GUI environment. Instruction about GUI access is here [link](https://sci.skoltech.ru/staer/gui_access)

2. **Set Up Your Abaqus Model:**
   - Open Application and start "Abaqusv2021" and prepare your model directly on the cluster.

 3. > [!WARNING]
    > **Do not run the simulation directly in the GUI.** This approach is only for setting up the problem, not for executing the simulation.

4. **Prepare for Job Submission:**
   - Save the input files in a designated directory on the cluster.

5. **Submit the Job Using SLURM:**
   - Follow the same job submission process as outlined in Approach 1.

#### Submitting Jobs with SLURM `sbatch`

Here is an example of a simple SLURM submission script (`submit_job.sh`) for running Abaqus:

```bash
#!/bin/bash
#SBATCH --job-name=abaqus_simulation
#SBATCH --output=output.log
#SBATCH --error=error.log
#SBATCH --time=02:00:00
#SBATCH --ntasks=4
#SBATCH --mem=8G

module load abaqus/2021

abaqus job=your_model input=your_model.inp cpus=${SLURM_NTASKS}
```

- **`--job-name`**: Name of your job.
- **`--output` and `--error`**: Files to save standard output and error log.
- **`--time`**: Maximum time for the job in `HH:MM:SS`.
- **`--ntasks`**: Number of CPU tasks.
- **`--mem`**: Memory allocation.
- **`module load abaqus/2021`**: Load the appropriate Abaqus module.
- **`abaqus job=your_model`**: Command to run your Abaqus job.

Ensure to replace `your_model` with the actual name of your input file.

