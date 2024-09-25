import express from "express";
import { createClient } from "@supabase/supabase-js";
import SupabaseClient from "@supabase/supabase-js";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();

// using morgan for logs
app.use(morgan("combined"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const supabase = SupabaseClient.createClient(
  "https://rkyxoujgoxcdfjlrxmab.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJreXhvdWpnb3hjZGZqbHJ4bWFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY3NjIyMDgsImV4cCI6MjAxMjMzODIwOH0.R2bd2-jh3S5t6Khi3z3cNEbkJr5vZJ-fTZbmka18g0k"
);

app.get("/portfolio", async (req, res) => {
  const { data, error } = await supabase.from("portfolio-data").select();
  res.send(data);
});

app.get("/products/:id", async (req, res) => {
  const { data, error } = await supabase
    .from("products")
    .select()
    .is("id", req.params.id);
  res.send(data);
});

app.post("/products", async (req, res) => {
  const { error } = await supabase.from("products").insert({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  });
  if (error) {
    res.send(error);
  }
  res.send("created!!");
});

app.put("/products/:id", async (req, res) => {
  const { error } = await supabase
    .from("products")
    .update({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
    })
    .eq("id", req.params.id);
  if (error) {
    res.send(error);
  }
  res.send("updated!!");
});

app.delete("/products/:id", async (req, res) => {
  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", req.params.id);
  if (error) {
    res.send(error);
  }
  res.send("deleted!!");
});

app.get("/", (req, res) => {
  res.send("Hello I am working my friend Supabase <3");
});

app.get("*", (req, res) => {
  res.send("Hello again I am working my friend to the moon and behind <3");
});

app.listen(3000, () => {
  console.log(`> Ready on http://localhost:3000`);
});
