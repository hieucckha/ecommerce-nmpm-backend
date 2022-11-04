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

## Bắt đầu code
- Chạy lệnh `yarn run start`

## Note

- Xem task trên jira
- Nhớ chuyển qua branch develop
