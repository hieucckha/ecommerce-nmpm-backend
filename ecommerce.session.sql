INSERT INTO users (user_id, username, email, password, name, is_lock)
VALUES ('003',
        'tanhieu',
        'nthieu0112@gmail.com',
        'Conpassheo@123',
        'Nguyễn Tấn Hiếu', '{
    "addr": []
  }'::jsonb);

SELECT *
FROM users

create table users
(
    user_id    char(36)    not null,
    username   varchar(50) not null,
    email      varchar(50) not null,
    "password" char(60)    not null,
    "name"     varchar(50) not null,
    is_lock    integer     null,
    address    jsonb default '{
      "addr": []
    }'::jsonb,
    constraint users_pkey primary key (user_id)
);

create table products
(
    product_id      char(36)    not null,
    shopId         char(36)    not null,
    "name"          varchar(50) not null,
    description     varchar(255),
    image           jsonb default '{
      "image": []
    }'::jsonb,
    price           integer,
    remaining_stock integer,
    classify        jsonb default '{
      "classify": {},
      "detail": []
    }'::jsonb,
    rating          float4,
    constraint products_pkey primary key (product_id)
);

create table orders
(
    order_id   char(36) not null,
    user_id    char(36) not null,
    shopId    char(36) not null,
    order_time timestamp,
    status     integer,
    total      integer,
    address    jsonb default '{}'::jsonb,
    constraint orders_pkey primary key (order_id)
);

create table order_detail
(
    order_id   char(36) not null,
    product_id char(36) not null,
    classify   jsonb    not null default '{}'::jsonb,
    unit_price integer,
    quantity   integer,
    constraint order_detail_pkey primary key (classify)
);

create table shops
(
    shopId char(36) not null,
    user_id char(36) not null,
    "name"  varchar(100),
    status  integer,
    image   varchar(100),
    rating  float4,
    constraint shops_pkey primary key (shopId)
);

create table conversations
(
    conversation_id char(36) not null,
    user_id         char(36) not null,
    shopId         char(36) not null,
    create_at       timestamp,
    update_at       timestamp,
    constraint conversations_pkey primary key (conversation_id)
);

create table messages
(
    conversation_id char(36)  not null,
    create_at       timestamp not null,
    "type"          integer   not null,
    message         varchar(255),
    constraint messages_pkey primary key (create_at)
);

create table rating
(
    user_id    char(36) not null,
    product_id char(36) not null,
    vote       integer,
    "comment"  varchar(255)
);

create table carts
(
    user_id    char(36) not null,
    product_id char(36) not null,
    classify   jsonb    not null default '{}'::jsonb,
    quantity   integer,
    constraint carts_pkey primary key (classify)
);

alter table conversations
    add constraint conversations_user_id_fkey
        foreign key (user_id) references users (user_id);

alter table carts
    add constraint carts_user_id_fkey
        foreign key (user_id) references users (user_id);

alter table orders
    add constraint orders_user_id_fkey
        foreign key (user_id) references users (user_id);

alter table rating
    add constraint rating_user_id_fkey
        foreign key (user_id) references users (user_id);

alter table carts
    add constraint carts_product_id_fkey
        foreign key (product_id) references products (product_id);

alter table rating
    add constraint rating_product_id_fkey
        foreign key (product_id) references products (product_id);

alter table order_detail
    add constraint order_detail_product_id_fkey
        foreign key (product_id) references products (product_id);

alter table products
    add constraint products_shop_id_fkey
        foreign key (shopId) references shops (shopId);

alter table orders
    add constraint orders_shop_id_fkey
        foreign key (shopId) references shops (shopId);

alter table order_detail
    add constraint order_detail_order_id_fkey
        foreign key (order_id) references orders (order_id);

alter table messages
    add constraint messages_conversation_id_fkey
        foreign key (conversation_id) references conversations (conversation_id);

alter table shops
    add constraint shops_user_id_fkey
        foreign key (user_id) references users (user_id);

alter table conversations
    add constraint conversations_shop_id_fkey
        foreign key (shopId) references shops (shopId);



select address -> 'addr'
from users
where user_id = '001'


UPDATE users
SET address = JSONB_SET(
        address,
        '{addr}',
        (SELECT (address -> 'addr') || TO_JSONB(
                '{
                  "name": "Hieu",
                  "phone": "0123456789",
                  "street": "28/33/12 Cu Xa Thanh Da",
                  "wards": "4",
                  "district": "Binh Thanh",
                  "province": "Ho Chi Minh"
                }'::jsonb
            )
         FROM users
         WHERE user_id = '001'),
        false
    )
WHERE user_id = '001';


UPDATE users
set address = '{
  "addr": []
}'
where user_id = '001'

SELECT user_id, address
from users

create table friend
(
    f int,
    s int
)

insert into friend(f, s)
VALUES (1, 2);
insert into friend(f, s)
VALUES (3, 1);

delete
from friend
where f = 2;

update users
set address = '{
  "addr": []
}'::jsonb
where user_id = '001'

select address
from users
where user_id = '001'



UPDATE users
SET address = JSONB_SET(
        address,
        '{addr}', (select (WITH delete_default AS (SELECT JSONB_ARRAY_ELEMENTS(address -> 'addr') addr
                                                   FROM users
                                                   WHERE user_id = '001')
                           SELECT addr || '{"default": "true"}'
                           FROM delete_default
                           WHERE addr ->> 'name' = 'Suong'
                             and addr ->> 'phone' = '0123456789'
                             and addr ->> 'wards' = 'Cau Ong Lanh'
                             and addr ->> 'street' = '135B Tran hung Dao'
                             and addr ->> 'district' = '1'
                             and addr ->> 'province' = 'Ho Chi Minh') ||
                          (WITH delete_default AS (SELECT JSONB_ARRAY_ELEMENTS(address -> 'addr') AS addr
                                                   FROM users
                                                   WHERE user_id = '001')
                           SELECT JSONB_AGG(addr)
                           FROM delete_default
                           WHERE addr ->> 'name' != 'Suong'
                              or addr ->> 'phone' != '0123456789'
                              or addr ->> 'wards' != 'Cau Ong Lanh'
                              or addr ->> 'street' = '135B Tran hung Dao'
                              or addr ->> 'district' != '1'
                              or addr ->> 'province' != 'Ho Chi Minh')))
where user_id = '001'


select * from users
select * from shops
select * from orders
select * from products

select * from categories

insert into categories(category_id, category_title)
values('bf8a16dd-48d8-49ef-ab42-e5a497fb16df', 'Food');
insert into categories(category_id, category_title)
values('5db61ac9-d50e-4ed8-92a7-d71f7a7b6f11', 'Fashion');
insert into categories(category_id, category_title)
values('0122bebe-d24b-4e54-9bd5-9fb285fbeda9', 'Electronice device');
insert into categories(category_id, category_title)
values('1ed3e7c9-1df2-4363-a881-875f20f4e196', 'Houseware');


insert into products(product_id, shop_id, category_id, name, description, image, price, remaining_stock, rating)
values('c564a01c-a640-4d77-a5b5-0c82f5571759', 'bc3295ef-4622-4829-b91c-e40d382c696d', '0122bebe-d24b-4e54-9bd5-9fb285fbeda9', 'Mi ga thap cam', 'bao gom ga va cac loai thuc pham vao cung thom ngon khac', null, 57000, 80, null);

insert into products(product_id, shop_id, category_id, name, description, image, price, remaining_stock, rating)
values('666fd934-9a5d-4e90-8c40-91f884621584', 'bc3295ef-4622-4829-b91c-e40d382c696d', '0122bebe-d24b-4e54-9bd5-9fb285fbeda9', 'Samsung Galaxy S22 Ultra (8GB - 128GB)', 'Samsung Galaxy S22 Ultra (8GB - 128GB)', null, 57000, 80, null);
insert into products(product_id, shop_id, category_id, name, description, image, price, remaining_stock, rating)
values('f3fd76c5-7e9b-4be1-a10e-fb2984964ea0', 'bc3295ef-4622-4829-b91c-e40d382c696d', '0122bebe-d24b-4e54-9bd5-9fb285fbeda9', 'iPhone 14 Pro Max', 'iPhone 14 Pro Max 128GB | Chính hãng VN/A', null, 57000, 80, null);
insert into products(product_id, shop_id, category_id, name, description, image, price, remaining_stock, rating)
values('5eb9a730-d8f9-477f-9e66-91e7bfd5749e', 'bc3295ef-4622-4829-b91c-e40d382c696d', '0122bebe-d24b-4e54-9bd5-9fb285fbeda9', 'Samsung Galaxy Z Flip4', 'Samsung Galaxy Z Flip4 128GB', null, 57000, 80, null);
insert into products(product_id, shop_id, category_id, name, description, image, price, remaining_stock, rating)
values('e95c6be0-acc9-4efe-b442-ae9f229286b0', 'bc3295ef-4622-4829-b91c-e40d382c696d', '0122bebe-d24b-4e54-9bd5-9fb285fbeda9', 'Xiaomi 12T', 'Xiaomi 12T là sản phẩm được nhiều tín đồ công nghệ đánh giá cao với màn hình AMOLED 6.67 inch độ phân giải cao, tần số quét 120Hz, chip MediaTek Dimensity 8100-Ultra, RAM 8GB và bộ nhớ trong 128GB. ', null, 57000, 80, null);

INSERT INTO orders (order_id, shop_id, user_id, order_time, status, total, address)
VALUES ('069d1d3f-fffe-44b4-b3d8-5fe75083c194', '3bdb8cd4-f8ae-4a99-b8cb-bf431f2ae9c6', 'bb9e74f3-e0e9-40a8-a633-6e026fccaf1b', NOW(), 0, null, '135b')
bab93326-6e8a-40fb-b11b-1f23695f7602 bb9e74f3-e0e9-40a8-a633-6e026fccaf1b 3bdb8cd4-f8ae-4a99-b8cb-bf431f2ae9c6 2022-12-30T03:41:53.813 0 null 135 Tran Hung Dao

SELECT * FROM users
SELECT * FROM orders
SELECT * FROM order_detail
