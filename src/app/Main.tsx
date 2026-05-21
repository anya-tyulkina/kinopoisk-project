import {Container} from "@/common/container"
import s from './Main.module.css'

export const Main = () => {
    return (
        <Container>
            <div className={s.main}>
                <h2>
                    Welcome
                </h2>
                <span>Browse highlighted titles from TMDB</span>
            </div>

        </Container>
    );
};