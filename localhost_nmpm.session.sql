SELECT *
FROM orders oder
  join order_detail od on oder.order_id = od.order_id
where oder.order_id = '32775732-e578-4d4e-ab2e-5d1e6c52b094'