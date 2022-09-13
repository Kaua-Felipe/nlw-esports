interface ButtonProps {
  title: string
}

function Button({ title }: ButtonProps) {
  return (
    <button>{title}</button>
  )
}

function App() {
  return (
    <>
      <Button title="Send 1" />
      <Button title="Send 2" />
      <Button title="Send 3" />
      <Button title="Hello, World!" />
    </>
  )
}

export default App
