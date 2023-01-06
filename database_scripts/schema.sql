--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Debian 15.1-1.pgdg110+1)
-- Dumped by pg_dump version 15.0

-- Started on 2022-12-30 04:53:23 UTC

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 222 (class 1259 OID 16627)
-- Name: carts; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.carts (
    user_id character(36) NOT NULL,
    product_id character(36) NOT NULL,
    quantity integer
);


ALTER TABLE public.carts OWNER TO root;

--
-- TOC entry 223 (class 1259 OID 16630)
-- Name: categories; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.categories (
    category_id character(36) NOT NULL,
    category_title character varying(50)
);


ALTER TABLE public.categories OWNER TO root;

--
-- TOC entry 219 (class 1259 OID 16614)
-- Name: conversations; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.conversations (
    conversation_id character(36) NOT NULL,
    user_id character(36) NOT NULL,
    shop_id character(36) NOT NULL,
    create_at timestamp without time zone,
    update_at timestamp without time zone
);


ALTER TABLE public.conversations OWNER TO root;

--
-- TOC entry 220 (class 1259 OID 16619)
-- Name: messages; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.messages (
    conversation_id character(36) NOT NULL,
    create_at timestamp without time zone NOT NULL,
    type integer NOT NULL,
    message character varying(255)
);


ALTER TABLE public.messages OWNER TO root;

--
-- TOC entry 217 (class 1259 OID 16606)
-- Name: order_detail; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.order_detail (
    order_id character(36) NOT NULL,
    product_id character(36) NOT NULL,
    unit_price integer,
    quantity integer
);


ALTER TABLE public.order_detail OWNER TO root;

--
-- TOC entry 216 (class 1259 OID 16601)
-- Name: orders; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.orders (
    order_id character(36) NOT NULL,
    user_id character(36) NOT NULL,
    shop_id character(36) NOT NULL,
    order_time timestamp without time zone,
    status integer,
    total integer,
    address character varying(100)
);


ALTER TABLE public.orders OWNER TO root;

--
-- TOC entry 215 (class 1259 OID 16594)
-- Name: products; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.products (
    product_id character(36) NOT NULL,
    shop_id character(36) NOT NULL,
    category_id character(36) NOT NULL,
    name character varying(50) NOT NULL,
    description character varying(255),
    image character varying(100),
    price integer,
    remaining_stock integer,
    rating real
);


ALTER TABLE public.products OWNER TO root;

--
-- TOC entry 221 (class 1259 OID 16624)
-- Name: rating; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.rating (
    user_id character(36) NOT NULL,
    product_id character(36) NOT NULL,
    vote integer,
    comment character varying(255)
);


ALTER TABLE public.rating OWNER TO root;

--
-- TOC entry 218 (class 1259 OID 16609)
-- Name: shops; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.shops (
    shop_id character(36) NOT NULL,
    user_id character(36) NOT NULL,
    name character varying(100),
    status integer,
    image character varying(100),
    rating real
);


ALTER TABLE public.shops OWNER TO root;

--
-- TOC entry 214 (class 1259 OID 16589)
-- Name: users; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.users (
    user_id character(36) NOT NULL,
    username character varying(50) NOT NULL,
    email character varying(50) NOT NULL,
    password character(60) NOT NULL,
    name character varying(50) NOT NULL,
    address character varying(100),
    is_lock boolean DEFAULT false
);


ALTER TABLE public.users OWNER TO root;

--
-- TOC entry 3225 (class 2606 OID 16634)
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (category_id);


--
-- TOC entry 3221 (class 2606 OID 16618)
-- Name: conversations conversations_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.conversations
    ADD CONSTRAINT conversations_pkey PRIMARY KEY (conversation_id);


--
-- TOC entry 3223 (class 2606 OID 16623)
-- Name: messages messages_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (create_at);


--
-- TOC entry 3217 (class 2606 OID 16605)
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (order_id);


--
-- TOC entry 3215 (class 2606 OID 16600)
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (product_id);


--
-- TOC entry 3219 (class 2606 OID 16613)
-- Name: shops shops_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.shops
    ADD CONSTRAINT shops_pkey PRIMARY KEY (shop_id);


--
-- TOC entry 3213 (class 2606 OID 16593)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- TOC entry 3238 (class 2606 OID 16655)
-- Name: carts carts_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(product_id);


--
-- TOC entry 3239 (class 2606 OID 16640)
-- Name: carts carts_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- TOC entry 3233 (class 2606 OID 16695)
-- Name: conversations conversations_shop_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.conversations
    ADD CONSTRAINT conversations_shop_id_fkey FOREIGN KEY (shop_id) REFERENCES public.shops(shop_id);


--
-- TOC entry 3234 (class 2606 OID 16635)
-- Name: conversations conversations_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.conversations
    ADD CONSTRAINT conversations_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- TOC entry 3235 (class 2606 OID 16685)
-- Name: messages messages_conversation_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_conversation_id_fkey FOREIGN KEY (conversation_id) REFERENCES public.conversations(conversation_id);


--
-- TOC entry 3230 (class 2606 OID 16680)
-- Name: order_detail order_detail_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.order_detail
    ADD CONSTRAINT order_detail_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(order_id);


--
-- TOC entry 3231 (class 2606 OID 16665)
-- Name: order_detail order_detail_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.order_detail
    ADD CONSTRAINT order_detail_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(product_id);


--
-- TOC entry 3228 (class 2606 OID 16675)
-- Name: orders orders_shop_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_shop_id_fkey FOREIGN KEY (shop_id) REFERENCES public.shops(shop_id);


--
-- TOC entry 3229 (class 2606 OID 16645)
-- Name: orders orders_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- TOC entry 3226 (class 2606 OID 16700)
-- Name: products products_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(category_id);


--
-- TOC entry 3227 (class 2606 OID 16670)
-- Name: products products_shop_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_shop_id_fkey FOREIGN KEY (shop_id) REFERENCES public.shops(shop_id);


--
-- TOC entry 3236 (class 2606 OID 16660)
-- Name: rating rating_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.rating
    ADD CONSTRAINT rating_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(product_id);


--
-- TOC entry 3237 (class 2606 OID 16650)
-- Name: rating rating_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.rating
    ADD CONSTRAINT rating_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- TOC entry 3232 (class 2606 OID 16690)
-- Name: shops shops_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.shops
    ADD CONSTRAINT shops_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


-- Completed on 2022-12-30 04:53:23 UTC

--
-- PostgreSQL database dump complete
--

