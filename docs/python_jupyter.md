# Using Python and Jupiter on HPC

## Introduction

Python is a versatile and powerful programming language that is widely used in scientific computing, data analysis, artificial intelligence, and many other fields.

## Loading Python with Modules

On our HPC system, Python is available through environment modules. The default version of Python available is Python 3.9.16. If you require a different version, you can load it using the module system.

### Loading Other Versions

To load a different version of Python, use the `module` command followed by the specific version you need. For example, to load Python 3.10.13:

```bash
module load python/3.10.13
```

## Installing Pip Packages Locally

To install Python packages using pip locally (in your home directory), use the `--user` flag with the pip command. This ensures that the packages do not interfere with the system-wide Python installation.

```bash
pip install --user package_name
```

Replace `package_name` with the name of the package you wish to install.

## Running Jupyter Notebooks

To run Jupyter Notebooks on the HPC, you need to start the notebook server on a computational node. This can be done by submitting a batch job.

### Example Batch File

Below is an example batch file to start a Jupyter Lab server:

```bash
#!/bin/bash
#SBATCH --job-name=my_job              # Job name
#SBATCH --time=01:00:00                # Wall time (hh:mm:ss)
#SBATCH --ntasks=4                     # Number of tasks (CPU cores)
#SBATCH --mem=4G                       # Memory requirement per node

# Execute the job steps
jupyter-lab --no-browser --port=8080 --ip=0.0.0.0
```

### Establishing a Tunnel

After submitting the batch file, you will need to establish an SSH tunnel to access the notebook interface from your local machine. Use the following command:

```bash
ssh -L 8080:localhost:8080 <your_username>@<node_name>
```

Replace `your_username` with your HPC username and `<node_name>` with the address of the node that allocated.

Once the tunnel is established, open your web browser and go to [http://127.0.0.1:8080](http://127.0.0.1:8080) to access Jupyter Lab.

### Note

After closing the browser or disconnecting, the computations that are running in the notebook will continue on the HPC system.