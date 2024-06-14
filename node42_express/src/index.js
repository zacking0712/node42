// express

// package.json
// node_modules

// B1: yarn init => enter...
// B2: thêm type bằng module trong package.json => sử dụng được ES module (export, import)

// B3: thêm script start trong package.json
// B4: yarn add express

import express from "express";
const app = express();

// middleware
app.use(express.json());
// mở chặn CORS => yarn add cors
import cors from "cors";
app.use(cors());

// khởi tạo server BE chạy bằng framewwork Express
app.listen(8080);

//yarn add nodemon => watching => auto restart server
// chỉ sử dụng môi trường developer
// node v18 trở lên => node --watch index.js
// ctrl + C => tắt server

// GET: /demo
// :id truyền động param từ FE
// lưu ý: endpoint phải khai báo đầy đủ nếu có params
// endpoint => viết thường cách nhau bởi gạch ngang (không phân biệt hoa thường). VD: thong-tin-user
// dữ liệu lấy từ query hay param đều là kiểu string
app.get("/demo/:id/:hoTen", (request, response) => {
  // xử lí logic

  // - nhận từ URL
  // query string: localhost:8080/demo?id=1&hoTen=long
  //   let id = request.query.id;
  //   let hoTen = request.query.hoTen;
  //destructering
  //   let { id, hoTen } = request.query;
  // query params: localhost:8080/demo/1/long
  //   let id2 = request.params.id2;
  //   let hoTen2 = request.params.hoTen2;
  let { id, hoTen } = request.params;

  // nhận bằng json
  // body
  let { email, phone, diaChi } = request.body;

  //object literal => lượt bỏ tên biến trùng với tên thuộc tính
  //status code 100 -> 599
  response.status(202).send({
    id,
    hoTen,
    email,
    phone,
    diaChi,
  }); // bất kì kiểu data gì trừ number
});

// chuỗi kết nối CSDL: host username password port dialect
// truy vấn dữ liệu CRUD table

// yarn add mysql2

// truy vấn vào table nguoi_dung
// ORM
//localhost:8080/video/get-video

import rootRouter from "./routes/rootRouter.js";
app.use(rootRouter);
/* 
  Model: object => Sequelize ORM
  
  Controller: xử lý logic, chức năng tính toán,truy xuất cơ sở dữ liệu

  Router: quản lí API, quản lí đối tượng endpoint

*/
