# ecommerce-nmpm-backend

## Setup môi trường để code

- Cần nodejs (^19) để code
- Cần docker (^20.10.21), docker-compose (^2.12.2) để chạy database

- Để cài đặt package trong nodejs:

  - Cài yarn: `sudo npm i -g yarn`
  - Cài tất cả package khi đã có file package.json (tại thư mục root): `yarn install`
  - Cài thêm package: `yarn add <package>` (bỏ hai dấu < và >)

- Chạy docker:

  - Để chạy database (tại thư mục root): `docker-compose -f database-compose.yml up -d`
  - Để ngừng container: `docker-compose -f database-compose.yml down`
  - Xem log ở container: `docker-compose -f database-compose.yml logs -t`

- Tui dùng vscode **(Nhớ cài thêm eslint với prettier đê lint với format)**

## Bắt đầu code

- Chạy lệnh `yarn run dev`

## Note

- Xem task trên jira
- Nhớ chuyển qua branch develop

## Tài liệu xem thêm

- [Nodejs REST API](https://youtube.com/playlist?list=PLw0w5s5b9NK5vec1mvOh5grtNlCwcgO0j)
- [Nodejs API Authentication (JWT)](https://youtube.com/playlist?list=PLw0w5s5b9NK5m3558bDRdZoBVoV08ZpxI)
- [Một vài thứ trong này](https://youtube.com/playlist?list=PLw0w5s5b9NK5SUfrJ8rjIMYitT9K8WB8W)

- [Source code cách viết API](https://github.com/carokrny/e-commerce)

- [Git](https://youtube.com/playlist?list=PLw0w5s5b9NK7dTWqY1li4u4_dZMNeSjQv)
