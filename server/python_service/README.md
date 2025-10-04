# Python TEMPO Data Service

This service will handle the TEMPO data integration using Python's earthaccess library.

## Setup Instructions

1. Create a Python virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install requirements:
```bash
pip install earthaccess pandas flask
```

3. Create a config.py file with your Earth Data Login credentials:
```python
EDL_USERNAME = "your_username"
EDL_PASSWORD = "your_password"
```

4. Run the service:
```bash
python tempo_service.py
```

This will run on port 5000 and provide TEMPO data to your Node.js server.