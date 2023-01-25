import { memo } from "react";
//El memo ayuda a que este componente no se carge de nuevo ya que su propiedad value no cambio
const Small = memo(({ value }) => {
  console.log("Me volví a dibujar");
  return <small>{value}</small>;
});

export default Small;