# Remote Access to Cluster "staer" with GUI

## Accessing "staer" Remotely

> [!WARNING]
> The GUI places a significant load on the login node. Use the GUI only for minor preparation tasks and do not start any calculations on the login node. Use SLURM to submit jobs for processing.

1. **Ensure Network Access**
   - Verify that your device is connected to the authorized network or VPN as specified by your system administrator.

2. **Setting Up Remote Desktop Protocol (RDP)**

   ### On Windows:
   - **Step 1:** Open the Start menu and search for "Remote Desktop Connection."
   - **Step 2:** Launch "Remote Desktop Connection."
   - **Step 3:** Enter `staer` in the "Computer" field.
   - **Step 4:** Click "Connect" to initiate the connection.
   - **Step 5:** Input your credentials as provided by the system administrator.

   ### On Linux:
   - **Step 1:** Install an RDP client, such as `Remmina`, using your package manager (e.g., `sudo apt install remmina`).
   - **Step 2:** Open the `Remmina` application.
   - **Step 3:** Enter `staer` in the address bar or create a "New Connection."
   - **Step 4:** Set the protocol to RDP and save the connection settings.
   - **Step 5:** Double-click the saved connection to connect.
   - **Step 6:** Enter your credentials as provided by the system administrator.

   ### On macOS:
   - **Step 1:** Download and install "Microsoft Remote Desktop" from the App Store.
   - **Step 2:** Open the Microsoft Remote Desktop application.
   - **Step 3:** Click "Add PC" to create a new connection.
   - **Step 4:** Enter `staer` in the "PC Name" field.
   - **Step 5:** Click "Add" to save the connection.
   - **Step 6:** Double-click the saved PC to initiate the connection.
   - **Step 7:** Enter your credentials as provided by the system administrator.

3. **Log in with Your Credentials**
   - Use the credentials provided by the system administrator to log in.

4. **Session Management**
   > [!IMPORTANT]
   > Always use **log out** to properly close your session and ensure resources are freed. Avoid leaving sessions open or disconnected to prevent unnecessary load on the system.