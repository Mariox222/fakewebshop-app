import './App.css';
import fer_logo from './assets/fer_logo.png';
import unizg_logo from './assets/unizglogo.png';
import fer_logo_long from './assets/fer_logo_long.jpg';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="header-flex-container">
                    <img src={fer_logo} className="fer-logo" alt="logo" />
                </div>
            </header>
            <main>
                <div>
                    UPIŠITE URL I PROVJERITE INTERNETSKU TRGOVINU
                </div>

                <form method="POST" id="url_form" autocomplete="off">
                    <label for="url"></label>
                    <input class="" type="text" id="url" maxlength="150" name="url" placeholder="https://www..."></input>
                    <button type="submit" id="button" aria-label="Submit button"
                        style={{}}>
                        Submit
                    </button>

                </form>
            </main>


            <footer class="App-footer">
                <div class="logos-flex-container">
                    <a href="https://www.fer.unizg.hr/" target="_blank" rel="noreferrer">
                        <img src={fer_logo_long} className="fer-logo-long" alt="logo" />
                    </a>
                    <a href="https://www.unizg.hr/" target="_blank" rel="noreferrer">
                        <img src={unizg_logo} className="unizg-logo" alt="logo" />
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default App;
