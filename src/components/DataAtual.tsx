import { useEffect, useState } from "react";

export default function DataAtual() {
  const [dataFormatada, setDataFormatada] = useState("");
  useEffect(() => {
    const intervalId = setInterval(() => {
      const dataAtual = new Date();
      const dia = String(dataAtual.getDate()).padStart(2, "0");
      const mes = String(dataAtual.getMonth() + 1).padStart(2, "0"); // Lembre-se de que os meses são baseados em zero, então você precisa adicionar 1.
      const ano = dataAtual.getFullYear();
      const hora = String(dataAtual.getHours()).padStart(2, "0");
      const minutos = String(dataAtual.getMinutes()).padStart(2, "0");
      const segundos = String(dataAtual.getSeconds()).padStart(2, "0");

      const novaDataFormatada = `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
      setDataFormatada(novaDataFormatada);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return <p>{dataFormatada}</p>;
}
