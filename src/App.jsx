import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import {useState} from "react";



const App = () => {

    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration:1000
    });
    

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return (
        <>
        <div className='main-div'> 
            
            <div className="container">
                
                <h2 style={{paddingTop: "1.4rem"}}>Speech to Text Converter</h2>
                                            <br/>
                <p>This tool will convert the words you hear from your voice into text, and you can copy it to the clipboard as well.</p>
                         
                         <br />

                <div className="main-content" onClick={() =>  setTextToCopy(transcript)}> 
                    {transcript}
                </div>
                       <br /> <br />

                <div className="btn-style">

                    <button className='bttn2' type='button' onClick={setCopied}>
                        {isCopied ? 'Copied!' : 'Copy to clipboard '} <i class="fa-solid fa-paste"></i>
                    </button>

                     <button className='bttn' type='button' onClick={startListening}> Start Listening &ensp; <i class="fa-solid fa-microphone"></i> </button>


                    <button className='animated-button1' type='button' onClick={SpeechRecognition.stopListening}>Stop Listening
                    
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                    
                    </button>
                    

                </div>

            </div>



        </div>
        </>
    );
};

export default App;
