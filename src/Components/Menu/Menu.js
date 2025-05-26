import React from "react";
import "./Menu.css";

const menuData = {
  entradas: [
    { name: "Salada mista", price: "€4.50" },
    { name: "Queijo da serra", price: "€7.00" },
    { name: "Chouriça", price: "€5.50" },
    { name: "Azeitonas temperadas", price: "€3.00" },
    { name: "Morcela", price: "€5.50" },
    { name: "Farinheira", price: "€5.50" },
    { name: "Pão", price: "€5.50" },
    { name: "Rissois de carne", price: "€5.50" },
    { name: "Rissois de camarão", price: "€5.50" },
    { name: "Croquetes", price: "€5.50" },
    { name: "Bolos de bacalhau", price: "€5.50" },
    { name: "Presunto com melão", price: "€5.50" },
    { name: "Camarão cozido com torradas", price: "€8.00" },
    { name: "Camarão grelhado com torradas", price: "€8.00" },
  ],
  "sopas e cremes": [
    { name: "Caldo verde", price: "€4.50" },
    { name: "Sopa de legumes", price: "€5.50" },
    { name: "Sopa de feijão branco", price: "€5.50" },
    { name: "Creme de cenoura", price: "€5.50" },
    { name: "Creme de brócolos", price: "€5.50" },
    { name: "Sopa do mar", price: "€5.50" },
  ],
  carnes: [
    { name: "Bife à Quinta da Magarenha", price: "€12.00" },
    { name: "Alcatra", price: "€10.00" },
    { name: "Costeleta de novilho", price: "€11.00" },
    { name: "Picanha", price: "€15.00" },
    { name: "Lombinho de porco à Maganrenha", price: "€8.50" },
    { name: "Lombinho do churrasco", price: "€9.00" },
    { name: "Espetada de vitela com gambas", price: "€10.50" },
    { name: "Rolinhos de alcatra com camarões", price: "€12.50" },
    { name: "Posta à Magarenha", price: "€8.00" },
    { name: "Filé mignon", price: "€9.50" },
    { name: "Bifinhos à delícia", price: "€9.00" },
    { name: "Steak poivre", price: "€9.00" },
    { name: "Tornedo", price: "€9.50" },
    { name: "Nacos no churrasco", price: "€8.00" },
  ],
  peixes: [
    { name: "Bacalhau com natas", price: "€14.00" },
    { name: "Salmão grelhado", price: "€13.50" },
    { name: "Robalo grelhada", price: "€12.00" },
    { name: "Polvo frito", price: "€12.00" },
    { name: "Lombinho de pescada", price: "€15.00" },
    { name: "Polvo na brasa", price: "€16.00" },
    { name: "Bacalhau na brasa", price: "€14.50" },
    { name: "Bacalhau cozido", price: "€14.50" },
    { name: "Polvo cozido", price: "€14.50" },
    { name: "Arroz de tamboril", price: "€14.00" },
    { name: "Arroz de peixe", price: "€14.00" },
    { name: "Arroz de polvo", price: "€15.00" },
    { name: "Açorda de marisco", price: "€16.00" },
    { name: "Bacalhau frito", price: "€15.00" },
    { name: "Arroz de bacalhau", price: "€8.00" },
    { name: "Bacalhau com broa", price: "€8.00" },
  ],
  vegano: [
    { name: "Tofu no forno", price: "€9.00" },
    { name: "Legumes salteados", price: "€8.50" },
    { name: "Seitan com broa", price: "€9.00" },
  ],
  bebidas: [
    { name: "Água", price: "€2.50" },
    { name: "Vinho da Casa", price: "€3.50" },
    { name: "Super Bock", price: "€2.00" },
    { name: "Imperial", price: "€1.50" },
    { name: "Sumo natural", price: "€3.00" },
    { name: "Chá", price: "€2.50" },
    { name: "Sagres", price: "€2.00" },
    { name: "Vinho tinto", price: "€4.50" },
    { name: "Vinho branco", price: "€4.50" },
    { name: "Vinho rosé", price: "€4.50" },
    { name: "Refrigerantes", price: "€1.50" },
    { name: "Água tónica", price: "€2.00" },
    { name: "Água com gás", price: "€2.00" },
    { name: "Sumol", price: "€2.00" },
    { name: "Café", price: "€3.50" },
    { name: "Cappuccino", price: "€3.50" },
    { name: "Água das pedras", price: "€2.50" },
  ],
  sobremesas: [
    { name: "Pastel de nata", price: "€2.00" },
    { name: "Mousse de chocolate", price: "€3.00" },
    { name: "Gelado", price: "€3.50" },
    { name: "Salada de futas", price: "€2.50" },
    { name: "Pudim flan", price: "€3.00" },
    { name: "Tarte de amêndoa", price: "€3.50" },
    { name: "Tarte de maçã", price: "€3.50" },
    { name: "Pudim", price: "€3.00" },
  ],
};

export default function Menu() {
  const sortedData = Object.fromEntries(
    Object.entries(menuData).map(([category, items]) => [
      category,
      [...items].sort((a, b) =>
        a.name.localeCompare(b.name, "pt", { sensitivity: "base" })
      ),
    ])
  );

  return (
    <section className="menu-container">
      {Object.entries(sortedData).map(([category, items]) => (
        <div
          key={category}
          className="menu-category">
          <h2 className="category-title">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h2>
          <ul className="category-list">
            {items.map(({ name, price }) => (
              <li
                key={name}
                className="menu-item">
                <span className="item-name">{name}</span>
                <span className="item-price">{price}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
