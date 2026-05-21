import s from './App.module.css'
import {Footer, Header} from "@/common/components";
import {Routing} from "@/common/routing";

function App() {

    return (
        <div className={s.app}>
            <Header/>
            <main className={s.mainContent}>
                <Routing/>
            </main>
            <Footer/>
        </div>
    )
}

export default App
