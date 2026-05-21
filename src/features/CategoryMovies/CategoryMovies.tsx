import {Button} from "@mui/material";
import s from './CategoryMovies.module.css'

type Props = {
    movie: string
}

export const CategoryMovies = ({movie}:Props)=>{
    return (
        <div className={s.category}>
            <h3>{movie}</h3>
            <Button variant={'outlined'}>View more</Button>
        </div>
    )
}