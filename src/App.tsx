type ButtonProps = {
  text: string
}
function Button({ text }: ButtonProps) {
  return <button className="bg-red-300">{text}</button>
}

function App() {
  return (
    <>
      <Button text="Enviar" />
      <Button text="Cancelar" />
      <Button text="Salvar" />
    </>
  )
}

export default App
