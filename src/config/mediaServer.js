const config = {
  rtmp: {
    port: 1935,
    chunk_size: 6000,
    gop_cache: true,
    ping: 60,
    ping_timeout: 30,
  },
  http: {
    port: 8888,
    allow_origin: "*",
    mediaroot: "C:/Users/Vadzim.Sheukunou",
  },
  trans: {
    ffmpeg:
      "C:\\Users\\Vadzim.Sheukunou\\Desktop\\ffmpeg-20200807-fab00b0-win64-static\\bin\\ffmpeg.exe",
    tasks: [
      {
        app: "live",
        hls: true,
        hlsFlags: "[hls_time=0.5:hls_list_size=10:hls_flags=delete_segments]",
      },
    ],
  },
};

export default config;
