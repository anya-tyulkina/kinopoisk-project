import {Container} from "@/common/container"
import s from './Main.module.css'
import {Button, TextField} from "@mui/material";
import {useState, type ChangeEvent} from "react";
import {CategoryMovies} from "@/features/CategoryMovies/CategoryMovies.tsx";

const categoryMovie = ['Popular Movies', 'Top Rated', 'Upcoming', 'Now Playing']

export const Main = () => {
    const [value, setValue] = useState('')

    const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <Container>
            <div className={s.main}>
                <div>
                    <h2>
                        Welcome
                    </h2>
                    <span>Browse highlighted titles from TMDB</span>
                </div>
                <div className={s.search}>
                    <TextField type="text" value={value} onChange={changeValueHandler}
                               placeholder="Search for a movie"/>
                    <Button variant={'contained'} disabled={!value}>search</Button>
                </div>
            </div>

            <div>
                {categoryMovie.map(movie => <CategoryMovies key={movie} movie={movie}/>)}
            </div>

        </Container>
    );
};