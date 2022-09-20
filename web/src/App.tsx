interface ButtonProps {
  text: string;
}

function Button(props: ButtonProps) {
  return <button>{props.text}</button>;
}

function App() {
  return (
    <div>
      <Button text="Send 1" />
      <Button text="Send 2" />
      <Button text="Send 3" />
    </div>
  );
}

export default App;
