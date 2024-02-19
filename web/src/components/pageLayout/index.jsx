import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import ProductCards from "../productsCards";
import HeaderSection from "../headerSection";
import HeaderApp from "../headerApp";
import { ApiContext } from "../../contexts/ApiContext";

function LayoutPage({ children }) {
  const { products } = useContext(ApiContext);

  let precoA = 0;
  let lucroA = 0;

  let precoB = 0;
  let lucroB = 0;

  let precoC = 0;
  let lucroC = 0;

  let precoD = 0;
  let lucroD = 0;

  const [cardA, setCardA] = useState({
    selecionado: localStorage.getItem("CardA"),
  });

  const [cardB, setCardB] = useState({
    selecionado: localStorage.getItem("CardB"),
  });

  const [cardC, setCardC] = useState({
    selecionado: localStorage.getItem("CardC"),
  });

  const [cardD, setCardD] = useState({
    selecionado: localStorage.getItem("CardD"),
  });

  for (let i = 0; i < products.length; i++) {
    if (products[i].platform === cardA.selecionado) {
      precoA += Number(products[i].cost);
      lucroA += products[i].saleprice - products[i].cost;
    }

    if (products[i].platform === cardB.selecionado) {
      precoB += Number(products[i].cost);
      lucroB += products[i].saleprice - products[i].cost;
    }

    if (products[i].platform === cardC.selecionado) {
      precoC += Number(products[i].cost);
      lucroC += products[i].saleprice - products[i].cost;
    }

    if (products[i].platform === cardD.selecionado) {
      precoD += Number(products[i].cost);
      lucroD += products[i].saleprice - products[i].cost;
    }
  }

  let plataforma = products.map((item) => {
    return item.platform;
  });

  const novaArr = plataforma.filter((este, i) => {
    return plataforma.indexOf(este) === i;
  });

  localStorage.setItem("CardA", cardA.selecionado);
  localStorage.setItem("CardB", cardB.selecionado);
  localStorage.setItem("CardC", cardC.selecionado);
  localStorage.setItem("CardD", cardD.selecionado);

  return (
    <section className="mt-2 rounded-lg bg-secundary-white dark:bg-secundary-blue lg:mt-0 lg:w-[73%] xl:w-full">
      <HeaderApp />
      <main className="p-6">
        <HeaderSection title="Produtos" subtitle="Registrar produtos" />
        <main>
          <div className="mt-10 flex flex-col justify-between gap-2 md:grid md:grid-cols-2 2xl:flex 2xl:flex-row">
            <ProductCards
              platform={novaArr}
              distance={cardA}
              setDistance={setCardA}
              preco={precoA}
              lucro={lucroA}
              selectValue={localStorage.getItem("CardA")}
            />
            <ProductCards
              platform={novaArr}
              distance={cardB}
              setDistance={setCardB}
              preco={precoB}
              lucro={lucroB}
              selectValue={localStorage.getItem("CardB")}
            />
            <ProductCards
              platform={novaArr}
              distance={cardC}
              setDistance={setCardC}
              preco={precoC}
              lucro={lucroC}
              selectValue={localStorage.getItem("CardC")}
            />
            <ProductCards
              platform={novaArr}
              distance={cardD}
              setDistance={setCardD}
              preco={precoD}
              lucro={lucroD}
              selectValue={localStorage.getItem("CardD")}
            />
          </div>
          <div className="mt-5">{children}</div>
        </main>
      </main>
    </section>
  );
}

export default LayoutPage;

LayoutPage.propTypes = {
  children: PropTypes.node.isRequired,
};
