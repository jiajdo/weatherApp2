--
-- PostgreSQL database dump
--

-- Dumped from database version 14.8 (Homebrew)
-- Dumped by pg_dump version 14.8 (Homebrew)

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
-- Name: city_weather; Type: TABLE; Schema: public; Owner: jia
--

CREATE TABLE public.city_weather (
    id integer NOT NULL,
    city character varying(30) NOT NULL,
    country character varying(30) NOT NULL,
    temperature character varying(30) NOT NULL,
    feels_like character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    sunrise character varying(30) NOT NULL,
    sunset character varying(30) NOT NULL
);


ALTER TABLE public.city_weather OWNER TO jia;

--
-- Data for Name: city_weather; Type: TABLE DATA; Schema: public; Owner: jia
--

COPY public.city_weather (id, city, country, temperature, feels_like, description, sunrise, sunset) FROM stdin;
\.


--
-- Name: city_weather city_weather_pkey; Type: CONSTRAINT; Schema: public; Owner: jia
--

ALTER TABLE ONLY public.city_weather
    ADD CONSTRAINT city_weather_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

