import React, { useState } from "react";

export default function TextForm(props) {
  const clickUP = () => {
    let newstr = text.toUpperCase();
    setText(newstr);
  };
  const clickLow = () => {
    let newstr = text.toLowerCase();
    setText(newstr);
  };
  const clickLen = () => {
    let newstr = text.length;
    setText(newstr);
  };
  const clickRev = () => {
    let newstr = text.split("").reverse().join(" ");
    setText(newstr);
  };
  const clickPalindrome = () => {
    let smallStr = text.toLowerCase();
    let newstr = text.split("").reverse().join("");
    console.log(newstr);
    if (smallStr === newstr) {
      setText("String is Palindrom");
    } else {
      setText("String is not a Palindrom");
    }
  };
  const clickOccurance = () => {
    let result = {};
    for (let i = 0; i < text.length; i++) {
      let char = text.charAt(i);
      if (!result[char]) {
        result[char] = 1;
      } else {
        result[char] += 1;
      }
    }
    let output = " ";
    for (let key in result) {
      output += key + " : " + result[key] + " ";
    }
    setText(output);
  };
  const clickVowel = () => {
    let small = text.toLowerCase();
    console.log(small);
    const vowelCount = {
      a: 0,
      e: 0,
      i: 0,
      o: 0,
      u: 0,
    };
    for (let char of small) {
      if (char in vowelCount) {
        vowelCount[char]++;
      }
    }
    let output = " ";
    console.log(output);
    for (let i in vowelCount) {
      output += i + " : " + vowelCount[i] + " ";
    }
    setText(output);
  };
  const clickClear = () => {
    let newstr = "";
    setText(newstr);
  };
  const stateChange = (event) => {
    setText(event.target.value);
  };

  //useState - It is used to defined state within the program
  //text is a variable , we can not assign value to text directly i.e. text = 'hello'
  //setText is used to assigned value to the text i.e. setText('hello')
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="form-group">
          <textarea
            className="form-control"
            value={text}
            id="Textarea1"
            onChange={stateChange}
            rows="5"
            placeholder="Enter Text"
          ></textarea>
        </div>

        <table className="table">
          <tbody>
            <tr>
              <th scope="row"></th>
              <td>
                <button className="btn btn-primary" onClick={clickUP}>
                  Convert to Upper Case
                </button>
              </td>
              <td>
                <button className="btn btn-primary" onClick={clickLow}>
                  Covert to Lower Case
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>
                <button className="btn btn-primary" onClick={clickLen}>
                  Check string length
                </button>
              </td>
              <td>
                <button className="btn btn-primary" onClick={clickRev}>
                  Reverse String
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>
                <button className="btn btn-primary" onClick={clickPalindrome}>
                  Check String is Palindrom?
                </button>
              </td>
              <td>
                <button className="btn btn-primary" onClick={clickOccurance}>
                  Check Character Occurance
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>
                <button className="btn btn-primary" onClick={clickVowel}>
                  Count Vowels
                </button>
              </td>
              <td>
                <button className="btn btn-primary" onClick={clickClear}>
                  Clear Text
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
      </div>
    </>
  );
}
