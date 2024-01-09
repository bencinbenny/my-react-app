import {useRef} from 'react';

export default function MyApp() {
  const inputRef = useRef(null);
  function MyButton() {
    return (
      <button onClick={MyButtonClick}>
        Click me
      </button>
    );
  }
  
  function MyBox() {
    return (
      <input ref={inputRef} id="name" type="text" placeholder="Name">
        </input>
    );
  }
  
  function MyLabel() {
    return (
      <label>
        Name  
        </label>
    );
  }

function MyButtonClick()
{
  let message = "Hi " + inputRef.current.value +",\nWelocome to React World!!";
  alert(message);
}
  return (
    <div>
      <h1>Welcome to React World</h1>
      <MyLabel/><MyBox />
      <MyButton />
    </div>
  );
}