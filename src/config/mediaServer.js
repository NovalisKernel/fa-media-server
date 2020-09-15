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
    mediaroot: "./media",
  },
  trans: {
    ffmpeg: "/usr/local/bin/ffmpeg",
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
