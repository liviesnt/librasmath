from flask import Flask, jsonify
from flask_cors import CORS
from youtube_transcript_api import YouTubeTranscriptApi
import re

app = Flask(__name__)
CORS(app)

@app.route('/api/transcript/<path:video_id>')
def transcript(video_id):
    try:
        match = re.search(r"(?:v=|youtu\.be/)([A-Za-z0-9_-]{11})", video_id)
        if match:
            video_id = match.group(1)

        transcript = YouTubeTranscriptApi().fetch(video_id, languages=['pt', 'pt-BR', 'en'])
        print(jsonify(transcript))
        return jsonify(transcript)
    except Exception as e:
        return jsonify({"error": str(e)}), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
