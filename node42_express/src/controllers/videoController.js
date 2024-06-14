// import Video from "../models/video.js";
import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";

let model = initModels(sequelize);
const getVideo = async (req, res) => {
  // SELECT * FROM Video

  // let data = await Video.findAll();

  // findAll() => return [{}, {}, {}]
  // findOne() => {}
  // let data2 = await model.video.findOne({
  //   where: {
  //     video_id: 2,
  //   },
  // });
  // // tìm kiếm theo khoá chính
  // let data3 = await model.video.findByPk(2);

  // video JOIN video_type
  // video JOIN user
  let data = await model.video.findAll({
    include: ["type", "user"],
    where: {
      video_id: 1,
    },
  });
  res.send(data);
};

const getVideoType = async (req, res) => {
  let data = await model.video_type.findAll();

  res.send(data);
};

const getVideoWithType = async (req, res) => {
  let { type_ID } = req.params;

  let data = await model.video.findAll({
    where: {
      type_id: type_ID,
    },
  });

  res.send(data);
};

const getVideoPage = async (req, res) => {
  let { page } = req.params;
  let pageSize = 3;
  let index = (page - 1) * pageSize;

  // SELECT * FROM video LIMIT index, pageSize

  let data = await model.video.findAll({
    offset: index,
    limit: pageSize,
  });

  let listItem = await model.video.count();
  let listPage = Math.ceil(listItem / pageSize);

  res.send({ data, listPage });
};

export { getVideo, getVideoType, getVideoWithType, getVideoPage };
