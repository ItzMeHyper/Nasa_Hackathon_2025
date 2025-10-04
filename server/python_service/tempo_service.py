from flask import Flask, jsonify
import earthaccess
import pandas as pd
from datetime import datetime, timedelta

app = Flask(__name__)

@app.route('/tempo/data')
def get_tempo_data():
    try:
        # Authenticate with NASA Earthdata Login
        auth = earthaccess.login()
        
        # Get TEMPO data for the last 24 hours
        end_time = datetime.utcnow()
        start_time = end_time - timedelta(hours=24)
        
        # Query parameters for TEMPO data
        query = {
            'short_name': 'TEMPO_L2_NO2',
            'temporal': {
                'start': start_time.strftime('%Y-%m-%dT%H:%M:%SZ'),
                'end': end_time.strftime('%Y-%m-%dT%H:%M:%SZ')
            }
        }
        
        # Get granules
        granules = earthaccess.search_data(**query)
        
        # Process data (simplified example)
        data = {
            'timestamp': datetime.utcnow().isoformat(),
            'measurements': [
                {
                    'parameter': 'NO2',
                    'value': g.get('value', 0),
                    'unit': 'ppb',
                    'location': g.get('location', {})
                }
                for g in granules[:10]  # Limit to 10 most recent
            ]
        }
        
        return jsonify(data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)