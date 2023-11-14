import { useState } from "react";

export default function ListaProdutos() {
  const [nameProduct, SetNameProduct] = useState<string>("");
  const [precoProduct, SetPrecoProduct] = useState<number>(0);
  const [estoqueProduct, SetEstoqueProduct] = useState<number>(0);

  const [products, SetProducts] = useState<string[]>([]);

  function AddProductArray() {
    SetProducts([...products, nameProduct]);
  }

  return (
    <div>
      <h1>Produtos</h1>
      <input
        type="text"
        value={nameProduct}
        placeholder="Nome do Produto"
        onChange={(e) => SetNameProduct(e.target.value)}
      />
      <input
        type="text"
        value={precoProduct}
        placeholder="Preco do Produto"
        onChange={(e) => SetPrecoProduct(parseFloat(e.target.value))}
      />
      <input
        type="text"
        value={estoqueProduct}
        placeholder="Estoque do Produto"
        onChange={(e) => SetEstoqueProduct(parseInt(e.target.value))}
      />
      <button onClick={() => AddProductArray()}>Inserir Produto</button>

      {products.map((produto) => {
        return <h5>{produto}</h5>;
      })}
    </div>
  );
}
