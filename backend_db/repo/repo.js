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

// Get By Id

export async function getClanById(id) {
  const conn = await pool.getConnection();

  try {
    const res = await conn.query(`SELECT * FROM clan WHERE id = ${id}`);
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
    "INSERT INTO katze (cat_name, cat_rank_id, cat_status) VALUES (:cat_name, :cat_rank_id, 1)",
    cat,
  );
  return result;
}

export async function createNewClanR(clan, cat) {
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();
    const catResult = await createNewCat(cat);

    const newClan = {
      ...clan,
      don_id: catResult.insertId,
    };

    const [clanRes] = await conn.execute(
      "INSERT INTO clan (clan_name, don_id,fische) VALUES (:clan_name,:don_id,:fische)",
      newClan,
    );
    console.log(clanRes);
    const clanId = clanRes.insertId;

    await conn.execute("UPDATE katze SET clan_id = ? WHERE id = ?", [
      clanId,
      newClan.don_id,
    ]);

    await conn.commit();
  } catch (err) {
    await conn.rollback();
    throw err;
  } finally {
    conn.release();
  }
}
