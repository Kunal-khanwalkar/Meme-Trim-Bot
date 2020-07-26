# Meme Trim Bot

A simple Discord bot to fetch a meme from a YouTube video and post it on your discord server.

### Format:
``` //meme [URL] [start_time] [end_time] ```

(Time to be entered as HH:MM:SS)

To-do: Use Async/Await for synchronous code as the Promises API and timeouts are barely holding up.

---
### Requirements
1. Youtube-DL for video retrieval.

 [![youtube-dl](https://img.shields.io/badge/Youtube--DL-link-brightgreen)](https://github.com/ytdl-org/youtube-dl)
2. FFMPEG for video trimming.

 [![FFPMEG](https://img.shields.io/badge/FFMPEG-link-brightgreen)](https://ffmpeg.org/)