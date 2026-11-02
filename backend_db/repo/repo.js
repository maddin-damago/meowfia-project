"use strict";

import { pool } from "../utils/db.js";

export async function getAllCats() {
  const conn = await pool.getConnection();

  try {
    const res = await conn.query("SELECT * FROM katze");
    const [rows] = res;
    return rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

export async function getAllClans() {
  const conn = await pool.getConnection();

  try {
    const res = await conn.query("SELECT * FROM clan");
    const [rows] = res;
    return rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

export async function getAllGebiete() {
  const conn = await pool.getConnection();

  try {
    const res = await conn.query("SELECT * FROM gebiete");
    const [rows] = res;
    return rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}
