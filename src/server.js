import NodeMediaServer from "node-media-server";
import mediaServerConfig from "./config/mediaServer";


const nms = new NodeMediaServer(mediaServerConfig);

nms.run();
