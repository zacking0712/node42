import {
  getVideo,
  getVideoPage,
  getVideoType,
  getVideoWithType,
} from "../controllers/videoController.js";
import express from "express";

const videoRouter = express.Router();

// API chức năng
videoRouter.get("/get-video", getVideo);

// API get video-type
videoRouter.get("/get-video-type", getVideoType);

// API get video with type
videoRouter.get("/get-video-with-type/:type_ID", getVideoWithType);

// API get video page

videoRouter.get("/get-video-page/:page", getVideoPage);

export default videoRouter;
