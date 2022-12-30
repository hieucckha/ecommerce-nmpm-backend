INSERT INTO users (
    user_id,
    username,
    email,
    password,
    name,
    address,
    is_lock
  )
VALUES (
    '541f9d51-c519-451a-be27-0928414753c9',
    'Penny_Marks',
    'Penny.Marks@hotmail.com',
    '$2b$10$433ovHA.oAc4Lq4/yRzvz.ryDcj7H336/uLF0x3LaD1c9DMkdypYK',
    'Penny Marks',
    '',
    false
  ),
  (
    'df604262-4d47-48ff-9804-90b5921937e6',
    'Ana.Casper47',
    'Ana_Casper@hotmail.com',
    '$2b$10$Bfng9JTU6hgv5lAZHOcXlOnW5FED60lnZAuECtdvv9kZPZWEVe9jq',
    'Ana Casper',
    '6109 Timmy Stream',
    false
  ),
  (
    '2b843891-609f-4a5c-bf49-171a19490fd5',
    'Olive.Gorczany',
    'Olive.Gorczany@gmail.com',
    '$2b$10$r39C8w4Q9bUcyjhVYLRWy.WGHOJ82nyRRtaY9nLodxLPqvIt.dYvm',
    'Olive Gorczany',
    '913 Ruthe Trace',
    false
  ),
  (
    'e3149f93-6f33-4727-85aa-2e1f7490d86e',
    'Hugh.Dickens',
    'Hugh29@hotmail.com',
    '$2b$10$3I.clCnTnp3WpL5jlW760OVO7.7n3KdwfYgFnwK1A40yVlwQuto5q',
    'Hugh Dickens',
    '8366 Domenick Harbor',
    false
  ),
  (
    'a59f91b6-07fb-4d1d-b498-8c0d06228d10',
    'Molly.Hirthe',
    'Molly18@yahoo.com',
    '$2b$10$ymtO045ttlngx4NEmo1R/uUJZF0cef4rFqU7/r6wBCu9QyeW3Du2G',
    'Molly Hirthe',
    '40635 Waters Glen',
    false
  ),
  (
    'b59895c6-aeb3-43cd-82bf-708d91331fd9',
    'Sean_Champlin98',
    'Sean_Champlin@hotmail.com',
    '$2b$10$4oRsGR6qU5gOOtsv.dvVZeCN2wVGR23dHd7ipra7x00R.xyq7xh4y',
    'Sean Champlin',
    '32215 Roberts Burgs',
    false
  ),
  (
    '01108568-3aa9-4d93-970d-744003f52947',
    'Kelvin92',
    'Kelvin_Quitzon76@yahoo.com',
    '$2b$10$7XvDZqRx7AQt13bjTRmWiugxBRjlJddYnO3/IZzAvchJ7uo9BMtEu',
    'Kelvin Quitzon',
    '863 Ernser Ridges',
    false
  ),
  (
    '0edfc9cb-073d-406a-8d37-3f49180e19db',
    'Darryl.McLaughlin',
    'Darryl_McLaughlin@gmail.com',
    '$2b$10$JPSb9zP3qR6esEBQVJXqwug0MttLrR0mPGd./0Vs8Gv0hFoGortFi',
    'Darryl McLaughlin',
    '',
    false
  ),
  (
    'bb9e74f3-e0e9-40a8-a633-6e026fccaf1b',
    'Kristen.Parisian69',
    'Kristen_Parisian41@yahoo.com',
    '$2b$10$78T5uu/HTRskKhyHZOkNjeYnJTt93sLjC1/7C6WEkFJ8hiqbwaD5C',
    'Kristen Parisian',
    '88551 Nikolaus Circles',
    false
  ),
  (
    '3aee19b0-d449-4ecc-ac8a-50c8544bb627',
    'Lyle.Carter48',
    'Lyle_Carter@hotmail.com',
    '$2b$10$CB9ZeyvFFfWtJosxvPpgWe9jvrQ6zhvzr78Z3LBFz76hoETFZmuwq',
    'Lyle Carter',
    '62618 Jannie Mills',
    false
  );
INSERT INTO shops (shop_id, user_id, name, status, image, rating)
VALUES (
    '3afb47cb-85da-4dc8-aff2-354c4e35ef02',
    '01108568-3aa9-4d93-970d-744003f52947',
    'levent',
    0,
    'https://loremflickr.com/640/480/fashion',
    null
  ),
  (
    '3bdb8cd4-f8ae-4a99-b8cb-bf431f2ae9c6',
    'df604262-4d47-48ff-9804-90b5921937e6',
    'Tiem mi bo',
    0,
    '',
    null
  ),
  (
    'bc3295ef-4622-4829-b91c-e40d382c696d',
    'a59f91b6-07fb-4d1d-b498-8c0d06228d10',
    'CellphoneS',
    0,
    '',
    null
  );
INSERT INTO categories (category_id, category_title)
VALUES ('bf8a16dd-48d8-49ef-ab42-e5a497fb16df', 'Food'),
  (
    '5db61ac9-d50e-4ed8-92a7-d71f7a7b6f11',
    'Fashion'
  ),
  (
    '0122bebe-d24b-4e54-9bd5-9fb285fbeda9',
    'Electronice device'
  ),
  (
    '1ed3e7c9-1df2-4363-a881-875f20f4e196',
    'Houseware'
  );
INSERT INTO products (
    product_id,
    shop_id,
    category_id,
    name,
    description,
    image,
    price,
    remaining_stock,
    rating
  )
VALUES (
    '0dcb49f1-00fe-4438-bace-fc2ca81a4a63',
    '3bdb8cd4-f8ae-4a99-b8cb-bf431f2ae9c6',
    'bf8a16dd-48d8-49ef-ab42-e5a497fb16df',
    'Mi Bo',
    'mi bo rat ngon - kinh chao quy khach',
    '',
    50000,
    12,
    null
  ),
  (
    '76c65f92-63cf-46c8-8a3f-8536f64ad19c',
    '3bdb8cd4-f8ae-4a99-b8cb-bf431f2ae9c6',
    'bf8a16dd-48d8-49ef-ab42-e5a497fb16df',
    'Mif Bo tu xuyen',
    'thom ngon hao hang',
    '',
    55000,
    20,
    null
  ),
  (
    'c564a01c-a640-4d77-a5b5-0c82f5571759',
    '3bdb8cd4-f8ae-4a99-b8cb-bf431f2ae9c6',
    'bf8a16dd-48d8-49ef-ab42-e5a497fb16df',
    'Mi ga thap cam',
    'bao gom ga va cac loai thuc pham vao cung thom ngon khac',
    '',
    57000,
    80,
    null
  ),
  (
    '666fd934-9a5d-4e90-8c40-91f884621584',
    'bc3295ef-4622-4829-b91c-e40d382c696d',
    '0122bebe-d24b-4e54-9bd5-9fb285fbeda9',
    'Samsung Galaxy S22 Ultra (8GB - 128GB)',
    'Samsung Galaxy S22 Ultra (8GB - 128GB)',
    '',
    57000,
    80,
    null
  ),
  (
    'f3fd76c5-7e9b-4be1-a10e-fb2984964ea0',
    'bc3295ef-4622-4829-b91c-e40d382c696d',
    '0122bebe-d24b-4e54-9bd5-9fb285fbeda9',
    'iPhone 14 Pro Max',
    'iPhone 14 Pro Max 128GB | Chính hãng VN/A',
    '',
    57000,
    80,
    null
  ),
  (
    '5eb9a730-d8f9-477f-9e66-91e7bfd5749e',
    'bc3295ef-4622-4829-b91c-e40d382c696d',
    '0122bebe-d24b-4e54-9bd5-9fb285fbeda9',
    'Samsung Galaxy Z Flip4',
    'Samsung Galaxy Z Flip4 128GB',
    '',
    57000,
    80,
    null
  ),
  (
    'e95c6be0-acc9-4efe-b442-ae9f229286b0',
    'bc3295ef-4622-4829-b91c-e40d382c696d',
    '0122bebe-d24b-4e54-9bd5-9fb285fbeda9',
    'Xiaomi 12T',
    'Xiaomi 12T là sản phẩm được nhiều tín đồ công nghệ đánh giá cao với màn hình AMOLED 6.67 inch độ phân giải cao, tần số quét 120Hz, chip MediaTek Dimensity 8100-Ultra, RAM 8GB và bộ nhớ trong 128GB. ',
    '',
    57000,
    80,
    null
  );
INSERT INTO orders (
    order_id,
    user_id,
    shop_id,
    order_time,
    status,
    total,
    address
  )
VALUES (
    '8d87d665-1513-4b04-887b-7fee046664e8',
    'bb9e74f3-e0e9-40a8-a633-6e026fccaf1b',
    '3bdb8cd4-f8ae-4a99-b8cb-bf431f2ae9c6',
    '2022-12-30 03:28:03.525197',
    0,
    0,
    '135b'
  ),
  (
    '32775732-e578-4d4e-ab2e-5d1e6c52b094',
    'bb9e74f3-e0e9-40a8-a633-6e026fccaf1b',
    '3bdb8cd4-f8ae-4a99-b8cb-bf431f2ae9c6',
    '2022-12-30 03:45:19.375',
    0,
    0,
    '135 Tran Hung Dao'
  ),
  (
    'aeeb8219-d0f5-42cd-a970-50cce5c862b9',
    'bb9e74f3-e0e9-40a8-a633-6e026fccaf1b',
    'bc3295ef-4622-4829-b91c-e40d382c696d',
    '2022-12-30 03:45:19.535',
    1,
    0,
    '135 Tran Hung Dao'
  );
INSERT INTO order_detail (order_id, product_id, unit_price, quantity)
VALUES (
    '32775732-e578-4d4e-ab2e-5d1e6c52b094',
    '0dcb49f1-00fe-4438-bace-fc2ca81a4a63',
    50000,
    1
  ),
  (
    '32775732-e578-4d4e-ab2e-5d1e6c52b094',
    '76c65f92-63cf-46c8-8a3f-8536f64ad19c',
    55000,
    2
  ),
  (
    'aeeb8219-d0f5-42cd-a970-50cce5c862b9',
    'f3fd76c5-7e9b-4be1-a10e-fb2984964ea0',
    57000,
    2
  ),
  (
    'aeeb8219-d0f5-42cd-a970-50cce5c862b9',
    '666fd934-9a5d-4e90-8c40-91f884621584',
    57000,
    1
  );