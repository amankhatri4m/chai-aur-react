import { useState, useCallback, useEffect, useRef } from 'react';

const PasswordGenerator = ()=>{

    const [password,setPassword]= useState("");
    const [allowNumbers,setAllowNumbers] = useState(false);
    const [allowChars,setAllowChars] = useState(false);
    const [length, setLength] = useState(8);

    const passwordRef = useRef("passwordRef");


    // useEffect just like ngOnInit
    useEffect(()=>{
        generatePassword(); // if we call outside it then it will create loop because of state change.
    },[length,allowChars,allowNumbers,setPassword])


    const generatePassword = useCallback(()=>{
        // usecallback is doing memoization.
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(allowNumbers) str +="0123456789";
        if(allowChars) str +="!@#$%^&*()_+=[]{}~`";

        for(let i=0;i<=length;i++){
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }

        setPassword(pass);

    },[allowNumbers,allowChars,setPassword])

    const copyToClipBoard = ()=>{
        passwordRef.current.select();
        window.navigator.clipboard.writeText(password);
    }

    return (
        
        <div>
              <h2>Password Generator</h2>
          <div>
            <label>Password</label>
            <input
              type="text"
              value={password} readOnly
              ref = {passwordRef}
              />
              
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={allowNumbers}
                onChange={(e) => setAllowNumbers(e.target.checked)}
              />
              Include Numbers
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={allowChars}
                onChange={(e) => setAllowChars(e.target.checked)}
              />
              Include Characters
            </label>
          </div>
          <button onClick={copyToClipBoard}>Copy</button>
          <div>
            <h3>Your Generated Password:</h3>
            <p>{password}</p>
          </div>
        </div>
      );
}

export default PasswordGenerator;