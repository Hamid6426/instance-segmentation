# Instance Segmentation with Hybrid Transformers from scratch

## GETTING STARTED

**1. INSTALL PYTHON**

For windows Download and install python from 

`https://www.python.org/downloads/`

For Linux Just use APT manager

`sudo apt install -y build-essential git python3-pip python3-dev python3-venv curl`

**2. CREATE THE PROJECT DIRECTORY**

`mkdir instance-segmentation-hybrid`

`cd instance-segmentation-hybrid`

**3. CREATE A VIRTUAL ENVIRONMENT**

Creating a virtual environment to prevent conflicts

`python3 -m venv hybrid-env`

Then activate the virtual environment

`hybrid-env/Scripts/activate`

for Linux

`source hybrid-env/bin/activate`

**4. UPGRADE PIP**

Upgrade pip inside the virtual environment

`pip install --upgrade pip`

**5. INSTALL ML LIBRARIES**

- Install pyTorch

`pip install torch torchvision torchaudio`

- Install TensorFlow

`pip install tensorflow`

- Install openCV

`pip install opencv-python-headless`

- Install transformers

`pip install transformers`

- Install Flask

`pip install flask`

**6. Project Structure**

Use Jinja2 (Flask’s template engine) to create files and folders for the web app:

- static/ - For CSS, JavaScript, and images.
- templates/ - For HTML templates.
- app.py - Flask application logic.
- models/ - For seperating models or do it in app.py for smaller project 


**7. RUN IN DEV MODE**

`python app.py`

**8. ACCESS THE APP**

`http://127.0.0.1:5000/`

---

## DEBUGGING

- Check out requirements.txt for package info
- If some package is missing install it using pip
- Do not delete and re-download hybrid-env unless you have good internet speed

