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

// POST

export async function createNewCat(cat) {
  const [result] = await pool.execute(
    "INSERT INTO katze (cat_name, cat_rank_id, cat_status) VALUES (:name, :cat_rank_id, 1)",
    cat,
  );
  console.log(result);
  return result;
}

export async function createNewClan(data) {
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();
    const [catResult] = createNewCat(data.cat);

    await conn.commit();
  } catch {}
}
